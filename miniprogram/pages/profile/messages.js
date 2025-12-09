// 消息列表页面逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    messages: [ // 消息列表
      { id: 1, goodsName: '二手教材 - 高等数学（上册）', time: '2024-05-15 10:30', content: '这个教材还在吗？', isRead: false },
      { id: 2, goodsName: '二手手机 - iPhone 12', time: '2024-05-14 15:20', content: '可以便宜一点吗？', isRead: true },
      { id: 3, goodsName: '二手笔记本电脑', time: '2024-05-13 09:45', content: '请问配置怎么样？', isRead: false }
    ]
  },

  /**
   * 返回上一页
   */
  onBack: function() {
    wx.navigateBack({
      delta: 1
    });
  },

  /**
   * 点击消息项
   */
  onMessageTap: function(e) {
    const id = e.currentTarget.dataset.id;
    const goodsId = e.currentTarget.dataset.goodsId;
    
    // 更新消息为已读
    const messages = this.data.messages;
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id === id) {
        messages[i].isRead = true;
        break;
      }
    }
    
    this.setData({
      messages: messages
    });
    
    // 跳转到商品详情页
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + goodsId
    });
  },

  /**
   * 清空所有消息
   */
  onClearAll: function() {
    const that = this;
    
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有消息吗？',
      success: function(res) {
        if (res.confirm) {
          that.setData({
            messages: []
          });
          
          wx.showToast({
            title: '消息已清空',
            icon: 'success'
          });
        }
      }
    });
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
