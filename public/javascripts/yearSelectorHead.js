define(function () {
    function YearSelectorHead($, calendar, $yearList) {
        this.$ = $;
        this.calendar = calendar;
        this.$selectedYear = $('<span>').text(calendar.date.getFullYear()).click(function () {
            $yearList.toggle('normal');
        });
    }
    YearSelectorHead.prototype.init = function () {
        var $ = this.$, calendar = this.calendar, $selectedYear = this.$selectedYear;

        var $yearSelectorHead = $('<span>').addClass('yearSelectorHead');

        var $lastYearArrow = $('<span>').text('<');
        $lastYearArrow.click(function () {
            calendar.date = calendar.lastYear();
            calendar.updateDaysView();
            $selectedYear.text(calendar.date.getFullYear());
        });
        $yearSelectorHead.append($lastYearArrow);

        $yearSelectorHead.append($selectedYear);

        var $nextYearArrow = $('<span>').text('>');
        $nextYearArrow.click(function () {
            calendar.date = calendar.nextYear();
            calendar.updateDaysView();
            $selectedYear.text(calendar.date.getFullYear());
        });
        $yearSelectorHead.append($nextYearArrow);

        return $yearSelectorHead;

    };
    YearSelectorHead.prototype.update = function () {
        var calendar = this.calendar;
        this.$selectedYear.text(calendar.date.getFullYear());
    };
    return YearSelectorHead;
});