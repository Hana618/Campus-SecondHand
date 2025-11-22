// 订单中心页面逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0, // 当前选中的标签页
    orderStatus: ['全部', '待付款', '待发货', '待收货']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载时的初始化逻辑
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
   * 切换订单状态标签
   */
  switchTab: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeTab: index
    });
  },

  /**
   * 获取订单状态文本
   */
  getStatusText: function (status) {
    return this.data.orderStatus[status] || '';
  },

  /**
   * 跳转到订单详情页
   */
  goToOrderDetail: function (e) {
    const orderId = e.currentTarget.dataset.orderId || '1';
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail?orderId=' + orderId
    });
  },

  /**
   * 处理订单操作
   */
  handleOrderAction: function (e) {
    // 阻止冒泡，避免触发goToOrderDetail
    e.stopPropagation();
    const orderId = e.currentTarget.dataset.orderId || '1';
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail?orderId=' + orderId
    });
  },

  /**
   * 跳转到指定状态的订单页面
   */
  navigateToStatusPage: function (e) {
    const status = e.currentTarget.dataset.status;
    wx.navigateTo({
      url: '/pages/orderStatus/orderStatus?status=' + status
    });
  }
});