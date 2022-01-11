import { PREFIX } from "./variables.js";

import play from '../functions/play';
import skip from '../functions/skip';
import stop from '../functions/stop';
import queue from '../functions/queue';

const COMMANDS = {
    [`${PREFIX}play`]: (message) => play(message),
    [`${PREFIX}skip`]: (message) => skip(message),
    [`${PREFIX}stop`]: (message) => stop(message),
    [`${PREFIX}queue`]: (message) => queue(message),
}

export default COMMANDS;