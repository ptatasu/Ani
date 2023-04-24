import { getAnimeList, getAnimeInfos, getInfo } from './utils.js';

$(document).ready(async () => {
    let chars = { ',': ' ', '"': '', '[': '', ']': '' };
    let data = '';
    let list = '';
    /**
     * Getting the page 1 of top airing anime
     */
    const res = await getAnimeList(1);
    // console.log(res, 1);
    res.map(async (anime) => {
        const animeInfo = await getAnimeInfos(anime.id);
        const info = await getInfo(anime.id);
        const genres = JSON.stringify(info.genres);
        const genre = genres.replaceAll(/[,"[\]]/g, (i) => chars[i]);
        // console.log(names);
        data = `<div class="genre">Genres: ${genre}</div><div class="status">Status: ${info.status}</div>`;
        if (animeInfo.hasSub === true && animeInfo.hasDub === true) {
            list += `<div data-names="${info.otherName}" data-status="${info.status}" class="item sub dub" id="${animeInfo.url.slice(7)}">`;
        } else if (animeInfo.hasDub === true) {
            list += `<div data-names="${info.otherName}" data-status="${info.status}" class="item dub" id="${animeInfo.url.slice(7)}">`;
        } else if (animeInfo.hasSub === true) {
            list += `<div data-names="${info.otherName}" data-status="${info.status}" class="item sub" id="${animeInfo.url.slice(7)}">`;
        }

        list += `<img class="poster" src="${info.image}" alt="Poster Image" srcset="">
                    <p class="title">${animeInfo.title}</p>            
                    ${data}
                    <p class="episodes">Episodes: ${animeInfo.totalEpisodes}</p>
                </div>`;
    });
    /**
     * Getting the page 2 of the top airing anime
     */
    const res2 = await getAnimeList(2);
    // console.log(res2, 2);
    res2.map(async (anime) => {
        const animeInfo = await getAnimeInfos(anime.id);
        const info = await getInfo(anime.id);
        const genres = JSON.stringify(info.genres);
        const genre = genres.replaceAll(/[,"[\]]/g, (i) => chars[i]);
        // console.log(names);
        data = `<div class="genre">Genres: ${genre}</div><div class="status">Status: ${info.status}</div>`;
        if (animeInfo.hasSub === true && animeInfo.hasDub === true) {
            list += `<div data-names="${info.otherName}" data-status="${info.status}" class="item sub dub" id="${animeInfo.url.slice(7)}">`;
        } else if (animeInfo.hasDub === true) {
            list += `<div data-names="${info.otherName}" data-status="${info.status}" class="item dub" id="${animeInfo.url.slice(7)}">`;
        } else if (animeInfo.hasSub === true) {
            list += `<div data-names="${info.otherName}" data-status="${info.status}" class="item sub" id="${animeInfo.url.slice(7)}">`;
        }

        list += `<img class="poster" src="${info.image}" alt="Poster Image" srcset="">
                    <p class="title">${animeInfo.title}</p>            
                    ${data}
                    <p class="episodes">Episodes: ${animeInfo.totalEpisodes}</p>
                </div>`;
        $('.container').html(list);
        console.log(list);
    });

    /**
     * onClick function
     * Redirects user to anime info whenever clicked on the top airing section
     */
    $('.container').on('click', '.item', function () {
        const episodeId = $(this).attr('id');
        const otherName = $(this).attr('data-names');
        const status = $(this).attr('data-status');
        window.location = `anime/info?id=${episodeId}&s=${status}&n=${otherName}`;
    });
});
