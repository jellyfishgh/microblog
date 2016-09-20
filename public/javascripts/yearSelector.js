define(['yearSelectorHead'], function (YearSelectorHead) {
    function init($, calendar) {
        var $yearSelector = $('<div>').addClass('yearSelector');

        var $yearList = $('<div>').addClass('yearList');
        var year = calendar.constructor.EDGEYEAR[0];
        while (year <= calendar.constructor.EDGEYEAR[1]) {
            $yearList.append($('<div>').text(year++).addClass('year'));
        }
        $yearList.children().click(function () {
            calendar.date.setFullYear(parseInt($(this).text()));
            // calendar.updateDaysView();
            // yearSelectorHead.update();
            calendar.updateView();
            $yearList.hide();
        });
        $yearList.hide();

        var yearSelectorHead = new YearSelectorHead($, calendar, $yearList);
        calendar.setYearSelectorHead(yearSelectorHead);

        $yearSelector.append(yearSelectorHead.init());
        $yearSelector.append($yearList);

        return $yearSelector;
    }
    return {
        init: init
    };
});