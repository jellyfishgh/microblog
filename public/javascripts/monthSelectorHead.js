define(function () {
    function MonthSelectorHead($, calendar, $monthList) {
        this.$ = $;
        this.calendar = calendar;
        this.$selectedMonth = $('<span>').text(calendar.constructor.MONTH[calendar.date.getMonth()]).click(function () {
            $monthList.toggle('normal');
        });
    }
    MonthSelectorHead.prototype.update = function () {
        var calendar = this.calendar;
        this.$selectedMonth.text(calendar.constructor.MONTH[calendar.date.getMonth()]);
    };
    MonthSelectorHead.prototype.init = function () {
        var $ = this.$, calendar = this.calendar, $selectedMonth = this.$selectedMonth;
        var $monthSelectorHead = $('<span>').addClass('monthSelectorHead');

        var $lastMonthArrow = $('<span>').text('<');
        $lastMonthArrow.click(function () {
            calendar.date = calendar.lastMonth();
            calendar.updateDaysView();
            $selectedMonth.text(calendar.constructor.MONTH[calendar.date.getMonth()]);
        });
        $monthSelectorHead.append($lastMonthArrow);

        $monthSelectorHead.append($selectedMonth);

        var $nextMonthArrow = $('<span>').text('>');
        $nextMonthArrow.click(function () {
            calendar.date = calendar.lastMonth();
            calendar.updateDaysView();
            $selectedMonth.text(calendar.constructor.MONTH[calendar.date.getMonth()]);
        });
        $monthSelectorHead.append($nextMonthArrow);

        return $monthSelectorHead;
    };
    return MonthSelectorHead;
});