// pages/detail/detail.js
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
   * 收藏商品
   */
  onCollect: function() {
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 2000
    });
  },

  /**
   * 分享商品
   */
  onShare: function() {
    // 分享功能由微信自带的分享机制处理
    return {
      title: '二手教材 - 高等数学（上册）',
      path: '/pages/detail/detail',
      imageUrl: '/images/others/default-goods-image.png'
    };
  },

  /**
   * 立即购买
   */
  onBuy: function() {
    wx.showToast({
      title: '购买功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  /**
   * 加入购物车
   */
  onAddCart: function() {
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 2000
    });
  }
})