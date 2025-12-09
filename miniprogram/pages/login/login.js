// 登录页逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    code: '',
    codeBtnText: '获取验证码',
    countdown: 60,
    isCounting: false
  },

  // 手机号输入
  onPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  // 验证码输入
  onCodeInput(e) {
    this.setData({
      code: e.detail.value
    });
  },

  // 获取验证码
  getVerifyCode() {
    const { phone, isCounting } = this.data;
    
    if (isCounting) return;
    
    if (!phone) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      });
      return;
    }
    
    // 手机号正则验证
    const phoneReg = /^1[3-9]\d{9}$/;
    if (!phoneReg.test(phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return;
    }
    
    // 模拟发送验证码
    wx.showToast({
      title: '验证码已发送',
      icon: 'success'
    });
    
    // 开始倒计时
    this.setData({
      isCounting: true,
      codeBtnText: `${this.data.countdown}s后重新获取`
    });
    
    const timer = setInterval(() => {
      let countdown = this.data.countdown - 1;
      if (countdown <= 0) {
        clearInterval(timer);
        this.setData({
          isCounting: false,
          countdown: 60,
          codeBtnText: '获取验证码'
        });
      } else {
        this.setData({
          countdown: countdown,
          codeBtnText: `${countdown}s后重新获取`
        });
      }
    }, 1000);
  },

  // 手机号登录
  phoneLogin() {
    const { phone, code } = this.data;
    
    if (!phone || !code) {
      wx.showToast({
        title: '请输入手机号和验证码',
        icon: 'none'
      });
      return;
    }
    
    // 模拟登录验证
    wx.showLoading({
      title: '登录中...'
    });
    
    setTimeout(() => {
      wx.hideLoading();
      // 登录成功提示
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1500
      });
      // 延迟跳转到认证页
      setTimeout(() => {
        wx.navigateTo({
          url: '../auth/auth'
        });
      }, 1500);
    }, 1000);
  },

  // 微信登录
  wechatLogin(e) {
    // 获取用户信息
    const { userInfo } = e.detail;
    
    if (!userInfo) {
      wx.showToast({
        title: '请授权微信登录',
        icon: 'none'
      });
      return;
    }
    
    wx.showLoading({
      title: '微信登录中...'
    });
    
    // 模拟微信登录
    setTimeout(() => {
      wx.hideLoading();
      // 登录成功提示
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1500
      });
      // 延迟跳转到认证页
      setTimeout(() => {
        wx.navigateTo({
          url: '../auth/auth'
        });
      }, 1500);
    }, 1000);
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