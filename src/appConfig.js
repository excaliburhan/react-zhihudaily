/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-04-18 04:15:53
 * @modify date 2018-04-18 04:15:53
 * @desc [配置文件]
*/

const env = process.env.NODE_ENV

const htmlTitle = '知乎日报小平版'

// api相关
let baseUrl = 'https://zhihu-daily.leanapp.cn/api/v1' // api接口

if (env === 'production') {
  baseUrl = 'https://zhihu-daily.leanapp.cn/api/v1'
}

module.exports = {
  htmlTitle,
  baseUrl
}
