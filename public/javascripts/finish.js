define(['datepicker', 'location'], function(datepicker, location) {
    function init($) {
        datepicker.init($, '#datepicker');
        location.init($, '#location');
        $('#finish').click(toFinish);
        function toFinish(){

        }
    }
    return {
        init: init
    };
});
