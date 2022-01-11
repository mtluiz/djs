import dotenv from 'dotenv';
dotenv.config()

const DISCORD_TOKEN = process.env.TOKEN;
const PREFIX = process.env.COMMAND_PREFIX;
const QUEUES_LIST = new Map();

export { DISCORD_TOKEN, PREFIX, QUEUES_LIST }


