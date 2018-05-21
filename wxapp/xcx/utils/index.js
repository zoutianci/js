// opt没有
import * as Mock from './mock'
const DEFAULT_REQUEST_OPTIONS = {
    url:'',
    data: {},
    header: {
        'Content-Type': 'application/json'
    },
    method: 'GET',
    dataType: 'json'
}
let util = {
    request(opt) {
        let options = Object.assign({}, DEFAULT_REQUEST_OPTIONS, opt);
        // console.log(options);
        let {url,data,header,method,dataType,mock=false } = options;
        // console.log(url,data,header,method,dataType,mock);
        return new Promise((resolve, reject)=>{
            if(mock){
                let res={
                    statusCode: 200,
                    data: Mock[url]
                }
                resolve(res.data);
                return;
            }
            wx.request({
                url,
                data,
                header,
                method,
                dataType,
                success(res) {
                    resolve(res.data)
                },
                fail(err) {
                    reject(err)
                }
            })
            // resolve('ok');
        });
    }
}
export default util