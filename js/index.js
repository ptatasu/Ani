import { getAnimeList, getAnimeInfos, getInfo } from './utils.js';

$(document).ready(async () => {
    let status = '';
    let chars = { ',': ' ', '"': '', '[': '', ']': '' };
    let data = '';
    let list = '';
    const res = await getAnimeList();
    // console.log(res);
    res.map(async (anime) => {
        const animeInfo = await getAnimeInfos(anime.id);
        const info = await getInfo(anime.id);
        const genres = JSON.stringify(info.genres);
        // names = info.otherName;
        const genre = genres.replaceAll(/[,"[\]]/g, (i) => chars[i]);
        // console.log(names);
        const style = `width: 300px; height: 450px; background-image: url(${info.image}); background-size: cover; background-repeat: no-repeat;`;
        data = `<div class="genre">${genre}</div><div class="status">${info.status}</div>`;
        if (animeInfo.hasSub === true && animeInfo.hasDub === true) {
            list += `<div data-names="${info.otherName}" class="item sub dub" id="${animeInfo.url.slice(7)}" style="${style}">`;
        } else if (animeInfo.hasDub === true) {
            list += `<div data-names="${info.otherName}" class="item dub" id="${animeInfo.url.slice(7)}" style="${style}">`;
        } else if (animeInfo.hasSub === true) {
            list += `<div data-names="${info.otherName}" class="item sub" id="${animeInfo.url.slice(7)}" style="${style}">`;
        }
        list += `<p class="title">${animeInfo.title}</p>            
                    ${data}
                    <p class="episodes">${animeInfo.totalEpisodes}</p>
                </div>`;
        $('.container').html(list);
        status = info.status;
    });
    $('.container').on('click', '.item', function () {
        const episodeId = $(this).attr('id');
        const otherName = $(this).attr('data-names');
        window.location = `info?id=${episodeId}&s=${status}&n=${otherName}`;
    });
});
