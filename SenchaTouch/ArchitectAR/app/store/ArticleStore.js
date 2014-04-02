/*
 * File: app/store/ArticleStore.js
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

Ext.define('AR.store.ArticleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.AR.store.ArticleStore',

    requires: [
        'AR.model.Article',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'AR.util.Utility'
    ],

    config: {
        model: 'AR.model.Article',
        storeId: 'articleStore',
        proxy: {
            type: 'jsonp',
            api: {
                read: AR.util.Utility.api.allPosts
            },
            extraParams: {
                count: 10
            },
            url: '',
            reader: {
                type: 'json',
                rootProperty: 'posts'
            }
        },
        listeners: [
            {
                fn: 'onJsonpstoreBeforeLoad',
                event: 'beforeload'
            },
            {
                fn: 'onJsonpstoreLoad',
                event: 'load'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
         var loadingMaskText = AR.locale.Labels.LOADINGMASK_TEXT;
         Ext.Viewport.mask({ xtype: 'loadmask',message: loadingMaskText, indicator:true });


        if(store.getAutoLoad()){
                       var settinglocalstore= Ext.data.StoreManager.lookup('settingStore');
                       settinglocalstore.load();

                       if(settinglocalstore.getCount() >=1 ){
        				var datasettings=settinglocalstore.getData().all[0].data;

        				if(datasettings.pageSize == 0){
        					datasettings.pageSize = 5;
        				}
        				store.getProxy().setExtraParams({'count':datasettings.pageSize});

        	}
        }
    },

    onJsonpstoreLoad: function(store, records, successful, operation, eOpts) {
        Ext.Viewport.unmask();
    }

});