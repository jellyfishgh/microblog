define(['monthSelectorHead'], function (MonthSelectorHead) {
    function init($, calendar) {
        var $monthSelector = $('<div>').addClass('monthSelector');        
        
        var $monthList = $('<div>');
        $monthList.hide();
        calendar.constructor.MONTH.map((month) => {
            $monthList.append($('<span>').text(month).addClass('month').click(function(){
                calendar.date.setMonth(calendar.constructor.MONTH.find($(this).text()));
                calendar.updateDaysView();
                monthSelectorHead.update();
            }));
        });

        var monthSelectorHead = new MonthSelectorHead($, calendar, $monthList);

        $monthSelector.append(monthSelectorHead.init());
        $monthSelector.append($monthList);

        return $monthSelector;
    }
    return {
        init: init
    };
});