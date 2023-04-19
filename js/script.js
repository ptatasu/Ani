/**
 *
 * same as `return(await fetch('API_URL')).json()`
 *
 * @returns anime list from the api
 */
const getAnime = async () => {
    const res = await fetch('https://api.consumet.org/anime/gogoanime/top-airing');
    const data = await res.json();
    return data;
};

const getInfo = async (animeId) => {
    return (await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}`)).json();
};

$(document).ready(async () => {
    // const list = anime.results;
    // console.log(anime);
    // let data = '';

    const anime = await getAnime();
    const list = anime.results;
    console.log(list);
    let data = '';
    list.forEach(async (anime) => {
        const info = await getInfo(anime.id);
        console.log(info);
        data += `<div className="poster"><img src="${anime.image}" alt="" srcset="" /></div>`;
    });
    // $('.container').html(data);
    // console.log(data);
});
