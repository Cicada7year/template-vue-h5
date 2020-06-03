/*
 * @Description: 格式化/处理各种数据
 * @Date: 2020-06-02 18:00:20
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-03 13:51:39
 */

/**
 * 格式化时间
 * @param {Number} number 时间戳
 * @param {String} format 格式 'Y/D/M h:m:s'
 * @return {String} 格式化后时间 '2020/02/02 12:12:00'
 */
export function formatTime(number, format) {
  function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(Number(number));

  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

/**
 * 格式化日期
 * @param {Number} datetime 时间戳
 * @param {Boolean} simple 
 */
export function formatDate(datetime, simple = false) {
  const tempDate = (new Date()).getTime()
  const result = stringifyDate(datetime, simple)
  const thatDay = result.thatDay
  const deltaTime = (tempDate - thatDay) / 1000

  if (deltaTime < 3600 * 24) {
    return result.withHour
  } else if (deltaTime < 3600 * 24 * 2) {
    return result.withLastDay
  } else if (deltaTime < 3600 * 24 * 7) {
    return result.withDay
  } else if (deltaTime < 3600 * 24 * 30) {
    return result.withMonth
  } else {
    return result.withYear
  }
}

/**
 * 字符串化日期
 * @param {Date} datetime 时间戳
 * @param {Boolean} simple 
 */
export function stringifyDate(datetime, simple = false) {
  // let weekMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  datetime = new Date(datetime)
  const year = datetime.getFullYear()
  const simpleYear = datetime.getYear() - 100
  let month = datetime.getMonth() + 1
  month = month > 9 ? month : '0' + month
  let day = datetime.getDate()
  day = day > 9 ? day : '0' + day
  let hour = datetime.getHours()
  hour = hour > 9 ? hour : '0' + hour
  let min = datetime.getMinutes()
  min = min > 9 ? min : '0' + min
  let week = datetime.getDay()
  week = weekMap[week]
  const thatDay = (new Date(year, month - 1, day, 0, 0, 0)).getTime()

  if (simple) {
    return {
      withYear: `${day}/${month}/${simpleYear}`,
      withMonth: `${month}-${day}`,
      withDay: `${week}`,
      withLastDay: `昨天`,
      withHour: `${hour}:${min}`,
      thatDay
    }
  } else {
    return {
      withYear: `${year}-${month}-${day} ${hour}:${min}`,
      withMonth: `${month}-${day} ${hour}:${min}`,
      withDay: `${week} ${hour}:${min}`,
      withLastDay: `昨天 ${hour}:${min}`,
      withHour: `${hour}:${min}`,
      thatDay
    }
  }
}

/**
 * 对比时间差异
 * @param {String} start 开始时间
 * @param {String} end 结束时间
 */
export function diffTime(start, end) {
  const startTime = new Date(Date.parse(start.replace(/-/g, '/'))).getTime();
  const endTime = new Date(Date.parse(end.replace(/-/g, '/'))).getTime();
  //  时间差的毫秒数
  const date3 = endTime - startTime;
  //  计算出相差天数  
  let days = Math.floor(date3 / (24 * 3600 * 1000))
  //  计算出小时数  
  const leave1 = date3 % (24 * 3600 * 1000)
  //  计算天数后剩余的毫秒数  
  let hours = Math.floor(leave1 / (3600 * 1000))
  //  计算相差分钟数  
  const leave2 = leave1 % (3600 * 1000)
  //  计算小时数后剩余的毫秒数  
  let minutes = Math.floor(leave2 / (60 * 1000))
  //  计算相差秒数  
  const leave3 = leave2 % (60 * 1000)
  //  计算分钟数后剩余的毫秒数  
  let seconds = Math.round(leave3 / 1000)
  days = days < 10 ? `0${days}` : days
  hours = hours < 10 ? `0${hours}` : hours
  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds
  return { days, hours, minutes, seconds };
}

/**
 * 时间增加
 * @param {Number} time 时间戳
 * @param {Number} num 加减分钟
 */
export function addTime(time, num) {
  const t = new Date(time)
  t.setTime(time + 1000 * 60 * num)
  return t
}

/**
 * 格式化金额
 * @param {Number} num 金额
 * @param {Number} decimal 小数位，默认保留后两位
 * @param {Boolean} thousands 是否开启千分位
 */
export function formatProce(num, decimal = 2, thousands = true) {
  let price = Number(num).toFixed(decimal)
  if (thousands) price = price.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  return price
}

/**
 * 序列化对象为URL参数
 * @param {Any} obj 需要序列化的参数
 */
export function stringifyParams2Url(obj) {
  if (!obj) return ''
  const stringify = (param, key) => {
    let str = ''
    const type = typeof (param)
    if (type === 'string' || type === 'number' || type === 'boolean') {
      str += `&${key}=${encodeURIComponent(param)}`
    } else {
      for (const i in param) {
        const k = key ? `${key}${Array.isArray(param) ? `[${i}]` : `.${i}`}` : i
        str += stringify(param[i], k)
      }
    }
    return str
  }
  return stringify(obj).substr(1)
}

/**
 * 序列化字符串为对象
 * @param {String} str url参数
 */
export function parseUrl2Param(str) {
  if (!str) return {}
  const arr = str.replace(/\?/g, '').split('&')
  const param = {}
  arr.forEach((item, index) => {
    const s = item.split('=')
    param[s[0]] = s[1]
  })
  return param
}
