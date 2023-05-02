import { getAnimeId, getAnimeEpisodeLink, getEpisodeId, getInfo, search, getEpisodeNumber } from './utils.js';

$(document).ready(async () => {
    let streamLink = '';
    const animeId = await getAnimeId();
    const episodeId = await getEpisodeId();
    const episodeNumber = await getEpisodeNumber();
    const episodeLink = await getAnimeEpisodeLink(episodeId);
    const info = await getInfo(animeId);
    // console.log(animeId);
    episodeLink.every((stream) => {
        if (stream.name === 'Streamsb') {
            streamLink = stream.url;
            return false;
        } else {
            // console.log(stream.name);
            return true;
        }
    });
    let infos = '';
    // console.log(episodeNumber);
    if (episodeNumber == info.totalEpisodes) {
        infos += `<div class="prev"><a href="watch?id=${animeId}&e=${episodeId.slice(0, episodeId.length - episodeNumber.length)}${episodeNumber - 1}&n=${
            episodeNumber - 1
        }">Previous Episode</a></div>`;
    } else if (episodeNumber < info.totalEpisodes && parseInt(episodeNumber) !== 1) {
        infos += `<div class="prev"><a href="watch?id=${animeId}&e=${episodeId.slice(0, episodeId.length - episodeNumber.length)}${episodeNumber - 1}&n=${
            episodeNumber - 1
        }">Previous Episode</a></div><div class="next"><a href="watch?id=${animeId}&e=${episodeId.slice(0, episodeId.length - episodeNumber.length)}${parseInt(episodeNumber) + 1}&n=${
            parseInt(episodeNumber) + 1
        }">Next Episode</a></div>`;
    } else {
        infos = `<div class="next"><a href="watch?id=${animeId}&e=${episodeId.slice(0, episodeId.length - episodeNumber.length)}${parseInt(episodeNumber) + 1}&n=${
            parseInt(episodeNumber) + 1
        }">Next Episode</a></div>`;
    }
    const type = info.type;
    // console.log(info);
    infos += `<div class="data"><img id="${info.id}" src="${info.image}" alt="poster" class="poster" style="width: 100px; height: 138px;">
    <div class="text">
        <div id="${info.id}" class="title"><a class="title" href="info?id=${info.id}">${info.title}</a> - Episode ${episodeNumber}</div>
        <div class="status">${info.status}</div>
        <div class="type">${type.toLowerCase()}</div>
    </div></div>`;
    const video = `<div class="video-container"><iframe src="${streamLink}" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe></div>`;
    const data = video + infos;
    $('.container').html(data);
    $('.navbar').on('click', '.chev', function () {
        if ($(this).attr('id') === 'off') {
            $(this).attr('src', '../src/expand_less.svg');
            $(this).attr('id', 'on');
            $('.dropdown').css('display', 'block');
        } else {
            $(this).attr('src', '../src/expand.svg');
            $(this).attr('id', 'off');
            $('.dropdown').css('display', 'none');
        }
    });
    $('.search').on('keyup', async () => {
        const loader = ` <div class="loader"><img src="../src/loader.gif" alt="loader" srcset=""></div>`;
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
        window.location = `../anime/info?id=${animeId}`;
    });
});
