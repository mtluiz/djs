import { PREFIX } from "./variables.js";

import play from '../functions/play.js';
import skip from '../functions/skip.js';
import stop from '../functions/stop.js';
import queue from '../functions/queue.js';
import help from "../functions/help.js";

const COMMANDS = {
    [`${PREFIX}play`]: (message) => play(message),
    [`${PREFIX}skip`]: (message) => skip(message),
    [`${PREFIX}stop`]: (message) => stop(message),
    [`${PREFIX}queue`]: (message) => queue(message),
    [`${PREFIX}help`]: (message) => help(message),
}

export default COMMANDS;