define(function () {
    var aday = 86400000;//ms
    function init($, id) {
        var week = ['日', '一', '二', '三', '四', '五', '六'];
        var date = new Date();
        var currentDate = date.getDate();//1-31
        var currentDay = date.getDay();//0-6
        var currentMonth = date.getMonth();//0-11
        date.setDate(1);
        var month = [];
        var firstDayOfMonth = date.getDay();
        var firstLine = [];
        var k = firstDayOfMonth - 1;
        var lastDayOfLastMonth = yesterday(date).getDate();
        while (k > -1) {
            firstLine[k] = {
                isInM: false,
                value: lastDayOfLastMonth - (firstDayOfMonth - k) + 1
            };
            k--;
        }
        k = firstDayOfMonth;
        while (k < week.length) {
            firstLine[k] = {
                isInM: true,
                value: 1 + (k - firstDayOfMonth)
            };
            k++;
        }
        month.push(firstLine);
        k = 7 - firstDayOfMonth + 1;
        for (var i = 1; i < 4; i++) {
            var row = [];
            for (var j = 0; j < 7; j++) {
                row.push({
                    isInM: true,
                    value: k++
                });
            }
            month.push(row);
        }
        var daysOfMonth = getDaysOfMonth(date);
        var lastLine = [];
        while(k <= daysOfMonth){
            lastLine.push({
                isInM: true,
                value: k
            });
            k++;
        }
        k=1;
        while(lastLine.length < 7){
            lastLine.push({
                isInM: false,
                value: k++
            });
        }
        month.push(lastLine);
        // month.map((line) => {
        //     var row = [];
        //     line.map(day => {
        //         row.push(day.value);
        //     });
        //     console.log(row.join(' '));
        // });
    }
    function getDaysOfMonth(date) {
        var m31 = [1, 3, 5, 7, 8, 10, 12];
        if(isLeapYear(date.getFullYear()) && date.getMonth() === 1) return 29;
        else if(date.getMonth() === 1) return 28;
        else if(m31.includes(date.getMonth() + 1)) return 31;
        else return 30;
    }
    function yesterday(date){
        return new Date(date.getTime() - aday);
    }
    function tomorrow(date) {
        return new Date(date.getTime() + aday);
    }
    function isLeapYear(year) {
        return year%400 === 0 || (year % 4 ===0 && year % 100 !== 0);
    }
    return {
        init: init
    };
});
