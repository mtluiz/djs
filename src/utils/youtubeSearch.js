import yt from 'yt-search';

export default async function youtubeSearch(search) {
    if (search.includes('http')) return search;
    const response = await yt(string)
    return response.all[0].url
}