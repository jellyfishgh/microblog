define(['yearSelectorHead'], function (YearSelectorHead) {
    function init($, calendar) {
        var $yearSelector = $('<div>').addClass('yearSelector');

        var $yearList = $('<div>');        
        var year = calendar.constructor.EDGEYEAR[0];
        while (year <= calendar.constructor.EDGEYEAR[0][1]) {
            $yearList.append($('<span>').text(year++).addClass('year').click(function(){
                calendar.setFullYear(parseInt($(this).text()));
                calendar.updateDaysView();
                yearSelectorHead.update();
            }));
        }
        $yearList.hide();

        var yearSelectorHead = new YearSelectorHead($, calendar, $yearList);

        $yearSelector.append(yearSelectorHead);
        $yearSelector.append($yearList);
    }
    return {
        init: init
    };
});