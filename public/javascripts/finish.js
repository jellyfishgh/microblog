define(['calendar', 'location'], function(calendar, location) {
    function init($) {
        function toFinish(){

        }
        calendar.init($, '#calendar');
        location.init($, '#location');
        $('#finish').click(toFinish);
    }
    return {
        init: init
    };
});
