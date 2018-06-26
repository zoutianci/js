// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: {
      name:'',
      tel:'',
      detailAddress:'',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  checkSave(e){
    var addLists = {
      name: this.data.lists.name,
      tel: this.data.lists.tel,
      detailAddress: this.data.lists.detailAddress,
      // status: '0',
      // id: new Date().getTime()
    }
    const temp = [
      addLists,
      ...this.data.lists
    ];
    this.setData({
      lists: temp
    });
    wx.setStorage({
      key: 'lists',
      data: temp
    });

    console.log("eqweqw");
    console.log(temp);
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  setInputName(e) {
    this.setData({
      'lists.name': e.detail.value
    })
  },
  setInputTel(e) {
    this.setData({
      'lists.tel': e.detail.value
    })
  },
  setInputDetailAddress(e) {
    this.setData({
      'lists.detailAddress': e.detail.value
    })
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