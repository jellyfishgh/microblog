require.config({
    paths: {
        'jquery': '/lib/jquery.min',
        'zepto':　'/lib/zepto.min'
    },
    shim: {
        'zepto': {
            exports: 'Zepto'
        }
    }
});
require(['util'], function(util) {
    if(util.isMobile()){

    }
});
