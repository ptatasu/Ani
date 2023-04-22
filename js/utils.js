/**
 *
 * same as `return(await fetch('API_URL')).json()`
 *
 * @returns top airing anime list
 */
export const getAnime = async () => {
    const res = await fetch('https://api.consumet.org/anime/gogoanime/top-airing');
    const data = await res.json();
    return data;
};

/**
 *
 * @param {string} animeId
 * @returns info of the anime
 */
export const getInfo = async (animeId) => {
    return (await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}`)).json();
};

/**
 *
 * @returns the query named id in the URL
 */
export const getAnimeId = async () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const animeId = urlParams.get('id');
    return animeId;
};

export const getAnimeStatus = async () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const animeId = urlParams.get('s');
    return animeId;
};
export const getAnimeNames = async () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const animeId = urlParams.get('n');
    return animeId;
};
/**
 *
 * @param {string} animeId
 * @returns video streaming link of the anime
 */
export const getAnimeEpisodeLink = async (animeId) => {
    return (await fetch(`https://api.consumet.org/anime/9anime/watch/${animeId}?server=streamtape`)).json();
};

export const getAnimeInfos = async (animeId) => {
    const info = await getInfo(animeId);
    const animeTitle = info.title;
    const res = await fetch(`https://api.consumet.org/anime/9anime/${animeTitle}`);
    const data = await res.json();
    const anime = data.results[0].id;
    const episodeRes = await fetch(`https://api.consumet.org/anime/9anime/info/${anime}`);
    return episodeRes.json();
};

export const getAnimeInfo = async (animeId) => {
    // const info = await getInfo(animeId);
    // const animeTitle = info.title;
    // const res = await fetch(`https://api.consumet.org/anime/9anime/${animeTitle}`);
    // const data = await res.json();
    // const anime = data.results[0].id;
    const episodeRes = await fetch(`https://api.consumet.org/anime/9anime/info/${animeId}`);
    return episodeRes.json();
};
export const getAnimeList = async () => {
    const anime = await getAnime();
    const res = anime.results;
    return res;
};
