import { youtubeSearch } from '../utils/youtubeSearch.js';

export default async function play(message) {
    const content = message.content.split(' ').shift().join(' ');
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
        return message.channel.send('mensagem de o usuario estar em algum canal');
    }

    const permission = voiceChannel.permissionsFor(message.client.user);

    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send('mensagem de nao ter permissao');
    }

    const searchResult = await youtubeSearch(content);

    const songInfo = await ytdl.getInfo(searchResult);

    /// asdasdasd

    if (!QUEUES_LIST) {
        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };

        queue.set(message.guild.id, queueContruct);

        queueContruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueContruct.connection = connection;
            const serverQueue = queue.get(guild.id);
            if (!song) {
                serverQueue.voiceChannel.leave();
                queue.delete(guild.id);
                return;
            }

            const dispatcher = serverQueue.connection
                .play(ytdl(song.url))
                .on("finish", () => {
                    serverQueue.songs.shift();
                    play(guild, serverQueue.songs[0]);
                })
                .on("error", error => console.error(error));
            dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
            serverQueue.textChannel.send(`Tocando agora no Resilia: ${song.title}`);
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }

    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} vai tocar a seguir`);
    }

    /// asdasdasd
}