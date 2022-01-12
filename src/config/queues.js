import ytdl from "ytdl-core";
import { playCards } from "./messages.js";
import { CLIENT } from '../index.js'
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
            playing: true
        }
        QUEUES_LIST.set(serverId, startQueue)
        console.log('djs server queue created succefully!')
    }

}



export function addSongToQueue(serverId, song, author, textChannel) {
    QUEUES_LIST.get(serverId).songs.push(song);
    return textChannel.send({ embeds: [playCards.success(song.title, author, song.duration, song.thumbnail, song.url)] });
}



export async function streamSongFromQueue(serverId, voiceChannel, message) {
    const serverQueue = QUEUES_LIST.get(serverId);

    const connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
    })

    const player = createAudioPlayer()

    const songFormat = serverQueue.songs[0].formats.filter(fs => fs.audioQuality === 'AUDIO_QUALITY_LOW' || fs.averageBitrate > 10000)[0]

    const resource = createAudioResource(ytdl(serverQueue.songs[0].url, { format: songFormat }))

    player.play(resource);

    connection.subscribe(player)

    player.on(AudioPlayerStatus.Playing, ()=> {
        console.log('vai tocar agora')
        serverQueue.songs.shift()
    })

    console.log(AudioPlayerStatus)

    player.on('error', error => {
        console.error(`Error: ${error.message} with resource`);
    });
}