/* eslint-disable no-console, max-len */
import { join } from 'path';
let config = {};

try {
    config = require('../private/config');
}
catch (e) { console.log("Local config not found"); }
finally {
    config.IS_DEV = process.env.NODE_ENV !== 'production';
    config.DB_NAME = config.IS_DEV ? 'LobsterPagesDev' : 'LobsterPages';
    config.PUBLIC_PATH = join(__dirname, '../public');
}

function getValue(key) {
    if (config[key]) return config[key];
    if (process.env[key]) return process.env[key];
    console.error(`Specify ${key} in the ${process.env.NODE_ENV === 'production' ? "environment variables" : "local config"}`);
    return null;
}

export function getConfig(toObtain) {
    if (typeof(toObtain) === 'string') return getValue(toObtain);
    if (!Array.isArray(toObtain)) return undefined;
    let values = {};
    for (const key of toObtain)
        values[key] = getValue(key);
    return values;
}
