// 统一小程序wx.request请求
// 函数 URL 不同, 在请求是要去传参数 params,  get  post 明文/(用户输入后的请求)表单加密

// params形参赋初值
// @params json格式  query 传查询参数   method 方法
import wepy from 'wepy';
import utils from '@/utils/utils';
import md5 from '@/utils/md5';

const API_SECRET_KRY = 'www.mall.cycle.com';//与后台约定好的,不可说的
const TIMESTAMP = utils.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KRY).toLowerCase());
const wxRequest = async (params = {}, url) => {
    // wx.request
    let data = params.query || {};
    //在请求的过程中带上时间戳的常用做法
    // 签名
    // 加密 code 你有, md5 加密
    data.sign = SIGN;
    data.time = TIMESTAMP;
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json'}
    });
    return res ;
} 

module.exports = {
    wxRequest
}