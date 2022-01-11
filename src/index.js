import Discord from 'discord.js';
import { DISCORD_TOKEN, PREFIX, QUEUES_LIST } from './config/variables.js';
import COMMANDS from './config/commands.js';

//Connecting to Discord Network
//Come to life my kin
const CLIENT = new Discord.Client();
CLIENT.login(DISCORD_TOKEN);

// Bot message intersecting
CLIENT.on("message", async message => {

    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    let messageCommand = message.content.split(' ')[0];
    return COMMANDS[messageCommand](message)
})

CLIENT.once("ready", () => console.log("djs is running and ready to play some music!"));

CLIENT.once("reconnecting", () => {
    console.log("djs is reconnecting!");
});

CLIENT.once("disconnect", () => {
    console.log("djs is disconnect!");
});

