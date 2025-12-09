// 出物发布页面逻辑
Page({
  /**
   * 页面的初始数据
   */
  data: {
    images: [], // 商品图片列表
    title: '', // 商品标题
    price: '', // 商品价格
    description: '', // 商品描述
    campusList: ['新校区', '老校区'], // 校区列表
    campusIndex: 0, // 选中的校区索引
    location: '', // 交易地点
    contactOptions: [ // 联系方式选项
      { label: '微信号', value: 'wechat' },
      { label: 'QQ号', value: 'qq' },
      { label: '手机号', value: 'phone' }
    ],
    contactType: 'wechat', // 选中的联系方式类型
    contactValue: '' // 联系方式值
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
   * 选择图片
   */
  chooseImage: function() {
    const that = this;
    const maxCount = 9 - that.data.images.length;
    
    wx.chooseMedia({
      count: maxCount,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success: function(res) {
        const tempFilePaths = res.tempFiles.map(file => file.tempFilePath);
        const newImages = that.data.images.concat(tempFilePaths);
        that.setData({
          images: newImages
        });
      }
    });
  },

  /**
   * 删除图片
   */
  deleteImage: function(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.images;
    images.splice(index, 1);
    this.setData({
      images: images
    });
  },

  /**
   * 标题输入
   */
  onTitleInput: function(e) {
    this.setData({
      title: e.detail.value
    });
  },

  /**
   * 价格输入
   */
  onPriceInput: function(e) {
    this.setData({
      price: e.detail.value
    });
  },

  /**
   * 描述输入
   */
  onDescriptionInput: function(e) {
    this.setData({
      description: e.detail.value
    });
  },

  /**
   * 校区选择
   */
  onCampusChange: function(e) {
    this.setData({
      campusIndex: e.detail.value
    });
  },

  /**
   * 获取定位
   */
  getLocation: function() {
    const that = this;
    
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        
        // 调用逆地理编码API获取具体地址
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/',
          data: {
            location: `${latitude},${longitude}`,
            key: 'YOUR_TENCENT_MAP_KEY' // 这里需要替换为腾讯地图API Key
          },
          success: function(res) {
            if (res.data.status === 0) {
              const address = res.data.result.address;
              that.setData({
                location: address
              });
            } else {
              wx.showToast({
                title: '获取地址失败',
                icon: 'none'
              });
            }
          },
          fail: function() {
            wx.showToast({
              title: '获取地址失败',
              icon: 'none'
            });
          }
        });
      },
      fail: function() {
        wx.showToast({
          title: '获取定位失败，请检查权限设置',
          icon: 'none'
        });
      }
    });
  },

  /**
   * 交易地点输入
   */
  onLocationInput: function(e) {
    this.setData({
      location: e.detail.value
    });
  },

  /**
   * 联系方式类型选择
   */
  onContactTypeChange: function(e) {
    const index = e.currentTarget.dataset.index;
    const contactType = this.data.contactOptions[index].value;
    this.setData({
      contactType: contactType
    });
  },

  /**
   * 联系方式输入
   */
  onContactInput: function(e) {
    this.setData({
      contactValue: e.detail.value
    });
  },

  /**
   * 表单验证
   */
  validateForm: function() {
    const { images, title, price, description, location, contactType, contactValue } = this.data;
    
    if (images.length === 0) {
      wx.showToast({
        title: '请至少上传一张商品图片',
        icon: 'none'
      });
      return false;
    }
    
    if (!title.trim()) {
      wx.showToast({
        title: '请输入商品标题',
        icon: 'none'
      });
      return false;
    }
    
    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      wx.showToast({
        title: '请输入有效的商品价格',
        icon: 'none'
      });
      return false;
    }
    
    if (!description.trim()) {
      wx.showToast({
        title: '请输入商品描述',
        icon: 'none'
      });
      return false;
    }
    
    if (!location.trim()) {
      wx.showToast({
        title: '请选择或输入交易地点',
        icon: 'none'
      });
      return false;
    }
    
    if (!contactValue.trim()) {
      wx.showToast({
        title: '请输入联系方式',
        icon: 'none'
      });
      return false;
    }
    
    return true;
  },

  /**
   * 提交表单
   */
  onSubmit: function() {
    if (!this.validateForm()) {
      return;
    }
    
    // 显示加载提示
    wx.showLoading({
      title: '发布中...',
      mask: true
    });
    
    // 模拟表单提交
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '发布成功',
        icon: 'success'
      });
      
      // 跳转到首页
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/index/index'
        });
      }, 1500);
    }, 1500);
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
