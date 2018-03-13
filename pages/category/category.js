// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category_act:'0',
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
                'cat_img':''
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
    console.log(e)
  },
  changeCategoryLv1:function(e){
    console.log(e.target.offsetTop)
    this.setData({
      category_act: e.target.dataset.id
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