/*
 * File: app/view/Feed.js
 */

Ext.define('Ubibus.view.Feed', {
    extend: 'Ext.dataview.List',
    alias: 'widget.feed',

    config: {
        id: 'feed',
        ui: 'round',
        emptyText: 'Não há novidades!',
        store: 'feed',
        grouped: true,
        onItemDisclosure: true,
        indexBar: true,
        itemTpl: [
            '<div>{nome}</div>'
        ],
        listeners: [
            {
                fn: 'onEmpresaActivate',
                event: 'activate'
            },
            {
                fn: 'onEmpresaDeactivate',
                event: 'deactivate'
            }
        ]
    },

    onEmpresaActivate: function(container, newActiveItem, oldActiveItem, options) {
        Ext.getCmp('btnNavAdicionarEmpresa').setHidden(false);
    },

    onEmpresaDeactivate: function(container, newActiveItem, oldActiveItem, options) {
        Ext.getCmp('btnNavAdicionarEmpresa').setHidden(true);
    }

});