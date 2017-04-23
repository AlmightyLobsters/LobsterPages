import { DocumentClient, DocumentBase } from 'documentdb';

import { getConfig } from '../config';

const { DB_HOST, DB_MASTER_KEY, IS_DEV } = getConfig(["DB_HOST", "DB_MASTER_KEY", "IS_DEV"]);

const connectionPolicy = new DocumentBase.ConnectionPolicy();
connectionPolicy.DisableSSLVerification = IS_DEV;

export const dbClient = new DocumentClient(DB_HOST, { masterKey: DB_MASTER_KEY }, connectionPolicy);

export const getOrCreateDatabase = (client, id, cb) => {
    var query = {
        query: 'SELECT * FROM root r WHERE r.id= @id',
        parameters: [{
            name: '@id',
            value: id
        }]
    };
    if (client instanceof DocumentClient)
        client.queryDatabases(query).toArray((err, results) => {
            if (err) cb(err);
            else if (results.length === 0) {
                let dbSpec = { id };
                client.createDatabase(dbSpec, (err, created) => {
                    cb(null, created);
                });
            }
            else cb(null, results[0]);
        });
};

export const getOrCreateCollection = (client, dbLink, id, cb) => {
    var query = {
        query: 'SELECT * FROM root r WHERE r.id= @id',
        parameters: [{
            name: '@id',
            value: id
        }]
    };
    if (client instanceof DocumentClient)
        client.queryCollections(dbLink, query).toArray((err, results) => {
            if (err) cb(err);
            else if (results.length === 0) {
                let colSpec = { id };
                client.createCollection(dbLink, colSpec, (err, created) => {
                    cb(null, created);
                });
            }
            else cb(null, results[0]);
        });
};
