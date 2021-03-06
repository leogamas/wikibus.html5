/*
 * File: app/store/Empresas.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Ubibus.store.Empresas', {
    extend: 'Ext.data.Store',
    alias: 'store.empresas',

    requires: [
        'Ubibus.model.Empresa'
    ],

    config: {
        autoLoad: true,
        autoSync: false,
        model: 'Ubibus.model.Empresa',
        storeId: 'empresa',
        proxy: {
            type: 'ajax',
            api: {
                create: 'php/empresa/criaEmpresa.php',
                read: 'php/empresa/listaEmpresas.php',
                update: 'php/empresa/atualizaEmpresa.php',
                destroy: 'php/empresa/deletaEmpresa.php'
            },
            writer: {
                type: 'json',
                encode: true,
                rootProperty: 'empresas'
            },
            reader: {
                type: 'json',
                rootProperty: 'empresas'
            }
        },
        grouper: {
            groupFn: function(record) {
                return record.get('nome')[0];
            }
        },
        sorters: {
            property: 'nome'
        }
    }
});