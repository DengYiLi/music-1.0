/**
 * Created by dengdengdeng on 2017/11/23.
 */
import originJSONP from 'jsonp'

// jsonp封装
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}` // 可把字符串作为URI 组件进行编码
  }
  return url ? url.substring(1) : ''
}
