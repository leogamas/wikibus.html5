/*
 * File: app/store/Ocorrencia.js
 */

Ext.define('Ubibus.store.Ocorrencia', {
    extend: 'Ext.data.Store',
    alias: 'store.ocorrencia',

    requires: [
        'Ubibus.model.Ocorrencia'
    ],

    config: {
        autoLoad: true,
        autoSync: false,
        model: 'Ubibus.model.Ocorrencia',
        storeId: 'ocorrencia',
        proxy: {
            type: 'ajax',
            api: {
                read: 'php/ocorrencia/get.php?id_usuario=0',
            },
            reader: {
                type: 'json',
                rootProperty: 'ocorrencias'
            }
        }
    }
});