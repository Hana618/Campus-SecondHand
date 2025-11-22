// 订单详情页面逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取从上一个页面传递过来的订单ID
    if (options.orderId) {
      this.setData({
        orderId: options.orderId
      });
      console.log('加载订单详情，订单ID：', options.orderId);
    } else if (options.id) {
      // 兼容旧的参数名
      this.setData({
        orderId: options.id
      });
      console.log('加载订单详情，订单ID：', options.id);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面初次渲染完成时的逻辑
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 页面显示时的逻辑
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // 页面隐藏时的逻辑
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 页面卸载时的逻辑
  },

  /**
   * 取消订单
   */
  cancelOrder: function () {
    wx.showModal({
      title: '取消订单',
      content: '确定要取消该订单吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户确认取消订单');
          wx.showToast({
            title: '订单已取消',
            icon: 'success'
          });
          // 返回上一页
          setTimeout(function () {
            wx.navigateBack();
          }, 1500);
        }
      }
    });
  },

  /**
   * 支付订单
   */
  payOrder: function () {
    console.log('发起支付请求');
    wx.showToast({
      title: '支付功能暂未实现',
      icon: 'none'
    });
  }
});