// index.js
// 首页逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false, // 加载状态
    products: [], // 商品列表
    hasMore: true, // 是否有更多数据
    page: 1, // 当前页码
    limit: 10 // 每页数量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载时获取商品列表
    this.getProducts();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 页面显示时刷新数据
    this.setData({
      page: 1,
      products: [],
      hasMore: true
    });
    this.getProducts();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 下拉刷新时重置数据并重新获取
    this.setData({
      page: 1,
      products: [],
      hasMore: true
    });
    this.getProducts();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 上拉加载更多
    if (this.data.hasMore && !this.data.isLoading) {
      this.getProducts();
    }
  },

  /**
   * 获取商品列表
   */
  getProducts: function() {
    // 显示加载状态
    this.setData({
      isLoading: true
    });
    
    // 模拟网络请求
    setTimeout(() => {
      // 模拟数据
      const mockProducts = [
        {
          id: 1,
          title: '二手教材 - 高等数学（上册）',
          desc: '九成新，无笔记，适合大一新生',
          price: 45.00,
          publisher: '小明同学',
          image: '/images/others/default-goods-image.png'
        },
        {
          id: 2,
          title: '蓝牙耳机 - 几乎全新',
          desc: '品牌：小米，使用3个月，音质良好',
          price: 89.00,
          publisher: '科技爱好者',
          image: '/images/others/default-goods-image.png'
        },
        {
          id: 3,
          title: '篮球 - 斯伯丁',
          desc: '七成新，手感良好，适合日常练习',
          price: 60.00,
          publisher: '运动达人',
          image: '/images/others/default-goods-image.png'
        },
        {
          id: 4,
          title: '笔记本电脑 - 联想小新',
          desc: 'i5处理器，8G内存，256G固态，适合办公学习',
          price: 3200.00,
          publisher: '毕业生',
          image: '/images/others/default-goods-image.png'
        }
      ];
      
      // 更新数据
      this.setData({
        products: [...this.data.products, ...mockProducts],
        isLoading: false,
        page: this.data.page + 1,
        hasMore: this.data.page < 3 // 模拟只有3页数据
      });
    }, 1500);
  },

  /**
   * 跳转到搜索页面
   */
  goToSearch: function() {
    wx.navigateTo({
      url: '/pages/search/search'
    });
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
