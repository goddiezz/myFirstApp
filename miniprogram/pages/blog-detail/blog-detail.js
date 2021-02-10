import formatTime from '../../utils/formatTime.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blog: {},//博客
    commentList: [],//评论
    blogId: '',//博客id
    statusBarHeight: app.globalData.navBarHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var clear = options.blogId
    clear = clear.replace(/\s*/g, "");
    console.log(clear)
    this.setData({
      blogId: clear
    })
    // console.log(blogId)
    this._getBlogDetail()
  },
  _getBlogDetail(){
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    //请求云函数获取详细信息
    wx.cloud.callFunction({
      name: 'blog',
      data: {
        blogId: this.data.blogId,
        $url: 'detail',
      }      
    }).then((res) => {
      console.log(res)
      //取出博客对象（注意res，result，进行解析）
      const blog = res.result.list[0]
      let commentList = blog.commentList
      console.log(commentList)
      //格式化每条评论的时间
      for(let i = 0,len = commentList.length; i < len; i++) {
        commentList[i].createTime = formatTime(new Date(commentList[i].createTime))
      }
      this.setData({
        commentList,
        blog,
      })
      wx.hideLoading()
    })
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