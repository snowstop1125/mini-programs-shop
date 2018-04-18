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
              }
            ]
          }
        ]
      },
      {
        shopId: 2,
        shopName: '云端商城',
        goodsList: [
          {
            goodsId: 1,
            imgSrc: 'https://m.360buyimg.com/n12/jfs/t17077/140/875325987/348157/3baf2019/5aaf8305N25ff25b6.jpg!q70.jpg',
            name: '烟花烫2018春夏新款绣花复古花边淑女收腰中长修身连衣裙',
            spec: '云诗,紫色,XL',
            price: '228.00',
            quantity: 1,
            promotion: [
              {
                id: 212,
                name: '满1000元减100元'
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
    var cartList = this.data.cartList;
    var promotion_arr=[];

    for (var i = 0; i < cartList.length;i++){
      var goodsList = cartList[i].goodsList;
      for (var j = 0; j < goodsList.length;j++){
        var promotion = goodsList[j].promotion;
        var json={}
        for (var k = 0; k < promotion.length;k++){
          var key = promotion[k].id
          if (json[key]) {
            json[key]++;
          } else {
            json[key] = 1;
          }
          console.log(json)
        }
      }

    }
  },

  plusbtn: function(e){
    var shopidx = e.currentTarget.dataset.sidx;
    var goodsidx = e.currentTarget.dataset.gidx;

    var quantity = this.data.cartList[shopidx].goodsList[goodsidx].quantity;
    
    // var count = this.data.cartList[shopidx].goodsList[goodsidx].quantity;
    // count++;
    // console.log(count)
    
    this.setData({
      quantity: quantity++
    })
    console.log(quantity)
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