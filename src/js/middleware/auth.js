import { BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, INTERNAL_SERVER_ERROR, SERVICE_UNAVAILABLE, CONFLICT } from 'http-status-codes';
import DatabaseRepo from '../DatabaseRepo';
import { dbClient } from "../DocDBUtils";
import { getConfig } from '../../config';

const DB_NAME = getConfig('DB_NAME');

const userDB = new DatabaseRepo(dbClient, DB_NAME, 'Users');
userDB.init(err => {
    // eslint-disable-next-line no-console
    console.log('Error initializing user database: ', err);
});

export function authenticate (userGroup) {
    return (req, res, next) => {
        if(userGroup !== null) {
            if (!req.body) req.body = {};
            req.body.userGroup = userGroup;
        }
        if (!req.body.userGroup) res.status(BAD_REQUEST).send('User group not specified');
        else if (req.cookies.authHash) res.status(CONFLICT).send('Coookie not secured');
        else if (!req.signedCookies.authHash) res.status(UNAUTHORIZED).send('Not logged in');
        else if (!userDB.initialized) res.status(SERVICE_UNAVAILABLE).send('User database not initialized');
        else userDB.get(req.body.userGroup, (err, result) => {
            if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
            else if (!result) res.status(NOT_FOUND).send('User group record not found');
            else if (result.hashes.includes(req.signedCookies.authHash)) next();
            else res.status(FORBIDDEN).send('Access denied');
        });
    };
}
