define(['monthSelectorHead'], function (MonthSelectorHead) {
    function init($, calendar) {
        var $monthSelector = $('<div>').addClass('monthSelector');        
        
        var $monthList = $('<div>').addClass('monthList');
        $monthList.hide();
        calendar.constructor.MONTH.map((month) => {
            $monthList.append($('<div>').text(month).addClass('month').click(function(){
                calendar.date.setMonth(calendar.constructor.MONTH.indexOf($(this).text()));
                // calendar.updateDaysView();
                // monthSelectorHead.update();
                calendar.updateView();
                $monthList.hide();
            }));
        });

        var monthSelectorHead = new MonthSelectorHead($, calendar, $monthList);
        calendar.setMonthSelectorHead(monthSelectorHead);

        $monthSelector.append(monthSelectorHead.init());
        $monthSelector.append($monthList);

        return $monthSelector;
    }
    return {
        init: init
    };
});