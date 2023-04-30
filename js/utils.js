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
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}`);
    const data = await res.json();
    return data;
};

/**
 *
 * @param {string} animeId
 * @returns dub info of the anime
 */
export const getDubInfo = async (animeId) => {
    return (await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}-dub`)).json();
};

/**
 *
 * @param {string} animeId
 * checks the status code of the fetch request
 * @returns 404 or 200
 *
 *
 */
export const getDubStatus = async (animeId) => {
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}-dub`);
    const data = await res.status;
    return data;
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
 * @returns the query named e in the URL
 */
export const getEpisodeId = async () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const episodeId = urlParams.get('e');
    return episodeId;
};

/**
 *
 * @returns the query named e in the URL
 */
export const getEpisodeNumber = async () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const episodeNumber = urlParams.get('n');
    return episodeNumber;
};

/**
 *
 * @param {string} animeId
 * @returns video streaming link of the anime
 */
export const getAnimeEpisodeLink = async (animeId) => {
    return (await fetch(`https://api.consumet.org/anime/gogoanime/servers/${animeId}`)).json();
};

/**
 *
 * @returns recent episodes
 */
export const getRecent = async () => {
    return (await fetch(`https://api.consumet.org/anime/gogoanime/recent-episodes`)).json();
};
/**
 *
 * @returns search results base on the query
 */
export const search = async (q) => {
    return (await fetch(`https://api.consumet.org/anime/gogoanime/${q}`)).json();
};

export const random = (title) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    setInterval(() => {
        title
            .text()
            .split('')
            .map((letter) => letters[Math.floor(Math.random() * 26)])
            .join('');
    }, 30);
    // title.text(letters[Math.floor(Math.random() * 26)]);
};
