import Discord, { Client, Intents } from 'discord.js';
import { DISCORD_TOKEN, PREFIX } from './config/variables.js';
import COMMANDS from './config/commands.js';
import {errorCards} from './config/messages.js'

export const CLIENT = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, 'GUILD_VOICE_STATES'] });

CLIENT.login(DISCORD_TOKEN);

CLIENT.on("message", async message => {

    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    let messageCommand = message.content.split(' ')[0];

   if (Object.keys(COMMANDS).includes(messageCommand)) {
        return COMMANDS[messageCommand](message)
    } else {
        return message.channel.send({ embeds: [ errorCards.typo() ] })
    }
})

CLIENT.once("ready", () => console.log("djs is running and ready to play some music!"));

CLIENT.once("reconnecting", () => {
    console.log("djs is reconnecting!");
});

CLIENT.once("disconnect", () => {
    console.log("djs is disconnected!");
});

