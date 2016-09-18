define(function () {
    function Calendar(date) {
        if (!date) date = new Date();
        this.date = date;
    }
    Calendar.ONEDAY = 86400000;//ms
    Calendar.WEEK = ['日', '一', '二', '三', '四', '五', '六'];
    Calendar.MONTH = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'];
    Calendar.BIGMONTH = [1, 3, 5, 7, 8, 10, 12];
    Calendar.EDGEYEAR = [1980, 2050];
    // 返回某一天在日历中的坐标
    Calendar.location = function (k, d, weekLength) {
        return {
            lineIndex: Math.floor((k + d - 1) / weekLength),
            weekIndex: (k + d - 1) % weekLength
        };
    };
    Calendar.prototype.isLeapYear = function () {
        var year = this.date.getFullYear();
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    };
    Calendar.prototype.lastYear = function () {
        var date = this.date;
        return new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
    };
    Calendar.prototype.nextYear = function () {
        var date = this.date;
        return new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
    };
    Calendar.prototype.lastMonth = function () {
        var date = this.date;
        if (date.getMonth() === 0) {
            return new Date(date.getFullYear() - 1, 12, date.getDate());
        } else {
            return new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
        }
    };
    Calendar.prototype.nextMonth = function () {
        var date = date;
        if (date.getMonth() === 11) {
            return new Date(date.getFullYear() + 1, 0, date.getDate());
        } else {
            return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
        }
    };
    Calendar.prototype.lastDay = function () {
        var date = this.date;
        return new Date(date.getTime() - Calendar.ONEDAY);
    };
    Calendar.prototype.nextDay = function () {
        var date = this.date;
        return new Date(date.getTime() + Calendar.ONEDAY);
    };
    Calendar.prototype.daysOfMonth = function () {
        var m31 = Calendar.BIGMONTH;
        var date = this.date;
        if (this.isLeapYear() && date.getMonth() === 1) return 29;
        else if (date.getMonth() === 1) return 28;
        else if (m31.includes(date.getMonth() + 1)) return 31;
        else return 30;
    };
    Calendar.prototype.firstDayOfMonth = function () {
        var date = this.date;
        return new Date(date.getFullYear(), date.getMonth(), 1);
    };
    Calendar.prototype.dayDate = function () {
        var firstDay = this.firstDayOfMonth();
        var weekOfFirstDay = firstDay.getDay();
        var days = this.daysOfMonth();
        var weekCount = Math.ceil((days + weekOfFirstDay) / Calendar.WEEK.length);
        var month = [];
        var i;
        for (i = 0; i < weekCount; i++) {
            month.push(new Array(7));
        }
        for (i = 1; i <= days; i++) {
            var loc = Calendar.location(weekOfFirstDay, i, Calendar.WEEK.length);
            month[loc.lineIndex][loc.weekIndex] = i;
        }
        return month;
    };
    Calendar.prototype.setDpDays = function (dpDays) {
        this.dpDays = dpDays;
    };
    Calendar.prototype.updateDaysView = function () {
        this.dpDays.update();
    };
    return Calendar;
});
