define(function () {
    function DpDays($, calendar) {
        this.$ = $;
        this.calendar = calendar;
        this.$dateView = $('<div>').addClass('dateView');
    }
    DpDays.prototype.init = function () {
        var $ = this.$, calendar = this.calendar, $dateView = this.$dateView;
        var month = calendar.dayDate();
        month.map((line) => {
            var $lineView = $('<div>').addClass('lineView');
            line.map((d) => {
                var $day = $('<div>').text(d.value);
                if (d.ext === 0) $day.addClass('dayBeforeTheMonth');
                if (d.ext === 1) $day.addClass('dayInTheMonth');
                else if (d.ext === 2) $day.addClass('dayAfterTheMonth');
                // ? 选中的效果不完善，点击周末的时候跳转月份时不会被选中
                if(d.ext ===1 && d.value === calendar.date.getDate()) {
                    $day.addClass('selected');
                }
                if (d.value === calendar.constructor.TODAY) {
                    $day.addClass('today');
                }
                $day.click(function (d) {
                    return function () {
                        $('.selected').removeClass('.selected');
                        if (d.ext === 0) calendar.date = calendar.lastMonth();
                        else if (d.ext === 2) calendar.date = calendar.nextMonth();
                        calendar.date.setDate(d.value);
                        calendar.updateView();
                    };
                } (d));
                $lineView.append($day);
            });
            $dateView.append($lineView);
        });
    };
    DpDays.prototype.update = function () {
        this.$dateView.html('');
        this.init();
    };
    return DpDays;
});