import { getAnimeList, getAnimeInfo, getInfo } from './utils.js';
let list = '';

$(document).ready(async () => {
    let data = '';
    let list = '';
    const res = await getAnimeList();
    // console.log(res);
    res.map(async (anime) => {
        const animeInfo = await getAnimeInfo(anime.id);
        const info = await getInfo(anime.id);
        const genre = info.genres;
        console.log(animeInfo);
        genre.map((genre) => {
            let genres = '';
            // console.log(genre);
            genres = `<p class="genre">${genre}</p>`;
        });
        data = `<div class="genre">${genre}</div><div class="status">${info.status}</div>`;
        if (animeInfo.hasSub === true && animeInfo.hasDub === true) {
            list += `<div class="item sub dub" id="${animeInfo.url.slice(7)}">`;
        } else if (animeInfo.hasDub === true) {
            list += `<div class="item dub" id=" ${animeInfo.url.slice(7)}">`;
        } else if (animeInfo.hasSub === true) {
            list += `<div class="item sub" id=" ${animeInfo.url.slice(7)}">`;
        }
        list += `<img id="poster" src="${animeInfo.image}" alt="poster_image" width="225" height="311" draggable="false"/>
                    <p class="title">${animeInfo.title}</p>            
                    ${data}
                    <p class="episodes">${animeInfo.totalEpisodes}</p>
                </div>`;
        $('.container').html(list);
    });
    $('.container').on('click', '.item', function () {
        const episodeId = $(this).attr('id');
        window.location = `info?id=${episodeId}`;
    });
});
