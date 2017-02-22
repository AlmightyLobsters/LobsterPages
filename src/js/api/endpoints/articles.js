/* eslint-disable no-console */
import { Router } from 'express';
import bodyParser from 'body-parser';
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
    if(req.params.id) articlesDB.get(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        else if (!result) res.sendStatus(404);
        else res.status(200).send(result);
    });
    else articlesDB.getAll((err, results) => {
        if(err) res.status(500).send(err);
        else if(!results) res.sendStatus(500);
        else res.status(200).send(results.sort((a, b) => b._ts - a._ts));
    });
});

router.post('/articles', bodyParser.json(), authenticate('ADMIN'), (req, res) => {
    let unparsed = req.body;
    if (!unparsed || !unparsed.title || !unparsed.text)
        res.status(422).send('New article must specify at least a title and text components');
    else if (!articlesDB.initialized) res.status(500).send('Article database not connected');
    else articlesDB.getAll((err, all) => {
        if (err) res.status(500).send(err);
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
                if (err) res.status(500).send(err);
                else res.status(201).location(`${req.protocol}://${req.get('host')}/articles/${doc.id}`).send(doc);
            });
        }
    });
});

router.put('/articles/:id', authenticate('ADMIN'), (req, res) => {
    if (!articlesDB.initialized) res.status(500).send('Article database not connected');
    else articlesDB.update(req.params.id, req.body, (err, doc) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(doc);
    });
});

router.delete('/articles/:id', authenticate('ADMIN'), (req, res) => {
    if(!articlesDB.initialized) res.status(500).send('Article database not connected');
    else articlesDB.remove(req.params.id, (err, doc) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(doc);
    });
});

export default router;
