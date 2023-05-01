import { getAnime, getDubInfo, getInfo, getRecent, search } from './utils.js';

setTimeout(() => {
    let title = document.querySelector('.main-title');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let i = 1;
    const interval = setInterval(() => {
        const text = 'TOP AIRING';
        title.innerHTML = title.innerHTML
            .split('')
            .map((letter, index) => {
                if (index < i) {
                    return text[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');
        if (i >= title.innerHTML.length) {
            clearInterval(interval);
        }
        i += 1 / 7;
    }, 30);
}, 5000);

$(document).ready(async () => {
    let chars = { ',': ' ', '"': '', '[': '', ']': '' };
    let list = '';
    const animes = await getAnime(1);
    const animeList = animes.results;
    // console.log(list);
    let data = '';
    animeList.map(async (anime) => {
        const info = await getInfo(anime.id);
        const dubInfo = await getDubInfo(anime.id);
        // console.log(info);
        // console.log(dubInfo);
        const genres = JSON.stringify(info.genres);
        const genre = genres.replaceAll(/[,"[\]]/g, (i) => chars[i]);
        data = `<div class="genre">Genres: ${genre}</div><div class="status">Status: ${info.status}</div>`;
        list += `<div data-names="${info.otherName}" data-status="${info.status}" class="item" id="${info.id}">`;
        if (!dubInfo.message) {
            list += `<div class="sub">SUB</div>
            <div class="dub">DUB</div>`;
        } else {
            list += `<div class="sub">SUB</div>`;
        }
        list += `<img class="poster" src="${info.image}" alt="Poster Image" draggable="false" />
                    <p class="title">${info.title}</p>            
                    ${data}
                    <p class="episodes">Episodes: ${info.totalEpisodes}</p>
                </div>`;
        // $('.container').html(list);
    });
    const animes2 = await getAnime(2);
    const animeList2 = animes2.results;
    // console.log(list);
    let data2 = '';
    animeList2.map(async (anime) => {
        const info = await getInfo(anime.id);
        const dubInfo = await getDubInfo(anime.id);
        // console.log(info);
        // console.log(dubInfo);
        const genres = JSON.stringify(info.genres);
        const genre = genres.replaceAll(/[,"[\]]/g, (i) => chars[i]);
        data2 = `<div class="genre">Genres: ${genre}</div><div class="status">Status: ${info.status}</div>`;
        list += `<div data-names="${info.otherName}" data-status="${info.status}" class="item" id="${info.id}">`;
        if (!dubInfo.message) {
            list += `<div class="sub">SUB</div>
            <div class="dub">DUB</div>`;
        } else {
            list += `<div class="sub">SUB</div>`;
        }
        list += `<img class="poster" src="${info.image}" alt="Poster Image" draggable="false" />
                    <p class="title">${info.title}</p>            
                    ${data}
                    <p class="episodes">Episodes: ${info.totalEpisodes}</p>
                </div>`;
        setTimeout(() => {
            $('.recent-loader').addClass('slide-right');
            $('.loader').addClass('slide-left');
            $('.container').html(list);
        }, 3000);
    });
    const recent = await getRecent();
    const recentAnimes = recent.results;
    let links = '';
    // console.log(recentAnimes);
    recentAnimes.map(async (anime) => {
        links += `<div class="recent-item" data-ep-id="${anime.episodeId}" id="${anime.id}"><img class="recent-poster" src="${
            anime.image
        }"  draggable="false" /><div class="info-container"><div class="title">${anime.title}</div><a class="link" href="anime/watch?id=${anime.id}&e=${anime.episodeId.slice(
            anime.id.length
        )}">Episode ${anime.episodeNumber}</a></div></div>`;
        $('.recent-container').html(links);
    });

    $('.recent-container').on('click', '.recent-item', function () {
        const animeId = $(this).attr('id');
        const episodeId = $(this).attr('data-ep-id');
        const episodeNum = episodeId.slice(episodeId.length - 9);
        const episodeNumber = episodeNum.replaceAll(/[^0-9.]/g, '');
        window.location = `anime/watch?id=${animeId}&e=${episodeId}&n=${episodeNumber}`;
    });
    $('.navbar').on('click', '.chev', function () {
        if ($(this).attr('id') === 'off') {
            $(this).attr('src', 'src/expand_less.svg');
            $(this).attr('id', 'on');
            $('.dropdown').css('display', 'block');
        } else {
            $(this).attr('src', 'src/expand.svg');
            $(this).attr('id', 'off');
            $('.dropdown').css('display', 'none');
        }
    });

    $('.container').on('click', '.item', function () {
        const animeId = $(this).attr('id');
        window.location = `anime/info?id=${animeId}`;
    });

    $('.search').on('keyup', async () => {
        const loader = ` <div class="loader"><img src="src/loader.gif" alt="loader" srcset=""></div>`;
        const query = $('.search').val();
        let searchItem = '';
        if (query !== '') {
            $('.search-items').css('display', 'block');
            const res = await search(query);
            const result = res.results;
            result.map((item) => {
                const style = `background-image: url(${item.image})`;
                searchItem += `<div id="${item.id}" class="search-item">
                                <div class="search-poster" style='${style}'></div>
                                <div class="search-title">${item.title}</div>
                                </div>`;
                setTimeout(() => {
                    $('.search-items').html(searchItem);
                }, 1000);
                $('.search-items').html(loader);
            });
            // console.log(searchItem);
        } else {
            $('.search-items').css('display', 'none');
        }
    });

    $('.search-items').on('click', '.search-item', function () {
        const animeId = $(this).attr('id');
        // console.log(animeId);
        window.location = `anime/info?id=${animeId}`;
    });
});
