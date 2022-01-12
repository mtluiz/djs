import yt from 'yt-search';
import ytdl from 'ytdl-core';

export default async function youtubeSearch(search) {
    let url;
    if (search.includes('https://youtube')) url = search;
    url = (await yt(search)).all[0].url;
    const songInfo = await ytdl.getInfo(await url);

    return {
        title: songInfo.videoDetails.title,
        duration: Math.floor(songInfo.videoDetails.lengthSeconds / 60) + ' min',
        thumbnail: songInfo.videoDetails.thumbnails[0].url,
        url: songInfo.videoDetails.video_url,
        formats: ytdl.filterFormats(songInfo.formats, 'audioonly')
    }
}