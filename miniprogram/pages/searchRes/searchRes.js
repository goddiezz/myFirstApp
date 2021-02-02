// pages/searchRes/searchRes.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    musiclist: [],
    listInfo: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'music',
      data: {
        keywords: options.keywords,
        $url: 'searchRes'
      }
    }).then((res) => {
      console.log(res)
      console.log(res.result)
      console.log(res.result.result)
      const key = res.result.result
      console.log(key)
      this.setData({
        musiclist: key.songs,
        listInfo: {
          coverImgUrl: key.songs.coverImgUrl,
          name: key.songs.name,
        }
      })
      console.log(musiclist)
    })
    this._setSearchRes()
    wx.hideLoading()
  },
  _setSearchRes() {
    wx.setStorageSync('musiclist', this.data.musiclist)
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