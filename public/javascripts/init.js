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
        require(['zepto'], handler);
    }else{
        require(['jquery'], handler);
    }
});

function handler($){
    require(['login', 'finish'], function(login, finish){
        login.init($);
        finish.init($);
    });
}
