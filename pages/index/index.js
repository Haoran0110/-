//index.js  
//获取应用实例  
var app = getApp()

Page({
  data: {
    open:false,
      newsList: [
        { title: "测试频道", img: "../../image/测试频道.png", intro: "系统" },
        { title: "地理频道", img: "../../image/地理频道.png", intro: "系统" },
        { title: "启航旅游团", img: "../../image/启航旅游团.png", intro: "赛乐赛导游" }
      ],
      newsLists: [
        { titles: "赛乐赛导游", imgss: "../../image/会话.png", intros: "来自“启航旅游团”" },
        ],
    
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  } 
})  




