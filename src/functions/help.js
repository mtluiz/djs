import { helpCommands } from '../config/messages.js';

export default function help(message) {
    return message.channel.send({embeds : [helpCommands.help()]});
}