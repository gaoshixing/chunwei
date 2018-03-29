import axios from 'axios';
import qs from 'qs';

var qsd = require('qs');
var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});
// http://pc.xingbuxinga.cn
let base = '/api';

// let base = 'http://localhost:8081/dingguang-backend-webapp';

// let base = 'http://localhost:8081/ROOT';
// http://oauth2.xingbuxinga.cn
let oauth = '/api';
//oauth2登录验证获取token
export const requestOauth = params => { return instance.post(`${oauth}/oauth/token?x=${params}`).then(res => res.data); };
//登录接口
export const requestLogin = params => { return instance.post(`${base}/login`, qsd.stringify(params)).then(res => res.data); };
//获取手机验证码
export const sendSmsCode = params => { return instance.post(`${base}/sendSmsCode`, qsd.stringify(params)).then(res => res.data); };

export const getUserList = params => { return instance.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return instance.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return instance.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return instance.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return instance.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return instance.get(`${base}/user/add`, { params: params }); };
