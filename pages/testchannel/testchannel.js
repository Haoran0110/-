//获取应用实例  
var app = getApp()

Page({
  data: {

    newsList: [
      { title: "赛乐赛导游", img: "../../image/小姐姐头像.png", intro: "创建人" }
    ],
    newsLists:[
      {titles:"78965",img:"../../image/小姐姐头像.png"}
    ],
    newsListt: [
      { titlet: "老李", img: "../../image/小姐姐头像.png" }
    ],
    newsListf: [
      { titlef: "小王", img: "../../image/小姐姐头像.png" }
    ],

    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,


/*上拉菜单部分*/
    actionSheetHidden: true,
    actionSheetItems: [
      { bindtap: 'Menu1', txt: '菜单1' },
      { bindtap: 'Menu2', txt: '菜单2' },
      { bindtap: 'Menu3', txt: '菜单3' }
    ],
    menu: ''

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

  /*上拉菜单部分*/
  actionSheetTap: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetbindchange: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu1: function () {
    this.setData({
      menu: 1,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu2: function () {
    this.setData({
      menu: 2,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu3: function () {
    this.setData({
      menu: 3,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  }

  
})  

