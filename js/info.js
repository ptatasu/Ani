import { getAnimeId, getInfo } from './utils.js';

$(document).ready(async () => {
    const animeId = await getAnimeId();
    const info = await getInfo(animeId);
    let episodes = '';
    info.episodes.map((episode, index) => {
        episodes += `<div id="${episode.id}" class="episode">${index + 1}</div>`;
        console.log(episode);
    });
    const data = `<div id=${info.id} >
    <img id="poster" src="${info.image}" alt="poster_image" width="225" height="311" draggable="false"/>
    ${info.title} ${info.subOrDub} ${info.status} ${info.description} ${episodes}
</div>`;
    $('.container').html(data);

    $('.container').on('click', '.episode', function () {
        const episodeId = $(this).attr('id');
        // getAnimeId(animeId);
        window.location = `watch?id=${episodeId}`;
    });
});
