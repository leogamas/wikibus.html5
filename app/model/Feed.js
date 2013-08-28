/*
 * File: app/model/Feed.js
 */

Ext.define('Ubibus.model.Feed', {
    extend: 'Ext.data.Model',
    alias: 'model.feed',

    config: {
        fields: [
            {
                name: 'id_empresa',
                type: 'int'
            },
            {
                name: 'nome',
                type: 'string'
            }
        ]
    }
});