// pages/publish/publish.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    images: [], // 商品图片列表
    categories: ['教材', '数码', '服饰', '运动', '配件', '游戏', '家居', '其他'], // 商品分类
    categoryIndex: 0, // 当前选中的分类索引
    campuses: ['主校区', '东校区', '西校区', '南校区', '北校区'], // 校区列表
    campusIndex: 0, // 当前选中的校区索引
    conditions: ['全新', '九成新', '八成新', '七成新', '六成新', '五成新', '五成新以下'], // 商品成色
    conditionIndex: 0, // 当前选中的成色索引
    descriptionLength: 0 // 商品描述字数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
   * 发布商品
   */
  onPublish: function() {
    // 这里可以添加表单验证逻辑
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000,
      success: () => {
        // 发布成功后跳转到首页
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/index/index'
          });
        }, 2000);
      }
    });
  },

  /**
   * 上传图片
   */
  onUploadImage: function() {
    if (this.data.images.length >= 9) {
      wx.showToast({
        title: '最多可上传9张图片',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    wx.chooseMedia({
      count: 9 - this.data.images.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFiles = res.tempFiles;
        const newImages = tempFiles.map(file => file.tempFilePath);
        this.setData({
          images: [...this.data.images, ...newImages]
        });
      }
    });
  },

  /**
   * 删除图片
   */
  onDeleteImage: function(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.images;
    images.splice(index, 1);
    this.setData({
      images: images
    });
  },

  /**
   * 分类选择变化
   */
  onCategoryChange: function(e) {
    this.setData({
      categoryIndex: e.detail.value
    });
  },

  /**
   * 校区选择变化
   */
  onCampusChange: function(e) {
    this.setData({
      campusIndex: e.detail.value
    });
  },

  /**
   * 商品成色选择
   */
  onConditionChange: function(e) {
    this.setData({
      conditionIndex: e.currentTarget.dataset.index
    });
  },

  /**
   * 表单提交
   */
  onSubmit: function(e) {
    const formData = e.detail.value;
    console.log('表单数据：', formData);
    // 这里可以添加表单提交逻辑
  },

  /**
   * 商品描述输入监听
   */
  onDescriptionInput: function(e) {
    const value = e.detail.value;
    this.setData({
      descriptionLength: value.length
    });
  }
})
