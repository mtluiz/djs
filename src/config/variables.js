import dotenv from 'dotenv';
dotenv.config()

const DISCORD_TOKEN = process.env.TOKEN;
const PREFIX = process.env.COMMAND_PREFIX;

export { DISCORD_TOKEN, PREFIX}


