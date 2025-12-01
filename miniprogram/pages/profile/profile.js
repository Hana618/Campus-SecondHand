// pages/profile/profile.js
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

  },

  // 跳转到订单中心
  navigateToOrderCenter: function() {
    wx.navigateTo({
      url: '/pages/orderCenter/orderCenter'
    });
  },

  // 编辑资料
  onEditProfile: function() {
    wx.showToast({
      title: '编辑资料功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  // 我的发布
  onMyPublish: function() {
    wx.showToast({
      title: '我的发布功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  // 我的已售
  onMySold: function() {
    wx.showToast({
      title: '我的已售功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  // 我的收藏
  onMyCollection: function() {
    wx.showToast({
      title: '我的收藏功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  // 我的消息
  onMyMessage: function() {
    wx.showToast({
      title: '我的消息功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  // 设置
  onSettings: function() {
    wx.showToast({
      title: '设置功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  // 联系客服
  onCustomerService: function() {
    wx.showToast({
      title: '联系客服功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  // 关于我们
  onAbout: function() {
    wx.showToast({
      title: '关于我们功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  // 退出登录
  onLogout: function() {
    wx.showModal({
      title: '退出登录',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '已退出登录',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  }
})