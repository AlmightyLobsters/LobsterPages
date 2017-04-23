/* eslint-disable no-console */
import { Router } from 'express';
import { json } from 'body-parser';
import { OK, SERVICE_UNAVAILABLE, INTERNAL_SERVER_ERROR, BAD_REQUEST } from 'http-status-codes';
import { getConfig } from '../../../config';
import DatabaseRepo from '../../DatabaseRepo';
import { dbClient } from '../../DocDBUtils';
import Socket from '../../socket';

const router = Router();
const { DB_NAME, DATA_CACHE } = getConfig(['DB_NAME', 'DATA_CACHE']);

const dataDB = new DatabaseRepo(dbClient, DB_NAME, 'Data');
dataDB.init(err => {
    console.error('Error initializing data database', err);
});

router.get('/data/lastFew', (req, res) => {
    if (!dataDB.initialized) {
        res.status(SERVICE_UNAVAILABLE).send('Data database not initialized');
        return;
    }
    dataDB.get('lastFew', (err, result) => {
        if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
        else if (!result) dataDB.add({ id: 'lastFew', data: [] }, (err, result) => {
            if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
            else if (!result) res.sendStatus(INTERNAL_SERVER_ERROR);
            else res.status(OK).send(result.data);
        });
        else res.status(OK).send(result.data);
    });
});

router.post('/data/upload', json(), (req, res) => {
    const data = req.body.data;
    if (!data || typeof data !== 'string') {
        res.sendStatus(BAD_REQUEST);
        return;
    }
    const cb = (err, result) => {
        if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
        else if (!result) res.sendStatus(INTERNAL_SERVER_ERROR);
        else res.status(OK).send(result.data);
    };
    Socket.Instance.of('/listener').emit('newData', data);
    if (!dataDB.initialized) {
        res.status(SERVICE_UNAVAILABLE).send('Data database not initialized');
        return;
    }
    dataDB.get('lastFew', (err, result) => {
        if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
        else if (!result) dataDB.add({ id: 'lastFew', data }, cb);
        else
            if (result.data.length < DATA_CACHE)
                dataDB.update('lastFew', {
                    data: [
                        ...result.data,
                        data
                    ]
                }, cb);
            else
                dataDB.update('lastFew', {
                    data: [
                        ...result.data.slice(1),
                        data
                    ]
                }, cb);
    });
});

export default router;
