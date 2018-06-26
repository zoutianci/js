//app.js
App({
  onLaunch: function () {
    wx.getStorage({
      key: 'user-info',
      success:(res)=>{
        // console.log(res)
        this.globalData.userInfo=res.data
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  globalData: {
    userInfo: null
  }
})