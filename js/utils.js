/**
 *
 * same as `return(await fetch('API_URL')).json()`
 *
 * @returns top airing anime list
 */
export const getAnime = async (page) => {
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/top-airing?page=${page}`);
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
/**
 *
 * @returns the query named s in the URL
 */
export const getAnimeStatus = async () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const animeId = urlParams.get('s');
    return animeId;
};
/**
 *
 * @returns the query named n in the URL
 */
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
/**
 *
 * @param {string} animeId
 * @returns anime info from 9anime
 */
export const getAnimeInfos = async (animeId) => {
    const info = await getInfo(animeId);
    const animeTitle = info.title;
    const res = await fetch(`https://api.consumet.org/anime/9anime/${animeTitle}`);
    const data = await res.json();
    const anime = data.results[0].id;
    const episodeRes = await fetch(`https://api.consumet.org/anime/9anime/info/${anime}`);
    return episodeRes.json();
};
/**
 *
 * @param {string} animeId
 * @returns anime info from 9 anime used in info.js
 */
export const getAnimeInfo = async (animeId) => {
    const episodeRes = await fetch(`https://api.consumet.org/anime/9anime/info/${animeId}`);
    return episodeRes.json();
};
export const getAnimeList = async (page) => {
    const anime = await getAnime(page);
    const res = anime.results;
    return res;
};
/**
 *
 * @param {string} animeId
 * @returns recently uploaded episode
 */
export const getRecentEpisodes = async () => {
    const episodeRes = await fetch(`https://api.consumet.org/anime/gogoanime/recent-episodes`);
    const res = await episodeRes.json();
    const recent = res.results;
    return recent;
};
export const getRecentInfos = async (animeTitle) => {
    const res = await fetch(`https://api.consumet.org/anime/9anime/${animeTitle}`);
    const data = await res.json();
    const anime = data.results[0].id;
    const episodeRes = await fetch(`https://api.consumet.org/anime/9anime/info/${anime}`);
    return episodeRes.json();
};
