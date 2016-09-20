define(['datepicker', 'location'], function(DatePicker, Location) {
    function init($) {
        var datepicker = new DatePicker($, '#datepicker');
        var location = new Location($, '#location');
        $('#finish').click(toFinish);
        function toFinish(){
            console.log(datepicker.getOut());
            console.log(location.getOut());
        }
    }
    return {
        init: init
    };
});
