define(['monthSelector', 'yearSelector'], function ($monthSelector, $yearSelector) {
    function init($, calendar) {
        var $head = $('<div>').addClass('head');
        $head.append($monthSelector.init($, calendar));
        $head.append($yearSelector.init($, calendar));
        return $head;
    }
    return {
        init: init
    };
});