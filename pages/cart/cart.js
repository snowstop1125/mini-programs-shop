// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[
      {
        shopId:1,
        shopName:'ST自营店',
        goodsList:[
          {
            goodsId:1,
            imgSrc:'https://img10.360buyimg.com/n4/jfs/t13489/335/1275538362/307228/f51bf629/5a1d2553N14cbdcd0.jpg',
            name:'BURBERRY 巴宝莉 女士The Banner系列深沙色格纹织物配皮中号手提单肩包 40291681',
            spec:'深沙色，中号',
            price:'9900.00',
            quantity:1,
            promotion:[
              {
                id:212,
                name:'满1000元减100元'
              },
              {
                id: 213,
                name: '满299元加69元可换购商品'
              }
            ]
          }
        ]
      }
    ]
  
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