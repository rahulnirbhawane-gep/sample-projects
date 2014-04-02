/*
 * File: app/store/LocalArticle.js
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

Ext.define('AR.store.LocalArticle', {
    extend: 'Ext.data.Store',

    requires: [
        'AR.model.ArticleLocal',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        autoLoad: true,
        model: 'AR.model.ArticleLocal',
        storeId: 'articleLocalStore',
        proxy: {
            type: 'localstorage',
            id: 'localArticles'
        },
        listeners: [
            {
                fn: 'onStoreBeforeLoad',
                event: 'beforeload'
            },
            {
                fn: 'onStoreLoad',
                event: 'load'
            }
        ]
    },

    onStoreBeforeLoad: function(store, operation, eOpts) {
         var loadingMaskText = AR.locale.Labels.LOADINGMASK_TEXT;
        //Ext.Viewport.mask({ xtype: 'loadmask',message: loadingMaskText, indicator:true });
    },

    onStoreLoad: function(store, records, successful, operation, eOpts) {

        Ext.Viewport.unmask();
    }

});