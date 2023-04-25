import { getAnimeId, getAnimeEpisodeLink } from './utils.js';

$(document).ready(async () => {
    let streamLink = '';
    const episodeId = await getAnimeId();
    const episodeLink = await getAnimeEpisodeLink(episodeId);
    console.log(episodeLink);
    episodeLink.every((stream) => {
        if (stream.name === 'Streamsb') {
            streamLink = stream.url;
            return false;
        } else {
            console.log(stream.name);
            return true;
        }
    });
    console.log(streamLink);
    const data = `<iframe src="${streamLink}" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>`;
    $('.container').html(data);
});
