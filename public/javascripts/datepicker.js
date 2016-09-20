define(['Calendar', 'dpHead', 'weekBanner', 'dpDays'], function (Calendar, dpHead, $weekBanner, DpDays) {
    function DatePicker($, id) {
        var calendar = new Calendar(new Date());
        var dpDays = new DpDays($, calendar);
        dpDays.init();
        calendar.setDpDays(dpDays);
        $(id).append(dpHead.init($, calendar));
        $(id).append($weekBanner.init($, calendar.constructor.WEEK));
        $(id).append(dpDays.$dateView);
        this.calendar = calendar;
    }
    DatePicker.prototype.getOut = function () {
        return this.calendar.date;
    };
    return DatePicker;
});