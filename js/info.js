import { getAnimeId, getAnimeInfo } from './utils.js';

$(document).ready(async () => {
    const animeId = await getAnimeId();
    const animeInfo = await getAnimeInfo(animeId);
    // console.log(animeInfo);
    let episodes = '';
    animeInfo.episodes.map((episode) => {
        episodes += `<div id='${episode.id}' class='episode sub'>
        ${episode.number}
        </div>`;
    });
    animeInfo.episodes.map((episode) => {
        if (!episode.dubId) {
            // console.log(episode);
        } else {
            episodes += `<div id='${episode.dubId}' class='episode dub'>
                            ${episode.number}
                        </div>`;
        }
    });
    const data = `<div id='details'>
                    <img id='poster' src='${animeInfo.image}' alt='poster_image' width='225' height='311' draggable='false' />
                    ${animeInfo.title} ${animeInfo.status} ${animeInfo.description} ${episodes}
                </div>`;
    $('.container').html(data);
    // if (animeInfo.hasDub == true) {
    //     $(`#${animeInfo.id}`).addClass('dub');
    // }
    // if (animeInfo.hasSub == true) {
    //     $(`#${animeInfo.id}`).addClass('sub');
    // }

    $('.container').on('click', '.episode', function () {
        const episodeId = $(this).attr('id');
        window.location = `watch?id=${episodeId}`;
    });
});
