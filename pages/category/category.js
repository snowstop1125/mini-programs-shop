// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category_act:'hot',
    hotRecommend:[
      {
        'cat_name':'热门搜索',
        'cat_lv3':[
          {
            'cat_name': '手机',
            'cat_img': 'https://img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg'
          }, {
            'cat_name': '充电宝',
            'cat_img': 'https://img20.360buyimg.com/focus/jfs/t14347/287/292388718/1284/559f03ee/5a2f98d5Ncfcef53e.jpg'
          }, {
            'cat_name': '耳机',
            'cat_img': 'https://img30.360buyimg.com/focus/jfs/t19282/66/487901773/1169/9ea7cd58/5a7d5834N72dddd3b.jpg'
          },{
            'cat_name': '剃须刀',
            'cat_img': 'https://img20.360buyimg.com/focus/jfs/t12010/69/2478214759/5881/9d96908e/5a7d596fN9c7bf5f0.jpg'
          }
        ]
      }, {
        'cat_name': '女士热搜',
        'cat_lv3': [
          {
            'cat_name': '手机',
            'cat_img': 'https://img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg'
          }, {
            'cat_name': '充电宝',
            'cat_img': 'https://img20.360buyimg.com/focus/jfs/t14347/287/292388718/1284/559f03ee/5a2f98d5Ncfcef53e.jpg'
          }, {
            'cat_name': '耳机',
            'cat_img': 'https://img30.360buyimg.com/focus/jfs/t19282/66/487901773/1169/9ea7cd58/5a7d5834N72dddd3b.jpg'
          }, {
            'cat_name': '剃须刀',
            'cat_img': 'https://img20.360buyimg.com/focus/jfs/t12010/69/2478214759/5881/9d96908e/5a7d596fN9c7bf5f0.jpg'
          }
        ]
      }
    ],
    categoryList: [
      {
        'cat_id':'1',
        'cat_name':'手机数码',
        'cat_lv2':[
          {
            'cat_id':'11',
            'cat_name':'大牌手机',
            'cat_lv3':[
              {
                'cat_id':'111',
                'cat_name':'Apple',
                'cat_img':'https://img20.360buyimg.com/focus/jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg'
              }
            ]
          },
          {
            'cat_id': '12',
            'cat_name': '手机配件',
            'cat_lv3': [
              {
                'cat_id': '122',
                'cat_name': '蓝牙耳机',
                'cat_img': ''
              }
            ]
          }
        ]
      },
      {
        'cat_id': '2',
        'cat_name': '女装内衣',
        'cat_lv2': [
          {
            'cat_id': '21',
            'cat_name': '裙子',
            'cat_lv3': [
              {
                'cat_id': '211',
                'cat_name': '连衣裙',
                'cat_img': ''
              }
            ]
          }, {
            'cat_id': '22',
            'cat_name': '裙子',
            'cat_lv3': [
              {
                'cat_id': '221',
                'cat_name': '连衣裙',
                'cat_img': ''
              }
            ]
          }
        ]
      },
      {
        'cat_id': '3',
        'cat_name': '男装内衣',
        'cat_lv2': []
      },
      {
        'cat_id': '4',
        'cat_name': '家用电器',
        'cat_lv2': []
      },
      {
        'cat_id': '5',
        'cat_name': '鞋靴箱包',
        'cat_lv2': []
      },
      {
        'cat_id': '6',
        'cat_name': '运动户外',
        'cat_lv2': []
      },
      {
        'cat_id': '7',
        'cat_name': '电脑办公',
        'cat_lv2': []
      },
      {
        'cat_id': '8',
        'cat_name': '个护化妆',
        'cat_lv2': []
      },
      {
        'cat_id': '9',
        'cat_name': '家具建材',
        'cat_lv2': []
      },
      {
        'cat_id': '10',
        'cat_name': '家居家纺',
        'cat_lv2': []
      },
      {
        'cat_id': '11',
        'cat_name': '母婴童装',
        'cat_lv2': []
      },
      {
        'cat_id': '12',
        'cat_name': '生活美食',
        'cat_lv2': []
      },
      {
        'cat_id': '13',
        'cat_name': '酒水饮料',
        'cat_lv2': []
      },
      {
        'cat_id': '14',
        'cat_name': '汽车用品',
        'cat_lv2': []
      },
      {
        'cat_id': '15',
        'cat_name': '医药保健',
        'cat_lv2': []
      }
    ],
  },
  toSearchPage:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  catScroll:function(e){
    // console.log(e)
  },
  changeCategoryLv1:function(e){
    console.log(e.target.offsetTop)
    
    this.setData({
      category_act: e.target.dataset.id
    })
    console.log(this.data.category_act)
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