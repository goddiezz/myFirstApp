const app = getApp()
Component({
  options: {
    multipleSlots: true
  },
  properties: {
      // defaultData（父页面传递的数据-就是引用组件的页面）
      defaultData: {
          type: Object,
          value: {
              title: "我是默认标题"
          },
          observer: function(newVal, oldVal) {}
      }
  },
  data: {
      navBarHeight: app.globalData.navBarHeight,
      menuRight: app.globalData.menuRight,
      menuBotton: app.globalData.menuBotton,
      menuHeight: app.globalData.menuHeight,
  },

  attached: function(options) {
      console.log(this.data)
      
  },

  methods: {
    search() {
      wx.navigateTo({
        url: '/pages/find/find',
      })
    },
  }
})