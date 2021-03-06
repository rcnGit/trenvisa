import axios from 'axios';
export default {
    install:function(Vue, options) {
        //Vue.prototype.Host='http://172.16.8.64:8080/?#/';
        Vue.prototype.Host='http://172.16.6.68/';
        //Vue.prototype.Host='http://www.tangrenvisa.com/';
        Vue.prototype.formatDuring = function (mss) {//时间格式化
            var days = parseInt(mss / (1000 * 60 * 60 * 24));
            var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = (mss % (1000 * 60)) / 1000;
            return days + " 天 " + hours + " 小时 " + minutes + " 分 " + Math.round(seconds) + " 秒 ";
        }
        
        Vue.prototype.money = function (value) {//Vue自定义过滤器格式化数字三位加一逗号
            if(!value) return '0.00';
            var intPart = parseInt(value); //获取整数部分
            var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
            var floatPart = ".00"; //预定义小数部分
            var value2Array = value.split(".");

            //=2表示数据有小数位
            if(value2Array.length == 2) {
                floatPart = value2Array[1].toString(); //拿到小数部分

                if(floatPart.length == 1) { //补0,实际上用不着
                    return intPartFormat + "." + floatPart + '0';
                } else {
                    return intPartFormat + "." + floatPart;
                }

            } else {
                return intPartFormat + floatPart;
            }

        }//

        Vue.prototype.trafficStatistics = function (code) {
            axios({
                method:'get',
                url:'/wxservice/wxexternal/trafficStatistics',//按钮点击量统计接口
                params: {
                    code: code
                }
            })
            .then(function(res) {
               console.log(res) 
            })//

        }
        
}
}
