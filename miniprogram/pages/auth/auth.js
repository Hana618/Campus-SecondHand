// 认证页逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    className: '',
    studentId: ''
  },

  // 姓名输入
  onNameInput(e) {
    this.setData({
      name: e.detail.value
    });
  },

  // 班级输入
  onClassInput(e) {
    this.setData({
      className: e.detail.value
    });
  },

  // 学号输入
  onStudentIdInput(e) {
    this.setData({
      studentId: e.detail.value
    });
  },

  // 提交认证信息
  submitAuth() {
    const { name, className, studentId } = this.data;
    
    if (!name || !className || !studentId) {
      wx.showToast({
        title: '请填写完整的认证信息',
        icon: 'none'
      });
      return;
    }
    
    wx.showLoading({
      title: '认证中...'
    });
    
    // 模拟认证提交
    setTimeout(() => {
      wx.hideLoading();
      
      // 保存认证信息到本地存储
      wx.setStorageSync('userAuth', {
        name,
        className,
        studentId,
        isAuth: true
      });
      
      wx.showToast({
        title: '认证成功',
        icon: 'success'
      });
      
      // 认证成功后跳转到首页
      setTimeout(() => {
        wx.switchTab({
          url: '../index/index'
        });
      }, 1500);
    }, 1500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
});