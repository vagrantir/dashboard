Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
// Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
// January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
// Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
            - 3 + (week1.getDay() + 6) % 7) / 7);
}
Date.prototype.getWeekYear = function () {
    var date = new Date(this.getTime());
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    return date.getFullYear();
}
Date.prototype.getLastMonthDay = function (monthShift) {
    var y = this.getFullYear()
    var m = this.getMonth()
    monthShift = isNaN(monthShift) ? 0 : monthShift
    return (new Date(y, m + monthShift, 0)).getDate()
}

export const NOW = new Date()
export const WEEK_DAY = NOW.getDay()
export const CURRENT_DAY = NOW.getDate()
export const CURRENT_WEEK = NOW.getWeek()
export const CURR_MONTH_LAST_DAY = NOW.getLastMonthDay()
export const LAST_MONTH_LAST_DAY = NOW.getLastMonthDay(-1)
