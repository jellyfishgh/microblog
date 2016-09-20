define(function () {
    function init($, week) {
        var $week = $('<div>').addClass('week');
        week.map((d) => {
            $week.append($('<div>').text(d));
        });
        return $week;
    }
    return {
        init: init
    };
});