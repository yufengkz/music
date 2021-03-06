import jsonps from '../common/js/jspnps'
import {commonParams, options} from './config'
import axios from 'axios'

export function getSingerList() {
	const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

	const data = Object.assign({}, commonParams, {
		channel: 'singer',
		page: 'list',
		key: 'all_all_all',
		pagesize: 100,
		pagenum: 1,
		hostUin:0,
		needNewCode:0,
		platform: 'yqq',
		g_tk: 5381
	})
	return jsonps(url, data, options)
}
