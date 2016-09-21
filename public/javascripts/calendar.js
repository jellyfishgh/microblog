define(function () {
    function Calendar(date) {
        if (!date) date = new Date();
        this.date = date;
    }
    Calendar.ONEDAY = 86400000;//ms
    Calendar.WEEK = ['日', '一', '二', '三', '四', '五', '六'];
    Calendar.MONTH = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'];
    Calendar.BIGMONTH = [1, 3, 5, 7, 8, 10, 12];
    Calendar.EDGEYEAR = [2001, 2020];
    Calendar.TODAY = new Date().getDate();//1-31,TODAY
    // 返回某一天在日历中的坐标
    Calendar.location = function (k, d, weekLength) {
        return {
            lineIndex: Math.floor((k + d - 1) / weekLength),
            weekIndex: (k + d - 1) % weekLength
        };
    };
    Calendar.prototype.formateDate = function() {
        return `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}`;
    };
    Calendar.prototype.isLeapYear = function () {
        var year = this.date.getFullYear();
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    };
    Calendar.prototype.lastYear = function () {
        var date = this.date;
        return new Date(date.getFullYear() - 1, date.getMonth(), 1);
    };
    Calendar.prototype.nextYear = function () {
        var date = this.date;
        return new Date(date.getFullYear() + 1, date.getMonth(), 1);
    };
    /*
        nextYear()/lastYear()
        nextMonth()/lastMonth()
        需要注意7.31上一个月不能是6.31（7.1），所以需要统一把日期定为到1号
     */
    Calendar.prototype.lastMonth = function () {
        var date = this.date;
        if (date.getMonth() === 0) {
            return new Date(date.getFullYear() - 1, 11, 1);
        } else {
            return new Date(date.getFullYear(), date.getMonth() - 1, 1);
        }
    };
    Calendar.prototype.nextMonth = function () {
        var date = this.date;
        if (date.getMonth() === 11) {
            return new Date(date.getFullYear() + 1, 0, 1);
        } else {
            return new Date(date.getFullYear(), date.getMonth() + 1, 1);
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
        var i, j;
        for (i = 0; i < weekCount; i++) {
            month.push(new Array(Calendar.WEEK.length));
        }
        var lastMonthDays = new Calendar(this.lastMonth()).daysOfMonth();
        var firstLoc = Calendar.location(weekOfFirstDay, 1, Calendar.WEEK.length);
        j = firstLoc.lineIndex * 7 + firstLoc.weekIndex;
        i = 0;
        while (i < j) {
            month[Math.floor(i / 7)][i % 7] = {
                ext: 0,
                value: lastMonthDays - (j - i) + 1
            };
            i++;
        }

        for (i = 1; i <= days; i++) {
            var loc = Calendar.location(weekOfFirstDay, i, Calendar.WEEK.length);
            month[loc.lineIndex][loc.weekIndex] = {
                ext: 1,
                value: i
            };
        }

        var lastLoc = Calendar.location(weekOfFirstDay, days, Calendar.WEEK.length);
        j = (weekCount - lastLoc.lineIndex - 1) * 7 + (Calendar.WEEK.length - lastLoc.weekIndex - 1);
        while (j > 0) {
            month[Math.floor(j / 7) + lastLoc.lineIndex][j % 7 + lastLoc.weekIndex] = {
                ext: 2,
                value: j
            };
            j--;
        }
        return month;
    };
    Calendar.prototype.updateView = function () {
        this.updateMonthSelectorHead();
        this.updateYearSelectorHead();
        this.updateDaysView();
    };
    Calendar.prototype.setMonthSelectorHead = function (monthSelectorHead) {
        this.monthSelectorHead = monthSelectorHead;
    };
    Calendar.prototype.updateMonthSelectorHead = function () {
        this.monthSelectorHead.update();
    };
    Calendar.prototype.setYearSelectorHead = function (yearSelectorHead) {
        this.yearSelectorHead = yearSelectorHead;
    };
    Calendar.prototype.updateYearSelectorHead = function () {
        this.yearSelectorHead.update();
    };
    Calendar.prototype.setDpDays = function (dpDays) {
        this.dpDays = dpDays;
    };
    Calendar.prototype.updateDaysView = function () {
        this.dpDays.update();
    };
    return Calendar;
});
