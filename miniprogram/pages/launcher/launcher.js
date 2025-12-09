// pages/launcher/launcher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 3 秒后自动跳转到登录页
    setTimeout(() => {
      wx.navigateTo({
        url: '../login/login'
      });
    }, 3000);
  },
  
 handleIconClick: function() {
  // 这里是点击图片后的逻辑
  console.log('Icon clicked');
  // 可以在这里添加跳转或其他逻辑
  wx.navigateTo({
    url: '../index/index.wxml' // 跳转到 index 页面
  });
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})