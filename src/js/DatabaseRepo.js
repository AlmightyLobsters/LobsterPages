import { getOrCreateCollection, getOrCreateDatabase } from './DocDBUtils';
import { DocumentClient } from 'documentdb';

export default class DatabaseRepo {
    constructor(client, dbId, colId) {
        if(client instanceof DocumentClient)
            this.client = client;
        this.dbId = dbId;
        this.colId = colId;
        this.db = null;
        this.col = null;
        this.initialized = false;
    }

    init(cb) {
        getOrCreateDatabase(this.client, this.dbId, (err, db) => {
            if (err) cb(err);
            else {
                this.db = db;
                getOrCreateCollection(this.client, this.db._self, this.colId, (err, col) => {
                    if (err) cb(err);
                    else {
                        this.col = col;
                        this.initialized = true;
                    }
                });
            }
        });
    }

    find(query, cb) {
        this.client.queryDocuments(this.col._self, query).toArray((err, results) => {
            if (err) cb(err);
            else cb(null, results);
        });
    }

    getAll(cb) {
        this.client.queryDocuments(this.col._self, 'SELECT * FROM root').toArray((err, results) => {
            if (err) cb(err);
            else cb(null, results || []);
        });
    }

    getCount(cb) {
        this.client.queryDocuments(this.col._self, 'SELECT 1 FROM root').toArray((err, results) => {
            if (err) cb(err);
            else cb(null, results.length || 0);
        });
    }

    get(id, cb) {
        const query = {
            query: 'SELECT * FROM root r WHERE r.id= @id',
            parameters: [{
                name: '@id',
                value: id
            }]
        };
        this.client.queryDocuments(this.col._self, query).toArray((err, results) => {
            if (err) cb(err);
            else cb(null, results[0]);
        });
    }

    add(item, cb) {
        if (!item.createdAt) item.createdAt = new Date();
        this.client.createDocument(this.col._self, item, (err, doc) => {
            if (err) cb(err);
            else cb(null, doc);
        });
    }

    update(id, item, cb) {
        this.get(id, (err, doc) => {
            if (err) cb(err);
            else if (!doc) cb({message: 'Document not found'});
            else {
                for (let prop in item)
                    if (item.hasOwnProperty(prop))
                        doc[prop] = item[prop];
                this.client.replaceDocument(doc._self, doc, (err, replaced) => {
                    if (err) cb(err);
                    else cb(null, replaced);
                });
            }
        });
    }

    remove(id, cb) {
        this.get(id, (err, doc) => {
            if (err) cb(err);
            else if (!doc) cb({message: 'Document not found'});
            else
                this.client.deleteDocument(doc._self, (err, removed) => {
                    if (err) cb(err);
                    else cb(null, doc);
                });
        });
    }
}
