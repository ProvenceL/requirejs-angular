/**
 * Created by fengxl on 2016/11/28.
 */
define(function(){
    return function() {
        /**
         * 请求数据Api
         * @type {string}
         */
        var Api = 'http:/0.0.0.0:0000/pi/{method}';
        return {
            /**
             * 遍历object
             * @param obj
             * @param callback
             */
            goThroughObj: function (obj, callback) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        callback(key, obj[key]);
                    }
                }
            },

            /**
             * 获取API的URL
             * @param method
             * @param parameter
             * @return {string}
             */
            getApiUrl: function (method, parameter) {
                var url = Api.replace("{method}", method);
                if (parameter) {
                    if (url.indexOf("?") < 0) url += "?";
                    for (var key in parameter) {
                        if (parameter.hasOwnProperty(key)) {
                            url += key + "=" + parameter[key] + "&";
                        }
                    }
                    url = url.substring(0, url.length - 1);
                }
                return url;
            },

            /**
             * 遍历数组
             * @param arr
             * @param callback
             */
            each: function (arr, callback) {
                if (arr !== null) {
                    if (arr.length !== 0) {
                        for (var i = 0; i < arr.length; i++) {
                            callback(i, arr[i]);
                            //callback.call(arr[i], i, arr[i]);
                        }
                    }
                }
            },

            /**
             * 字符串取数字(获取返回日期中的日期)
             * @param str
             * @returns {number}
             */
            getNumFromString:function (str){
                return Number(str.replace(/[^0-9]/ig,""));
            },

            /**
             * 格式化时间(YYYY-MM-DD HH:MM:SS)
             * @param date
             * @returns {string}
             */
            formatDateToYYYYMMDDHHMMSS: function (date) {
                date = new Date(date);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                var minute = date.getMinutes();
                var second = date.getSeconds();
                if (month < 10) {
                    month = "0" + month.toString();
                } else {
                    month = month.toString();
                }
                if (day < 10) {
                    day = "0" + day.toString();
                } else {
                    day = day.toString();
                }
                if (hour < 10) {
                    hour = "0" + hour.toString();
                } else {
                    hour = hour.toString();
                }
                if (minute < 10) {
                    minute = "0" + minute.toString();
                } else {
                    minute = minute.toString();
                }
                if (second < 10) {
                    second = "0" + second.toString();
                } else {
                    second = second.toString();
                }
                return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
            },
            /**
             * 格式化时间(YYYY-MM-DD)
             * @param date
             * @returns {string}
             */
            formatDateToYYYYMMDD: function (date) {
                date = new Date(date);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                var minute = date.getMinutes();
                var second = date.getSeconds();
                if (month < 10) {
                    month = "0" + month.toString();
                } else {
                    month = month.toString();
                }
                if (day < 10) {
                    day = "0" + day.toString();
                } else {
                    day = day.toString();
                }
                return year + "-" + month + "-" + day;
            },
            /**
             * 格式化时间(MM-DD HH:MM)
             * @param date
             * @returns {string}
             */
            getFormatMMDDHHMM: function (date) {
                date = new Date(date);
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                var minute = date.getMinutes();
                if (month < 10) {
                    month = "0" + month.toString();
                } else {
                    month = month.toString();
                }
                if (day < 10) {
                    day = "0" + day.toString();
                } else {
                    day = day.toString();
                }
                if (hour < 10) {
                    hour = "0" + hour.toString();
                } else {
                    hour = hour.toString();
                }
                if (minute < 10) {
                    minute = "0" + minute.toString();
                } else {
                    minute = minute.toString();
                }
                return month + "-" + day + " " + hour + ":" + minute;
            },
            /**
             * 获取距离当前时间差(DD HH:MM:SS)
             * @param date
             * @returns {string}
             */
            getTimes: function (date) {
                var startTime = new Date(date);  //距离时间
                alert("aa");
                var nowTime = new Date();    //当前时间
                var times = nowTime.getTime() - startTime.getTime();  //时间差的毫秒数

                //计算出相差天数
                var days = Math.floor(times / (24 * 3600 * 1000));
                //计算出小时数
                var leave1 = times % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
                var hours = Math.floor(leave1 / (3600 * 1000));
                //计算相差分钟数
                var leave2 = leave1 % (3600 * 1000);      //计算小时数后剩余的毫秒数
                var minutes = Math.floor(leave2 / (60 * 1000));

                //计算相差秒数
                var leave3 = leave2 % (60 * 1000);   //计算分钟数后剩余的毫秒数
                var seconds = Math.round(leave3 / 1000);

                alert(" 相差 " + days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
            },
            /**
             * 获取星期
             * @param date
             * @returns {number}
             */
            getWeek: function (date) {
                var weekDay = -1;
                date = new Date(date);
                switch (date.getDay()) {
                    case 0:
                        weekDay = "周日";
                        break;
                    case 1:
                        weekDay = "周一";
                        break;
                    case 2:
                        weekDay = "周二";
                        break;
                    case 3:
                        weekDay = "周三";
                        break;
                    case 4:
                        weekDay = "周四";
                        break;
                    case 5:
                        weekDay = "周五";
                        break;
                    case 6:
                        weekDay = "周六";
                        break;
                }
                return weekDay;
            },

            /**
             * 判断是否为空
             * @param obj
             * @return {boolean}
             */
            isNullOrEmpty: function (obj) {
                if (typeof obj === "undefined") {
                    return obj === undefined;
                }
                if(typeof obj === "object"){
                    return obj === null;
                }
                if (typeof obj === "string") {
                    return obj === "";
                }
                return false;
            },


        }
    };
});