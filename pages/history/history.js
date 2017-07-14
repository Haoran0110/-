// pages/history/history.js 
//获取应用实例  
//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    newsList: [
      {
        "title": "测试频道",
        "intro": "6条消息",
        "img": "../../image/测试频道.png"
      },
      {
        "title": "地理频道",
        "intro": "10条消息",
        "img": "../../image/地理频道.png"
      },
      {
        "title": "启航旅游团",
        "intro": "88条消息",
        "img": "../../image/启航旅游团.png"
      }
    ],
    newsLists:[
      {
        "titles": "赛乐赛导游",
        "intros": "6条消息",
        "imgss": "../../image/用户1.png"
      },
      {
      "titles": "天翼周哥",
      "intros": "13条消息",
      "imgss": "../../image/用户1.png"
      },
      {
        "titles": "然然导游",
        "intros": "99条消息",
        "imgss": "../../image/用户1.png"
      },
      {
        "titles": "阳哥",
        "intros": "63条消息",
        "imgss": "../../image/用户1.png"
      },
      {
        "titles": "小巨鳄导游",
        "intros": "70条消息",
        "imgss": "../../image/用户1.png"
      }

    ],
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

})  