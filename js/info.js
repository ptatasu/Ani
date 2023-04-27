import { getAnimeId, getInfo, getDubStatus, getDubInfo } from './utils.js';

$(document).ready(async () => {
    let chars = { ',': ', ', '"': '', '[': '', ']': '' };
    const animeId = await getAnimeId();
    const info = await getInfo(animeId);
    const dubStatus = await getDubStatus(animeId);
    let dubEpisodes = '';
    // console.log(info);
    const genres = JSON.stringify(info.genres);
    const genre = genres.replaceAll(/[,"[\]]/g, (i) => chars[i]);
    let random = Math.floor(Math.random() * 6);
    /**
     * checks if theres a dub version of the anime
     */
    if (dubStatus == 200) {
        // console.log(dubStatus);
        dubEpisodes += `<div class='dub-banner'>DUB EPISODES</div>;`;
        const dubInfo = await getDubInfo(animeId);
        // console.log(dubInfo);
        dubInfo.episodes.map((episode, index) => {
            if (index < 80) {
                dubEpisodes += `<div id='${episode.id}' class='episode'>
                            ${index + 1}
                        </div>`;
            }
            // console.log(episode);
        });
    }
    let episodes = '';
    info.episodes.map((episode, index) => {
        if (index < 80) {
            episodes += `<div id='${episode.id}' class='episode'>
            ${index + 1}
            </div>`;
        }
        // console.log(episode);
    });
    const data = `<div class="cover" style="background-image: url(../src/covers/cover_default${random}.jpg)"></div>
                <div class='details'>
                    <img class='poster' src='${info.image}' alt='poster_image' width='225' height='311' draggable='false' />
                    <div class="title" style="font-family: 'Sansita', sans-serif;">${info.title}</div>
                    <div class="description" style="font-family: 'Roboto', sans-serif;">${info.description}</div>
                    <div class="episodes">
                        <div class="sub-banner">SUB EPISODES</div>
                        <div class="sub-episodes">${episodes}</div>
                        <div class="dub-episodes">${dubEpisodes}</div>
                    </div>
                    <div class="side">
                        <div class="synonyms"><span>Synonyms:</span> ${info.otherName}</div>
                        <div class="total"><span>Genres:</span> ${genre}</div>
                        <div class="total"><span>Episodes:</span> ${info.totalEpisodes}</div>
                        <div class="season"><span>Year:</span> ${info.releaseDate}</div>
                        <div class="type"><span>Type:</span> ${info.type}</div>
                        <div class="status"><span>Status:</span> ${info.status}</div>
                    </div>
                </div>`;
    // console.log(data);
    $('.container').html(data);
    $('.navbar').on('click', '.chev', function () {
        if ($(this).attr('id') === 'off') {
            $(this).attr('src', '../src/expand_less.svg');
            $(this).attr('id', 'on');
        } else {
            $(this).attr('src', '../src/expand.svg');
            $(this).attr('id', 'off');
        }
        console.log($(this).attr('id'));
    });
    $('.container').on('click', '.episode', function () {
        const id = $(this).attr('id');
        const episodeId = id.slice(animeId.length);
        window.location = `watch?id=${animeId}&e=${episodeId}`;
    });
});
