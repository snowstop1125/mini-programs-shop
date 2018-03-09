var Util = require('../../utils/util.js');  
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperBannerImg:{
      'imgSrc':[
        'http://img1.helper-sys.com/images/18/09/e1b3a58653a83bc5e79744ea23494f1c2f20d452.png?1519968640#w',
        'http://img1.helper-sys.com/images/18/09/5d4de6d55a6d31dec9355161afec0955b49b6505.png?1519968664#w',
        'http://img1.helper-sys.com/images/18/09/a1fac40e6aaab4fc0cc2a41aebadf819dfa836cd.png?1519968671#w'
      ],
      'autoplay':true,
      'interval':3000,
      'duration':500,
      'indicatorDots':true,
      'circular':true,
      'imgheights': [],
      'current': 0,
    },
    
    nav:[
      {
        'navImg':'http://img0.helper-sys.com/images/17/32/3a212781b60f493a1706b567e8b754266db8f040.png?1502264082#h',
        'navTxt':'签到有礼',
        'navLink':''
      },
      {
        'navImg': 'http://img0.helper-sys.com/images/17/32/e514750da93eda2801940a7fdf15870b74570c6a.png?1502264095#h',
        'navTxt': '新人专享',
        'navLink': ''
      }, 
      {
        'navImg': 'http://img2.helper-sys.com/images/17/32/59f34c73d2c825ebb6386b9d38b9d6a1c16c58d5.png?1502264316#h',
        'navTxt': '超值特惠',
        'navLink': ''
      },
      {
        'navImg': 'http://img0.helper-sys.com/images/17/32/68e8095d91565b4ef8dddd9d9e70d2698a2fd850.png?1502264331#h',
        'navTxt': '团购广场',
        'navLink': ''
      },
      {
        'navImg': 'http://img0.helper-sys.com/images/17/32/a1addf9b2ba163edd8afccf1c7c492fd89eeb62a.png?1502264525#h',
        'navTxt': '商品分类',
        'navLink': ''
      },
      {
        'navImg': 'http://img1.helper-sys.com/images/17/32/6357525aeb2d4b03a3b0bbcc864f3d52e876357a.png?1502264558#h',
        'navTxt': '神奇好物',
        'navLink': ''
      },
      {
        'navImg': 'http://img2.helper-sys.com/images/17/32/59f34c73d2c825ebb6386b9d38b9d6a1c16c58d5.png?1502264316#h',
        'navTxt': '超值特惠',
        'navLink': ''
      },
      {
        'navImg': 'http://img0.helper-sys.com/images/17/32/68e8095d91565b4ef8dddd9d9e70d2698a2fd850.png?1502264331#h',
        'navTxt': '团购广场',
        'navLink': ''
      },
      {
        'navImg': 'http://img0.helper-sys.com/images/17/32/a1addf9b2ba163edd8afccf1c7c492fd89eeb62a.png?1502264525#h',
        'navTxt': '商品分类',
        'navLink': ''
      },
      {
        'navImg': 'http://img1.helper-sys.com/images/17/32/6357525aeb2d4b03a3b0bbcc864f3d52e876357a.png?1502264558#h',
        'navTxt': '神奇好物',
        'navLink': ''
      }
    ],
    adImg:{
      'imgLink':'',
      'imgSrc':'http://img0.helper-sys.com/images/18/09/59fc4df20b38ed27b73041bd91f9fe70222bf4f7.png?1519969472#w'
    },
    topLine:[
      {
        'link':'',
        'author':{
          'photoSrc':'https://img.alicdn.com/tfscom/i3/0/TB2wlvMchSYBuNjSsphXXbGvVXa_!!0-dgshop.jpg_180x180q90.jpg',
          'name':'搭配小能手'
        },
        'imgSrc':'https://img.alicdn.com/tfscom/i4/1893149177/TB2UBr1n26H8KJjSspmXXb2WXXa_!!1893149177.jpg_180x180xzq90.jpg',
        'detail':'新时代主妇，拒绝做黄脸婆！'
      }
    ]
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // swiper 高度自适应
  swiperImageLoad: function (e) {
    var imageSize = Util.imageUtil(e)
    var imageHeight = imageSize.imageHeight
    var imgheights = this.data.swiperBannerImg.imgheights
    
    imgheights[e.target.dataset.id] = imageHeight
    
    this.setData({
      'swiperBannerImg.imgheights': imgheights
    })  
  },
  swiperBindchange:function(e){
    var current = this.data.swiperBannerImg.current;
    this.setData({
      'swiperBannerImg.current': e.detail.current
    })  
  },
})
