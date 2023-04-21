import { getAnimeId, getInfo, getDubStatus, getDubInfo } from './utils.js';

$(document).ready(async () => {
    const animeId = await getAnimeId();
    const info = await getInfo(animeId);
    const dubStatus = await getDubStatus(animeId);
    let dubEpisodes = '';
    let hasDub = '';

    /**
     * checks if theres a dub version of the anime
     */
    if (dubStatus == 200) {
        // console.log(dubStatus);
        const dubInfo = await getDubInfo(animeId);
        // console.log(dubInfo);
        hasDub = 'dub';
        dubInfo.episodes.map((episode, index) => {
            dubEpisodes += `<div id='${episode.id}' class='episode'>
                            ${index + 1}
                        </div>`;
            // console.log(episode);
        });
    }
    let episodes = '';
    info.episodes.map((episode, index) => {
        episodes += `<div id='${episode.id}' class='episode'>
                        ${index + 1}
                    </div>`;
        // console.log(episode);
    });
    const data = `  <div id='${info.id}'>
                        <img id='poster' src='${info.image}' alt='poster_image' width='225' height='311' draggable='false' />${info.title} ${info.subOrDub} ${hasDub} ${info.status} ${info.description} ${episodes} ${dubEpisodes}
                    </div>`;
    $('.container').html(data);

    $('.container').on('click', '.episode', function () {
        const episodeId = $(this).attr('id');
        // getAnimeId(animeId);
        window.location = `watch?id=${episodeId}`;
    });
});
