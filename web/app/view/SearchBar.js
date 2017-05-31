Ext.define('OrdersApp.view.SearchBar',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.searchbar',
        title: 'Поиск товаров',
        width: 600,
        bodyPadding: 10,
        layout: 'anchor',

        items: [{
            xtype: 'combo',
            store:'Item',
            displayField: 'title',
            typeAhead: false,
            hideLabel: true,
            hideTrigger:true,
            anchor: '100%',

            listConfig: {
                loadingText: 'Searching...',
                emptyText: 'No matching posts found.',

                // Custom rendering template for each item
                getInnerTpl: function() {
                    return '<a class="search-item" href="http://www.sencha.com/forum/showthread.php?t={topicId}&p={id}">' +
                        '<h3><span>{[Ext.Date.format(values.lastPost, "M j, Y")]}<br />by {author}</span>{title}</h3>' +
                        '{excerpt}' +
                    '</a>';
                }
            },
            pageSize: 10
        }, {
            xtype: 'component',
            style: 'margin-top:10px',
            html: 'Live search requires a minimum of 4 characters.'
        }]
    });

