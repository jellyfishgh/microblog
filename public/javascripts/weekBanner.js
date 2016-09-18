define(function () {
    function init($, week) {
        var $week = $('<div>').addClass('week');
        week.map((d) => {
            $week.append($('<span>').text(d));
        });
        return $week;
    }
    return {
        init: init
    };
});