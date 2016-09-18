define(['monthSelector', 'yearSelector', 'weekBanner'], function ($monthSelector, $yearSelector, $weekBanner) {
    function init($, calendar) {
        var $head = $('<div>').addClass('head');
        $head.append($monthSelector.init($, calendar));
        $head.append($yearSelector.init($, calendar));
        $head.append($weekBanner.init($, calendar.constructor.WEEK));
        return $head;
    }
    return {
        init: init
    };
});