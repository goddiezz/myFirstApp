// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
      url: 'http://p1.music.126.net/nVUH7O5ZNMG1OQ1kE-tq9g==/109951165665595417.jpg?imageView&quality=89' ,
    },
    {
      url: 'http://p1.music.126.net/SLfispSeeEnb6Ezs0cNjBw==/109951165666128356.jpg?imageView&quality=89' ,
    },
    {
      url: 'http://p1.music.126.net/q5rKcBx9Y0V37DsUSaQKXg==/109951165664695730.jpg?imageView&quality=89',
    },
    {
      url: 'http://p1.music.126.net/WOoIZuva_umxxzYOvWINLA==/109951165664707565.jpg?imageView&quality=89',
    },
    {
      url: 'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89',
    },
    {
      url: 'http://p1.music.126.net/UdSM2BmqY_h_t9HAOzb5dQ==/109951165664710664.jpg?imageView&quality=89',
    },
    {
      url: 'http://p1.music.126.net/Z90NF2dHuBYrV6x-U9jJJQ==/109951165664719544.jpg?imageView&quality=89',
    },
    {
      url: 'http://p1.music.126.net/vAjwukVm-H0LOqzy4FTJXA==/109951165664851877.jpg?imageView&quality=89',
    },
    {
      url: 'http://p1.music.126.net/j0gp3gBDRRoqIXxAs0v7oA==/109951165664720877.jpg?imageView&quality=89',
    },
    {
      url: 'http://p1.music.126.net/9Ayx-EeCnuLRWKTcIhGB6g==/109951165664742856.jpg?imageView&quality=89',
    },
    ],
    playlist: [],
    //   {
    //   "id": "1001",
    //   "playCount": 11111,
    //   "name": "Pitchfork评选70年代最佳200首歌曲",
    //   "picUrl": "http://p2.music.126.net/CObKLNue7cWdPMfbVsiOzA==/109951165666370374.jpg?param=140y140",
    // },
    // {
    //   "id": "1002",
    //   "playCount": 213131,
    //   "name": "你一定要在自己热爱的世界里闪闪发亮啊",
    //   "picUrl": "http://p2.music.126.net/uesfHcJmZ23S3er_1mpeaw==/109951165621856219.jpg?param=140y140",
    // },
    // {
    //   "id": "1003",
    //   "playCount": 4974129,
    //   "name": "我试着把孤独藏进耳机",
    //   "picUrl": "http://p2.music.126.net/Xvo6PwBcdOA69ipcpV9YYg==/109951165463253777.jpg?param=140y140",
    // },
    // {
    //   "id": "1004",
    //   "playCount": 3600175,
    //   "name": "人生还很长，听首歌偷个懒吧",
    //   "picUrl": "https://p1.music.126.net/8Wesf3jEdH92Vv9XyypEJA==/109951165167432609.jpg?param=140y140",
    // },
    // {
    //   "id": "1005",
    //   "playCount": 881356,
    //   "name": "蒸汽波复古 ∫ Wave tick",
    //   "picUrl": "https://p2.music.126.net/oEvvra8fQT92yDLwI2sFgA==/109951163719705409.jpg?param=140y140",
    // },
    // {
    //   "id": "1006",
    //   "playCount": 5362635,
    //   "name": "70周年国庆大阅兵演奏曲目合集",
    //   "picUrl": "https://p1.music.126.net/dhT8OsDNPFLbTzm8-dP4ew==/109951164398702433.jpg?param=140y140",
    // },
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getPlaylist()  //一般内部方法前面带下划线
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

  },
  _getPlaylist(){
    wx.showLoading({
      title: '载入中',
    })
    wx.cloud.callFunction({
      name: 'playlist'
    }).then((res) => {
      console.log(res)
      this.setData({
        playlist: res.result
      })
      wx.hideLoading()
    })
  }
  
})