/**
 * Created by YuFeng on 2017/10/26.
 */

import originJSONP from 'jsonp'

function jsonp(url, data, option) {
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

export default jsonp

//json转查询字符串
function param(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += `&${k}=${encodeURIComponent(value)}`
	}
	return url ? url.substring(1) : ''
}
