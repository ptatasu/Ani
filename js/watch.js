import { getAnimeId, getAnimeEpisodeLink } from './utils.js';

$(document).ready(async () => {
    const episodeId = await getAnimeId();
    const episodeLink = await getAnimeEpisodeLink(episodeId);
    let streamLink = episodeLink.embedURL;
    console.log(streamLink);
    const data = `<iframe src="${streamLink}" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>`;
    $('.container').html(data);
});
