// pages/dongtai/dongtai.js
var app = getApp()
Page({
  data: {
    newsList: [
      { name: "赛乐赛导游", img: "../../image/touxiang2.jpg", time: "6月21日 12：30" },
    ],
    newsLists: [
      { namea: "雪莲", img: "../../image/touxiang1.jpg", time: "6月20日 10：16" },
    ],
    pinglun:[
      {names:"31",imgss:"../../image/评论.png",},
      {names:"93",imgss:"../../image/点赞.png",}
    ],
    pingluna: [
      { namesa: "1", imgssa: "../../image/评论.png", },
      { namesa: "13", imgssa: "../../image/点赞.png", }
    ],
    markers: [{
      iconPath: "../../image/定位233.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
      
}],
polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../image/定位233.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
}
)