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
 * @param {string} animeId
 * @returns video streaming link of the anime
 */
export const getAnimeEpisodeLink = async (animeId) => {
    return (await fetch(`https://api.consumet.org/anime/gogoanime/servers/${animeId}`)).json();
};
