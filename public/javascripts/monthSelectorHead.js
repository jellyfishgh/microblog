define(function () {
    function MonthSelectorHead($, calendar, $monthList) {
        this.$ = $;
        this.calendar = calendar;
        this.$selectedMonth = $('<span>').text(calendar.constructor.MONTH[calendar.date.getMonth()]).click(function () {
            $monthList.fadeToggle('slow');
        });
    }
    MonthSelectorHead.prototype.update = function () {
        var calendar = this.calendar;
        this.$selectedMonth.text(calendar.constructor.MONTH[calendar.date.getMonth()]);
    };
    MonthSelectorHead.prototype.init = function () {
        var $ = this.$, calendar = this.calendar, $selectedMonth = this.$selectedMonth;
        var $monthSelectorHead = $('<div>').addClass('monthSelectorHead');

        var $lastMonthArrow = $('<span>').text('<');
        $lastMonthArrow.click(function () {
            calendar.date = calendar.lastMonth();
            // calendar.updateDaysView();
            // calendar.updateYearSelectorHead();
            // $selectedMonth.text(calendar.constructor.MONTH[calendar.date.getMonth()]);
            calendar.updateView();
        });
        $monthSelectorHead.append($lastMonthArrow);

        $monthSelectorHead.append($selectedMonth);

        var $nextMonthArrow = $('<span>').text('>');
        $nextMonthArrow.click(function () {
            calendar.date = calendar.nextMonth();
            // calendar.updateDaysView();
            // calendar.updateYearSelectorHead();
            // $selectedMonth.text(calendar.constructor.MONTH[calendar.date.getMonth()]);
            calendar.updateView();
        });
        $monthSelectorHead.append($nextMonthArrow);

        return $monthSelectorHead;
    };
    return MonthSelectorHead;
});