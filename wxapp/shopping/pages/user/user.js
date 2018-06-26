// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    hasAddress:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    wx.getStorage({
      key: 'lists',
      success: (res) => {
        // success
        console.log(res);
        this.setData({
          lists: res.data,
          // hasAddress:false
        })
        console.log(this.data.lists.name);
        if(this.data.lists.name != ''){
          this.setData({
            hasAddress:true
          })
        }else{
          this.setData({
            hasAddress:false
          })
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})