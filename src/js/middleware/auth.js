import DatabaseRepo from '../DatabaseRepo';
import { dbClient } from "../DocDBUtils";
import { getConfig } from '../../config';

const DB_NAME = getConfig('DB_NAME');

const userDB = new DatabaseRepo(dbClient, DB_NAME, 'Users');
userDB.init(err => {
    console.log('Error initializing user database: ', err);
});

export function authenticate (userGroup) {
    return (req, res, next) => {
        if(userGroup !== null) {
            if (!req.body) req.body = {};
            req.body.userGroup = userGroup;
        }
        if (!req.body.userGroup) res.status(400).send('User group not specified');
        else if (req.cookies.authHash) res.status(409).send('Coookie not secured');
        else if (!req.signedCookies.authHash) res.status(401).send('Not logged in');
        else if (!userDB.initialized) res.status(500).send('User database not initialized');
        else userDB.get(req.body.userGroup, (err, result) => {
            if (err) res.status(500).send(err);
            else if (!result) res.status(404).send('User group record not found');
            else if (result.hashes.includes(req.signedCookies.authHash)) next();
            else res.status(403).send('Access denied');
        });
    };
}
