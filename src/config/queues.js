import ytdl from "ytdl-core";
import { playCards } from "./messages.js";
import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } from "@discordjs/voice";

const QUEUES_LIST = new Map();

export function createQueue(serverId, textChannel, voiceChannel) {

    if (!QUEUES_LIST.get(serverId)) {
        const startQueue = {
            textChannel: textChannel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: false
        }
        QUEUES_LIST.set(serverId, startQueue)
        console.log('djs server queue created succefully!')
    }

}

export function addSongToQueue(serverId, song, author, textChannel) {
    QUEUES_LIST.get(serverId).songs.push(song);
    console.log( QUEUES_LIST.get(serverId).songs)
    return textChannel.send({ embeds: [playCards.success(song.title, author, song.duration, song.thumbnail, song.url)] });
}



export async function streamSongFromQueue(serverId, message) {
    const serverQueue = QUEUES_LIST.get(serverId);

    const connection = joinVoiceChannel({
        channelId: serverQueue.voiceChannel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
    })

    const player = createAudioPlayer()

    const resource = createAudioResource(await ytdl(serverQueue.songs[0].url));

    player.play(resource);

    connection.subscribe(player);

    player.on(AudioPlayerStatus.Playing, () => {
        if (!serverQueue.songs[0]) serverQueue.textChannel.send({ embeds: [playCards.playing(serverQueue.songs[0].title ? serverQueue.songs[0].title : '', serverQueue.songs[0].duration, serverQueue.songs[0].url)] })
        serverQueue.playing = true
    })

    player.on(AudioPlayerStatus.Idle, () => {
        if(!serverQueue.songs[0]){
            serverQueue.playing = false
        } else {
            serverQueue.songs.shift();
            streamSongFromQueue(serverId, message)
        }
        
    });

    player.on('error', err => {
        console.log(err.message)
    })

    return player
}