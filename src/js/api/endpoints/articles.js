/* eslint-disable no-console */
import { Router } from 'express';
import bodyParser from 'body-parser';
import { OK, INTERNAL_SERVER_ERROR, NOT_FOUND, UNPROCESSABLE_ENTITY, CREATED, SERVICE_UNAVAILABLE } from 'http-status-codes';
import { authenticate } from '../../middleware/auth';
import { dbClient } from '../../DocDBUtils';
import DatabaseRepo from '../../DatabaseRepo';
import { getConfig } from '../../../config';

const DB_NAME = getConfig("DB_NAME");

const articlesDB = new DatabaseRepo(dbClient, DB_NAME, 'Articles');
articlesDB.init(err => {
    console.error('Error initializing article database: ', err);
});

const router = Router();

router.get('/articles(/:id)?', (req, res) => {
    if (!articlesDB.initialized) {
        res.status(SERVICE_UNAVAILABLE).send('Article database not initialized');
        return;
    }
    if(req.params.id) articlesDB.get(req.params.id, (err, result) => {
        if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
        else if (!result) res.sendStatus(NOT_FOUND);
        else res.status(OK).send(result);
    });
    else articlesDB.getAll((err, results) => {
        if(err) res.status(INTERNAL_SERVER_ERROR).send(err);
        else if(!results) res.sendStatus(NOT_FOUND);
        else res.status(OK).send(results.sort((a, b) => b._ts - a._ts));
    });
});

router.post('/articles', bodyParser.json(), authenticate('ADMIN'), (req, res) => {
    let unparsed = req.body;
    if (!unparsed || !unparsed.title || !unparsed.text)
        res.status(UNPROCESSABLE_ENTITY).send('New article must specify at least a title and text components');
    else if (!articlesDB.initialized) {
        res.status(SERVICE_UNAVAILABLE).send('Article database not inititalized');
        return;
    }
    else articlesDB.getAll((err, all) => {
        if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
        else {
            const newArt = {
                id: JSON.stringify(parseInt(all.slice(-1)[0].id) + 1),
                title: unparsed.title,
                text: unparsed.text,
                reversed: !!unparsed.reversed
            };
            if (unparsed.imgPath) {
                newArt.imgPath = unparsed.imgPath;
                newArt.imgFormat = unparsed.imgFormat || 'medium';
            }
            articlesDB.add(newArt, (err, doc) => {
                if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
                else res.status(CREATED).location(`${req.protocol}://${req.get('host')}/articles/${doc.id}`).send(doc);
            });
        }
    });
});

router.put('/articles/:id', authenticate('ADMIN'), (req, res) => {
    if (!articlesDB.initialized) {
        res.status(INTERNAL_SERVER_ERROR).send('Article database not initialized');
        return;
    }
    articlesDB.update(req.params.id, req.body, (err, doc) => {
        if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
        else res.status(OK).send(doc);
    });
});

router.delete('/articles/:id', authenticate('ADMIN'), (req, res) => {
    if(!articlesDB.initialized) {
        res.status(INTERNAL_SERVER_ERROR).send('Article database not initialized');
        return;
    }
    articlesDB.remove(req.params.id, (err, doc) => {
        if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
        else res.status(OK).send(doc);
    });
});

export default router;
