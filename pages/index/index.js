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
      'imgLink':'index',
      'imgSrc':'http://img0.helper-sys.com/images/18/09/59fc4df20b38ed27b73041bd91f9fe70222bf4f7.png?1519969472#w'
    },
    topLine:[
      {
        'link':'index',
        'author':{
          'photoSrc':'https://img.alicdn.com/tfscom/i3/0/TB2wlvMchSYBuNjSsphXXbGvVXa_!!0-dgshop.jpg_180x180q90.jpg',
          'name':'护肤技巧'
        },
        'imgSrc':'https://img.alicdn.com/imgextra/i3/6000000004058/TB2JJ7pcCBYBeNjy0FeXXbnmFXa_!!0-tbCommonAudio.jpg_180x180q90.jpg',
        'detail':'新时代主妇，拒绝做黄脸婆！'
      },
      {
        'link': 'index',
        'author': {
          'photoSrc': 'http://img.zcool.cn/community/01285b58c3abd1a801219c77945457.png@1280w_1l_2o_100sh.webp',
          'name': '美食诱惑'
        },
        'imgSrc': 'https://img.alicdn.com/tps/i3/0/TB29hatXKOSBuNjy0FdXXbDnVXa_!!0-juitemmedia.jpg_180x180q90.jpg',
        'detail': '好鸡蛋源于好环境，自然的橘园放养,自由的环境产蛋!好鸡蛋不怕被细瞧'
      },
      {
        'link': 'index',
        'author': {
          'photoSrc': 'https://img.alicdn.com/tfscom/i4/1893149177/TB2UBr1n26H8KJjSspmXXb2WXXa_!!1893149177.jpg_180x180xzq90.jpg',
          'name': '轻奢生活'
        },
        'imgSrc': 'https://img.alicdn.com/bao/uploaded/i3/830018162/TB2gTA1e3nH8KJjSspcXXb3QFXa_!!830018162.jpg_180x180q90.jpg',
        'detail': '11 个轻奢品牌大盘点，哪个最值得买？'
      }
    ],
    goDiscountHqg: {
      'morelink':'index',
      'endTime':'1520848040',
      'clock':{
        'hours':'00',
        'minutes':'00',
        'seconds':'00'
      },
      'goods':[
        {
          'link': 'index',
          'imgSrc': 'http://img2.helper-sys.com/image/23c0ed0b86e81bcda8b2d42640ff6cb428f02277.jpg?1468215134#h',
          'name': 'Bose 博士 QuietComfort 35/QC35 头戴式无线蓝牙消噪耳机 银色',
          'price':'2199.00',
          'costPrice':'2599.00'
        },
        {
          'link': 'index',
          'imgSrc': 'http://img1.helper-sys.com/images/17/45/8488b67e130aa24e9de9c98b75c869b0b32b2c48.jpg?1510129110#h',
          'name': 'Ralph Lauren 拉夫劳伦 Wool Menswear Muffler 羊毛围巾 多色可选',
          'price': '172.00',
          'costPrice': '198.00'
        },
        {
          'link': 'index',
          'imgSrc': 'http://img0.helper-sys.com/images/17/37/3c5d0d40af18086c03d796f6e4aec904c91ff230.jpg?1505373060#h',
          'name': 'Zatchels 猫头鹰水桶包/单肩包/斜挎包 英国工匠手工制作',
          'price': '393.00',
          'costPrice': '655.00'
        },
        {
          'link': 'index',
          'imgSrc': 'http://img0.helper-sys.com/images/17/49/10928f228f8a124dd9998a11567fac4a5e9460a5.jpg?1512355959#h',
          'name': 'TOM FORD 汤姆福特 Lips & Boys 黑金黑管唇膏/口红 2g 多色可选',
          'price': '216.00',
          'costPrice': '339.00'
        },
        {
          'link': 'index',
          'imgSrc': 'http://img2.helper-sys.com/images/18/10/97ee0b55518f378edda7312d467da480de3e47ef.jpg?1520243669#h',
          'name': 'Swarovski 施华洛世奇 HOLLOW 幸运滚珠项链 多色可选',
          'price': '599.00',
          'costPrice': '1198.00'
        }
      ]
    },
    goDiscountOpt:[
      {
        'title':'品牌特卖',
        'subtitle':'每满300减100',
        'imgSrc':'https://m.360buyimg.com/mobilecms/s176x176_jfs/t8848/335/497999876/24107/7e58c46/59a924e5N831e0141.jpg!q70.jpg',
        'link':'index'
      },
      {
        'title': '玩3C',
        'subtitle': '领券最高减1000',
        'imgSrc': 'https://m.360buyimg.com/mobilecms/s142x142_jfs/t19144/287/350032203/12794/f9bddb74/5a6ef6a4Nc6c37bf2.jpg!q70.jpg',
        'link': 'index'
      }
    ],
    goQualityOpt:{
      'optional3':{
        'title':'新品发布',
        'subtitle':'格力变频空调 火爆开售',
        'link':'index',
        'imgArr':[
          'https://m.360buyimg.com/n12/jfs/t10042/337/2660027641/78633/d97f3e2c/59fa733dN86745b06.jpg!q70.jpg',
          'https://m.360buyimg.com/img/s307x307_jfs/t14380/320/1115058386/70159/bbf9f9e/5a44bac5N40fe8154.jpg',
          'https://m.360buyimg.com/img/s307x307_jfs/t8455/293/1381797219/142414/48b1ae34/59b8ddebN137f4762.jpg'
        ]
      },
      'optional1':{
        'link':'index',
        'title':'全球购',
        'subtitle':'爆款直降',
        'imgSrc':'https://m.360buyimg.com/n1/s176x176_jfs/t14398/281/1003456109/468475/47d67fc0/5a40bc04N11d15e7d.jpg'
      },
      'optional2': [
        {
          'title': '美食',
          'subtitle': '进口美味零食',
          'link': 'index',
          'imgArr': [
            'https://m.360buyimg.com/mobilecms/s240x240_jfs/t14473/103/2042876100/41836/766c1953/5a697f47Nc952ed7f.jpg',
            'https://m.360buyimg.com/mobilecms/s142x142_jfs/t19558/229/346712633/87395/5d5976a4/5a6ec808N222666d3.jpg'
          ]
        },
        {
          'title': '热卖女装',
          'subtitle': '潮流设计精选',
          'link': 'index',
          'imgArr': [
            'https://m.360buyimg.com/mobilecms/s142x142_jfs/t18271/343/357496940/68646/2f930853/5a6ee1a5N755adea1.jpg',
            'https://img10.360buyimg.com/focus/jfs/t16375/270/2298165642/4388/99ff4997/5a9fb689Nc0bd43f4.jpg'
          ]
        },
        {
          'title': '宠物用品',
          'subtitle': '萌宠high起来！',
          'link': 'index',
          'imgArr': [
            'https://m.360buyimg.com/mobilecms/s142x142_jfs/t8404/285/1199771170/23383/18e00936/59b65491Neb8d8d44.jpg',
            'https://m.360buyimg.com/babel/s330x330_jfs/t14932/345/544114554/161785/9c5ef7a5/5a30a64fN4985a83e.jpg'
          ]
        },{
          'title': '电脑办公',
          'subtitle': '满减狂欢',
          'link': 'index',
          'imgArr': [
            'https://m.360buyimg.com/mobilecms/s142x142_jfs/t18976/18/704020019/79995/36a15b0c/5aa15c29Nedf85a2a.png',
            'https://m.360buyimg.com/babel/s390x390_jfs/t3268/132/227094941/162137/a1ffa50f/57abe0a0Ne962f9b2.jpg'
          ]
        }
       
      ],
    }
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

    var that=this;
    var leftTimer=setInterval(function () {
      var endTime = that.data.goDiscountHqg.endTime;
      var Countdown = Util.countdown(endTime);
      that.setData({
        'goDiscountHqg.clock.hours': Countdown.hours,
        'goDiscountHqg.clock.minutes': Countdown.minutes,
        'goDiscountHqg.clock.seconds': Countdown.seconds
      })
      
    }, 1000)
    
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
