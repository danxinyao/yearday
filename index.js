/**
 * 获取最近一年每月的，开始时间和结束日期时间，用于下来框选择月份查询数据
 */
/**
 * 用法：在另外一个js文件中引用
 * import { arr } from './time.js' //该文件的相对路径
 * console.log(arr)
 */
var now = new Date(); //当前日期 
var nowDayOfWeek = now.getDay(); //今天本周的第几天 
var nowDay = now.getDate(); //当前日 
var nowMonth = now.getMonth(); //当前月 
// var nowYear = now.getYear(); //当前年 
// nowYear += (nowYear < 2000) ? 1900 : 0; 
var nowYear = now.getFullYear(); //当前年 
var lastMonthDate = new Date(); //上月日期
// lastMonthDate.setDate(1);
// lastMonthDate.setMonth(lastMonthDate.getMonth()-1);
// var lastYear = lastMonthDate.getYear();
var lastMonth = lastMonthDate.getMonth() - 1;
let arr = [] //最终返回的东西
//结果生成器
for (var i = -1; i < 11; i++) {
	let item = {
		text: getLastMonthStartDate(i),
		value: {
			begin: getLastMonthStartDate(i) + ' ' + '00' + ':' + '00' + ':' + '00',
			end: getLastMonthEndDate(i) + ' ' + '23' + ':' + '59' + ':' + '59'
		},
	}
	arr.push(item)
}
console.log(arr)
//格式化日期：yyyy-MM-dd 
function formatDate(date) {
	var myyear = date.getFullYear();
	var mymonth = date.getMonth() + 1;
	var myday = date.getDate();

	if (mymonth < 10) {
		mymonth = "0" + mymonth;
	}
	if (myday < 10) {
		myday = "0" + myday;
	}
	return (myyear + "-" + mymonth + "-" + myday);
}

//获得某月的天数 
function getMonthDays(myMonth) {
	var monthStartDate = new Date(nowYear, myMonth, 1);
	var monthEndDate = new Date(nowYear, myMonth + 1, 1);
	var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
	return days;
}


//获得本月的开始日期 
function getMonthStartDate() {
	var monthStartDate = new Date(nowYear, nowMonth, 1);
	return formatDate(monthStartDate);
}
//getMonthStartDate()
//getMonthEndDate()
//获得本月的结束日期 
function getMonthEndDate() {
	var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
	return formatDate(monthEndDate);
}
//获得上月开始时间
function getLastMonthStartDate(val) {
	let year = nowYear
	if (lastMonth == 11) {
		year--
	}
	var lastMonthStartDate = new Date(year, lastMonth - val, 1);
	//console.log(formatDate(lastMonthStartDate)+' '+'00'+':'+'00'+':'+'00')
	return formatDate(lastMonthStartDate);
}

//获得上月结束时间
function getLastMonthEndDate(val) {
	let year = nowYear
	if (lastMonth == 11) {
		year--
	}
	var lastMonthEndDate = new Date(year, lastMonth - val, getMonthDays(lastMonth - val));
	//console.log(formatDate(lastMonthEndDate)+' '+'23'+':'+'59'+':'+'59')
	return formatDate(lastMonthEndDate);
}
//输出变量 
export { arr }