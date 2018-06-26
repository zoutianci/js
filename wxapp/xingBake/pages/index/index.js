//index.js
//获取应用实例
const app = getApp()

Page({
  data: {    
      
      cate:"",
      detail:[
        {
          id:"1",
          thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c1.png",
          name:"高考加油"
        },
        {
          id:"2",
          thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c2.png",
          name:"你最棒"
        },
        {
          id:"3",
          thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c3.png",
          name:"第一名是你"
        },
        {
          id:"4",
          thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c4.png",
          name:"一起玩耍"
        },
        {
          id:"5",
          thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c5.png",
          name:"酷爽一夏"
        },
        {
          id:"6",
          thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c6.png",
          name:"放松一下"
        },
        {
          id:"7",
          thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c7.png",
          name:"有你真好"
        },
        {
          id:"8",
          thumb:"https://raw.githubusercontent.com/zoutianci/js/master/wxapp/xingBake/images/c8.png",
          name:"生快"
        },
      ]    
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
   
  },
  getUserInfo: function(e) {

  }
})
