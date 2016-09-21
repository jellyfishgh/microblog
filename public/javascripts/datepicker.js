define(['Calendar', 'dpHead', 'weekBanner', 'dpDays'], function (Calendar, dpHead, $weekBanner, DpDays) {
    function DatePicker($, id) {
        var calendar = new Calendar(new Date());
        var dpDays = new DpDays($, calendar);
        dpDays.init();
        calendar.setDpDays(dpDays);
        var $datepicker = $('<div>').attr({id: 'calendar'}).addClass('calendar');
        $datepicker.append(dpHead.init($, calendar));
        $datepicker.append($weekBanner.init($, calendar.constructor.WEEK));
        $datepicker.append(dpDays.$dateView);
        $datepicker.hide();
        this.calendar = calendar;
        $(id).append($('<span>').text(calendar.formateDate()).addClass('date').click(function(){
            $datepicker.fadeToggle('slow');
        }));
        $(id).append($datepicker);
    }
    DatePicker.prototype.getOut = function () {
        return this.calendar.date;
    };
    return DatePicker;
});