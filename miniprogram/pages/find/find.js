// pages/search/search.js
// const keywords = ''
// const key = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keywords: '',
    // key:''
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  getKeywords: function(e) {
    // const keywords = e.detail.value.keywords
    // console.log(e.detail.value)
    // this.setData({
    //   keywords: e.id
    // })
    // console.log(e.id)
    wx.navigateTo({
      url: `../searchRes/searchRes?keywords=`+e.detail.value.keywords,
    })
    // wx.request({
    //   url: '../searchRes/searchRes',
    //   method: 'post',
    //   data: {
    //     keywords: this.data
    //   },
    // })
    // console.log({key})


  },
  onLoad: function (options) {
    
  },
  
  goToSearchRes: function() {
    // console.log({keywords})
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