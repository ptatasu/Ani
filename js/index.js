import { getAnime, getDubInfo, getInfo } from './utils.js';

$(document).ready(async () => {
    let chars = { ',': ' ', '"': '', '[': '', ']': '' };
    let list = '';
    const animes = await getAnime(1);
    const animeList = animes.results;
    // console.log(list);
    let data = '';
    animeList.forEach(async (anime) => {
        const info = await getInfo(anime.id);
        const dubInfo = await getDubInfo(anime.id);
        console.log(info);
        console.log(dubInfo);
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
        list += `<img class="poster" src="${info.image}" alt="Poster Image" srcset="">
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
    animeList2.forEach(async (anime) => {
        const info = await getInfo(anime.id);
        const dubInfo = await getDubInfo(anime.id);
        console.log(info);
        console.log(dubInfo);
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
        list += `<img class="poster" src="${info.image}" alt="Poster Image" srcset="">
                    <p class="title">${info.title}</p>            
                    ${data}
                    <p class="episodes">Episodes: ${info.totalEpisodes}</p>
                </div>`;
        $('.container').html(list);
    });
    $('.container').on('click', '.item', function () {
        const animeId = $(this).attr('id');
        // getAnimeId(animeId);
        window.location = `info?id=${animeId}`;
    });
});
