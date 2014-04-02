/*
 * File: app/store/Setting.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AR.store.Setting', {
    extend: 'Ext.data.Store',

    requires: [
        'AR.model.Setting',
        'AR.store.override.Setting',
        'Ext.data.proxy.LocalStorage'
    ],

    statics: {
        Initialization: function() {

            Ext.create('AR.store.Setting');
        }
    },

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'AR.model.Setting',
        storeId: 'settingStore',
        proxy: {
            type: 'localstorage',
            id: 'setting-store'
        }
    }
});