import { getAnime, getDubInfo, getInfo, getRecent, search } from './utils.js';

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
        $('.container').html(list);
    });
    const recent = await getRecent();
    const recentAnimes = recent.results;
    let links = '';
    // console.log(recentAnimes);
    recentAnimes.map(async (anime) => {
        links += `<div class="recent-item" data-ep-id="${anime.episodeId.slice(anime.id.length)}" id="${anime.id}"><img class="recent-poster" src="${
            anime.image
        }"  draggable="false" /><div class="info-container"><div class="title" href="anime/watch?id=${anime.episodeId}">${anime.title}</div><a class="link" href="anime/watch?id=${
            anime.episodeId
        }">Episode ${anime.episodeNumber}</a></div></div>`;
        $('.recent-container').html(links);
    });

    $('.recent-container').on('click', '.recent-item', function () {
        const animeId = $(this).attr('id');
        const epId = $(this).attr('data-ep-id');
        console.log(animeId);
        window.location = `anime/watch?id=${animeId}&e=${epId}`;
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
        const query = $('.search').val();
        if (query !== '') {
            const res = await search(query);
            console.log(res);
        }
    });
});
