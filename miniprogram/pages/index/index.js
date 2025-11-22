// index.js
// 首页逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 跳转到订单中心页面
   */
  goToOrderCenter: function() {
    wx.navigateTo({
      url: '/pages/orderCenter/orderCenter'
    });
  },

  /**
   * 跳转到商品详情页面
   */
  goToProductDetail: function() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    });
  }
});
