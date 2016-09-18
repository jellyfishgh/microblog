define(['Calendar', 'dpHead', 'dpDays'], function(Calendar, dpHead, DpDays){       
    function init($, id){
        var calendar = new Calendar();
        var $dateView = $('<div>');
        var dpDays = new DpDays($, calendar, $dateView);
        calendar.setDpDays(dpDays);
        $(id).append(dpHead.init($, calendar));
        $(id).append($dateView);
    }
    return {
        init: init
    };
});