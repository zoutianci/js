// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImg: 'https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c1.png',
    show: true,
    totalPrice: 0,
    detail:[
      {
        addClick: false,
        num: 0,
        checked: true,
        price: "10",
        id:"1",
        thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c1.png",
        name:"高考加油"
      },
      {
        addClick: false,
        num: 0,
        checked:false,
        id:"2",
        price: "90",
        thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c2.png",
        name:"你最棒"
      },
      {
        addClick: false,
        num: 0,
        checked:false,
        id:"3",
        price: "50",
        thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c3.png",
        name:"第一名是你"
      },
      {
        addClick: false,
        num: 0,
        checked:false,
        id:"4",
        price: "40",
        thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c4.png",
        name:"一起玩耍"
      },
      {
        addClick: false,
        num: 0,
        checked:false,
        id:"5",
        price: "20",
        thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c5.png",
        name:"酷爽一夏"
      },
      {
        addClick: false,
        num: 0,
        checked:false,
        id:"6",
        price: "30",
        thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c6.png",
        name:"放松一下"
      },
      {
        addClick: false,
        num: 0,
        checked:false,
        id:"7",
        price: "20",
        thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c7.png",
        name:"有你真好"
      },
      {
        addClick: false,
        num: 0,
        checked:false,
        id:"8",
        price: "40",
        thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c8.png",
        name:"生快"
      },
    ]
    
  },
  choosePic(e) {
    console.log("选择图片");
    const index = e.currentTarget.dataset.index;
    var detail = this.data.detail;
    for(let i = 0; i <= detail.length-1; i++){
      detail[i].checked=false;
    }
    console.log();
    // var Array = [1,2,3,4,5,6,7,8];
    detail[index].checked = true;
    // detail[Array].checked = false;
    let currentImg = detail[index].thumb;
    this.setData({
      detail,
      topImg: currentImg
    })
  },
  addGoods(e) {
    console.log("添加商品");
    const index = e.currentTarget.dataset.index;
    var detail = this.data.detail;
    detail[index].addClick = true;
    // let num = detail[index].num;
    // num++;
    // detail[index].num = num;
    detail[index].num += 1;
    // console.log(num);
    this.setData({
      detail
    });
    this.getTotalPrice();
    let total = this.data.totalPrice;
    if(total != 0) {
      this.setData({
        show: false,
      })
    }else{
      this.setData({
        show: true,
      })
    }
  },
  minusGoods(e) {
    console.log("减除商品");
    const index = e.currentTarget.dataset.index;
    var detail = this.data.detail;
    if(detail[index].num === 1) {
      detail[index].num = 0;
      detail[index].addClick = false;
    }else{
      detail[index].num --;
    }    
    this.setData({
      detail
    })
    this.getTotalPrice();
    let total = this.data.totalPrice;
    if(total != 0) {
      this.setData({
        show: false,
      })
    }else{
      this.setData({
        show: true,
      })
    }
  },
  getTotalPrice(e) {
    let total = 0;
    let detail = this.data.detail;
    for(let i = 0; i <= detail.length-1; i++){
      total += detail[i].num*detail[i].price;
    }
    this.setData({
      totalPrice: total.toFixed(2)
    })
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
    let total = this.data.totalPrice;
    this.setData({
      totalPrice: total.toFixed(2)
    })
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