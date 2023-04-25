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
    const data = `<div id='details'>
                    <img id='poster' src='${info.image}' alt='poster_image' width='225' height='311' draggable='false' />
                    <div class="title" style="font-family: 'Sansita', sans-serif;">${info.title}</div>
                    <div class="description" style="font-family: 'Roboto', sans-serif;">${info.description}</div>
                    <div class="synonyms">${info.otherName}</div>
                    <div class="total">${info.totalEpisodes}</div>
                    <div class="season">${info.releaseDate}</div>
                    <div class="type">${info.type}</div>
                    <div class="status">${info.status}</div>
                    <div class="episodes">${episodes}${dubEpisodes}</div>
                </div>`;
    $('.container').html(data);

    $('.container').on('click', '.episode', function () {
        const episodeId = $(this).attr('id');
        // getAnimeId(animeId);
        window.location = `watch?id=${episodeId}`;
    });
});
