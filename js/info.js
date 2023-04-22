import { getAnimeId, getAnimeInfo, getAnimeNames, getAnimeStatus } from './utils.js';

$(document).ready(async () => {
    let chars = { ',': ', ', '"': '', '[': '', ']': '' };
    const animeId = await getAnimeId();
    const status = await getAnimeStatus();
    const synonyms = await getAnimeNames();
    const animeInfo = await getAnimeInfo(animeId);
    const studio = JSON.stringify(animeInfo.studios);
    const studios = studio.replaceAll(/[,"[\]]/g, (i) => chars[i]);
    // console.log(animeInfo);
    let episodes = '<div class="sub-episode">';
    animeInfo.episodes.map((episode) => {
        episodes += `<div id='${episode.id}' class='episode sub'>
        ${episode.number} ${episode.title}
        </div>`;
    });
    episodes += '</div>';
    let dubEpisodes = '<div class="dub-episode">';
    animeInfo.episodes.map((episode) => {
        if (!episode.dubId) {
            dubEpisodes += '';
        } else {
            dubEpisodes += `<div id='${episode.dubId}' class='episode dub'>
                                ${episode.number} ${episode.title}
                            </div>`;
        }
    });
    const data = `<div id='details'>
                    <img id='poster' src='${animeInfo.image}' alt='poster_image' width='225' height='311' draggable='false' />
                    <div class="title" style="font-family: 'Sansita', sans-serif;">${animeInfo.title}</div>
                    <div class="description" style="font-family: 'Roboto', sans-serif;">${animeInfo.description}</div>
                    <div class="synonyms">${synonyms}</div>
                    <div class="duration">${animeInfo.duration}</div>
                    <div class="total">${animeInfo.totalEpisodes}</div>
                    <div class="season">${animeInfo.premiered}</div>
                    <div class="studio">${studios}</div>
                    <div class="type">${animeInfo.type}</div>
                    <div class="status">${status}</div>
                    <div class="episodes">${episodes}${dubEpisodes}</div>
                </div>`;
    $('.container').html(data);
    $('.container').on('click', '.episode', function () {
        const episodeId = $(this).attr('id');
        window.location = `watch?id=${episodeId}`;
    });
});
