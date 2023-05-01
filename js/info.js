import { getAnimeId, getInfo, getDubStatus, getDubInfo, search } from './utils.js';

$(document).ready(async () => {
    let chars = { ',': ', ', '"': '', '[': '', ']': '' };
    const id = await getAnimeId();
    const animeId = await getAnimeId();
    const info = await getInfo(animeId);
    const dubStatus = await getDubStatus(animeId);
    let dubEpisodes = '';
    let banner = '';
    let subBanner = '';
    console.log(info);
    const genres = JSON.stringify(info.genres);
    const genre = genres.replaceAll(/[,"[\]]/g, (i) => chars[i]);
    let random = Math.floor(Math.random() * 6);
    /**
     * checks if theres a dub version of the anime
     */
    if (dubStatus == 200) {
        // console.log(dubStatus);
        banner += `<div class='dub-banner'>DUB EPISODES</div>`;
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
    if (info.subOrDub == 'sub') {
        subBanner += `<div class='sub-banner'>SUB EPISODES</div>`;
        info.episodes.map((episode, index) => {
            if (index < 80) {
                episodes += `<div id='${episode.id}' class='episode'>${index + 1}</div>`;
            }
            // console.log(episode);
        });
    } else {
        subBanner += `<div class='sub-banner'>DUB EPISODES</div>`;
        info.episodes.map((episode, index) => {
            if (index < 80) {
                episodes += `<div id='${episode.id}' class='episode'>${index + 1}</div>`;
            }
            // console.log(episode);
        });
    }
    const data = `<div class="cover" style="background-image: url(../src/covers/cover_default${random}.jpg)"></div>
                <div class='details'>
                    <img class='poster' src='${info.image}' alt='poster_image' width='225' height='311' draggable='false' />
                    <div class="title" style="font-family: 'Sansita', sans-serif;">${info.title}</div>
                    <div class="description" style="font-family: 'Roboto', sans-serif;">${info.description}</div>
                    <div class="episodes">
                        ${subBanner}
                        <div class="sub-episodes">${episodes}</div>
                        ${banner}
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
            $('.dropdown').css('display', 'block');
        } else {
            $(this).attr('src', '../src/expand.svg');
            $(this).attr('id', 'off');
            $('.dropdown').css('display', 'none');
        }
    });
    $('.container').on('click', '.episode', function () {
        const episodeId = $(this).attr('id');
        const episodeNum = episodeId.slice(episodeId.length - 9);
        const episodeNumber = episodeNum.replaceAll(/[^0-9.]/g, '');
        window.location = `watch?id=${id}&e=${episodeId}&n=${episodeNumber}`;
    });
    $('.search').on('keyup', async () => {
        const loader = ` <div class="loader"><img src="../src/loader.gif" alt="loader" srcset=""></div>`;
        const query = $('.search').val();
        let searchItem = '';
        if (query !== '') {
            $('.search-items').css('display', 'block');
            const res = await search(query);
            const result = res.results;
            result.map((item) => {
                const style = `background-image: url(${item.image})`;
                searchItem += `<div id="${item.id}" class="search-item">
                                <div class="search-poster" style='${style}'></div>
                                <div class="search-title">${item.title}</div>
                                </div>`;
                setTimeout(() => {
                    $('.search-items').html(searchItem);
                }, 1000);
                $('.search-items').html(loader);
            });
            // console.log(searchItem);
        } else {
            $('.search-items').css('display', 'none');
        }
    });
    $('.search-items').on('click', '.search-item', function () {
        const animeId = $(this).attr('id');
        window.location = `info?id=${animeId}`;
    });
});
