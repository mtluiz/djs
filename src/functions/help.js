import { helpCommands } from '../config/messages.js';

export default function help(message) {
    console.log('teste')
    message.channel.send({embeds : [helpCommands.help()]})
}