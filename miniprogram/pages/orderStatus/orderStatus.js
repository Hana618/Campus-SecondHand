// 订单状态分类页面逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    status: 0, // 默认状态
    pageTitle: '全部订单',
    statusText: '待付款',
    actionButtonText: '去付款'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.status !== undefined) {
      const status = parseInt(options.status);
      this.setData({
        status: status
      });
      
      // 根据状态设置页面标题和按钮文本
      this.updatePageInfoByStatus(status);
      
      console.log('加载订单状态页面，状态：', status);
    }
  },

  /**
   * 根据订单状态更新页面信息
   */
  updatePageInfoByStatus: function(status) {
    let pageTitle = '全部订单';
    let statusText = '待付款';
    let actionButtonText = '去付款';
    
    switch (status) {
      case 1:
        pageTitle = '待付款';
        statusText = '待付款';
        actionButtonText = '去付款';
        break;
      case 2:
        pageTitle = '待发货';
        statusText = '待发货';
        actionButtonText = '提醒发货';
        break;
      case 3:
        pageTitle = '待收货';
        statusText = '待收货';
        actionButtonText = '确认收货';
        break;
      default:
        pageTitle = '全部订单';
        statusText = '待付款';
        actionButtonText = '去付款';
    }
    
    this.setData({
      pageTitle: pageTitle,
      statusText: statusText,
      actionButtonText: actionButtonText
    });
  },

  /**
   * 跳转到订单详情页
   */
  goToOrderDetail: function(e) {
    const orderId = e.currentTarget.dataset.orderId;
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail?orderId=' + orderId
    });
  },

  /**
   * 处理订单操作
   */
  handleOrderAction: function(e) {
    // 阻止事件冒泡，避免触发goToOrderDetail
    e.stopPropagation();
    
    const orderId = e.currentTarget.dataset.orderId;
    const status = this.data.status;
    
    console.log('处理订单操作，订单ID：', orderId, '状态：', status);
    
    // 根据不同状态执行不同操作
    switch (status) {
      case 1: // 待付款
        this.goToPay(orderId);
        break;
      case 2: // 待发货
        this.remindShipping(orderId);
        break;
      case 3: // 待收货
        this.confirmReceipt(orderId);
        break;
      default:
        // 默认跳转到订单详情
        this.goToOrderDetail(e.currentTarget);
    }
  },

  /**
   * 去支付
   */
  goToPay: function(orderId) {
    wx.showToast({
      title: '跳转到支付页面',
      icon: 'none'
    });
  },

  /**
   * 提醒发货
   */
  remindShipping: function(orderId) {
    wx.showToast({
      title: '已提醒卖家发货',
      icon: 'success'
    });
  },

  /**
   * 确认收货
   */
  confirmReceipt: function(orderId) {
    wx.showModal({
      title: '确认收货',
      content: '确认已收到商品吗？',
      success: (res) => {
        if (res.confirm) {
          console.log('用户确认收货，订单ID：', orderId);
          wx.showToast({
            title: '收货成功',
            icon: 'success'
          });
        }
      }
    });
  }
});