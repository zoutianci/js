//index.js
//获取应用实例
import util from '../../utils/index';
import config from '../../utils/config';
const app = getApp()

Page({
  data: {
    hiddenLoading: false,
    hasMore: true,
    page: 1,
    days: 3,
    pageSize: 4,
    articleList: []
  },
  // onLoad多写封装好的代码
  onLoad: function () {
    this.requestArticle();
  },
  // 有远程有本地的资源都可以使用 mock判断想哪请求
  // .then 跟success一样的功能 
  requestArticle() {
    util.request({
      url: 'list',
      mock: true,
      data: {
        tag: '微信热门',
        start: this.data.page || 1,
        days: this.data.days || 3,
        pageSize: this.data.pageSize,
        langs: 'en'
      }
    })
      .then(res => {
        console.log(res);
        this.setData({
          hiddenLoading: true,
          articleList: res.data
        })
        console.log(this.data.articleList)
      })
  },
  onShareAppMessage() {
    let title = config.defaultShareText || '';
    // 分享什么
    return {
      title,
      path: `/pages/index/index`,
      success: function (res) {

      },
      fail: function (res) {

      }
    }
  },
  onReachBottom() {
    if (this.data.hasMore) {
      let nextPage = this.data.page + 1;
      this.setData({
        page: nextPage
      });
      this.requestArticle();
    }
  },
  onPullDownRefresh() {
    this.setData({
      hiddenLoading: false
    })
    this.requestArticle();
  },
  showDetail(e) {
    let dataset = e.currentTarget.dataset;
    let item = dataset && dataset.item;
    let contentId = item.contentId || 0;
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`
    })
  }
})
