import youtubeSearch from '../utils/youtubeSearch.js';
import { errorCards } from '../config/messages.js';
import { createQueue, streamSongFromQueue, addSongToQueue} from '../config/queues.js';

export default async function play(message) {
    const content = message.content.split(' ').slice(1).join(' ')
    const voiceChannel = message.member.voice.channel;
    const permissions = voiceChannel.permissionsFor(message.client.user);

    if (message.content.split(' ').length <= 1) {
        return message.channel.send({ embeds: [errorCards.typo()] });
    }

    if (!voiceChannel) {
        return message.channel.send({ embeds: [errorCards.noChannel()] });
    }


    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send({ embeds: [errorCards.permission()] });
    }

    const searchResult = await youtubeSearch(content);
    const author = {
        name: message.author.username,
        icon: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
    }

    
        createQueue(message.guild.id, message.channel, message.member.voice.channel)
        addSongToQueue(message.guild.id, searchResult, author, message.channel)
        streamSongFromQueue(message.guild.id, message.member.voice.channel, message)
    
}