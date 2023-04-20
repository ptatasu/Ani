import { getAnime, getInfo } from './utils.js';

$(document).ready(async () => {
    const animes = await getAnime();
    const list = animes.results;
    // console.log(list);
    let data = '';
    list.forEach(async (anime) => {
        const info = await getInfo(anime.id);
        // console.log(info);
        let genres = '';
        info.genres.map((genre) => {
            genres += `${genre} `;
        });
        data += `<div id=${info.id} className="poster"><img src="${info.image}" alt="poster_image" width="225" height="311" />${info.title} ${info.subOrDub} ${info.status} ${info.totalEpisodes} ${genres}</div>`;
        // console.log(data);
        $('.container').html(data);
    });
});
