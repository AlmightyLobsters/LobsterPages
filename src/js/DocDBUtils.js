import { DocumentClient } from 'documentdb';

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
