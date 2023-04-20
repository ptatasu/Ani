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
 * @returns info of an anime with the provided animeId
 */
export const getInfo = async (animeId) => {
    return (await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}`)).json();
};
