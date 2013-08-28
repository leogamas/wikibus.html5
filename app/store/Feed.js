/*
 * File: app/store/Feed.js
 */

Ext.define('Ubibus.store.Feed', {
    extend: 'Ext.data.Store',
    alias: 'store.feed',

    requires: [
        'Ubibus.model.Feed'
    ],

    config: {
        autoSync: false,
        model: 'Ubibus.model.Feed',
        storeId: 'feed',
        proxy: {
            type: 'ajax',
            api: {
                read: 'php/feed/list.php',
            },
            reader: {
                type: 'json',
                rootProperty: 'feed'
            }
        }
    }
});