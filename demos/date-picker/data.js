/**
 * Created by Administrator on 2017/10/15.
 */
(function () {
    var datepicker = {}

    datepicker.getMonthData = function (year, month) {
        var ret = [];

        if (!year || !month) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }

        var firstDay = new Date(year, month - 1, 1);          //当前月的第一天
        var firstDayWeekDay = firstDay.getDay();            //当前月的第一天是周几
        if (firstDayWeekDay === 0) firstDayWeekDay = 7;      //周日 getDay 返回0，修改对应关系：['周一','周二','周三','周四','周五','周六','周日'] => [1,2,3,4,5,6,7]

        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;

        var lastDayOfLastMonth = new Date(year, month - 1, 0); //上个月的最后一天
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        var preMonthDayCount = firstDayWeekDay - 1;//显示几天 上一个月的天数

        var lastDay = new Date(year, month, 0);//当前月的最后一天
        var lastDate = lastDay.getDate();

        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;

            if (date <= 0) {
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }

            if (thisMonth === 0) {
                thisMonth = 12;
            }

            if (thisMonth === 13) {
                thisMonth = 1;
            }

            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            })
        }

        return {
            year: year,
            month: month,
            days: ret
        }
    }


    window.datepicker = datepicker;
})()