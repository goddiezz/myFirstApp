// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
  },
  onTapQrCode() {
    wx.showLoading({
      title: '生成中',
    })
    //调用云函数生成小程序吗
    wx.cloud.callFunction({
      name: 'getQrCode'
    }).then((res) => {
      console.log(res)
      const fileId = res. result
      //预览小程序吗图片
      wx.previewImage({
        urls: [fileId],
        current: fileId
      })
      wx.hideLoading()
    })
  },

})