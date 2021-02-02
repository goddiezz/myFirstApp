let movableAreaWidth = 0  //区域宽度
let movableViewWidth = 0  //元素宽度
const backgroundAudioManager = wx.getBackgroundAudioManager()
let currentSec = -1 //播放时长
let duration = 0   //总时长
let isMoving = false//修复进度条拖拽时和updateTiem事件冲突卡顿，表示当前进度条是否拖拽，
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showTime: {
      // 播放时间
      currentTime : '00:00',
      //总时间
      totalTime : '00:00',
    },
    //x轴偏移
    distance : 0,
    //不知道
    progress : 0,
  },
  lifetimes : {
    ready() {
      this._bindBGMEvent()
      this._getDistance()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //滑动视图对象发生变化
    onChange(event) {
      // console.log(event)
      //判定事件源（引起滑动变化的原因：自身播放进度变化和拖动两种
      if (event.detail.source ==='touch') {
        this.data.progress = event.detail.x / (movableAreaWidth - movableViewWidth) * 100
        //因为拖动还没有结束，所以不需要setData
        this.data.distance = event.detail.x
        isMoving = true 
        // console.log('change',isMoving)
      }
    },
    onTouchEnd() {
      const currentTimeFmt = this._timeFormat(Math.floor(backgroundAudioManager.currentTime))
      this.setData({
        progress: this.data.progress,
        distance: this.data.distance,
        ['showTime.currentTime'] : currentTimeFmt.min + ":" + currentTimeFmt.sec
      })
      backgroundAudioManager.seek(duration * this.data.progress / 100)
      isMoving = false
      // console.log('end',isMoving)
    },
    _getDistance(){
      //获得查询对象
      const query = this.createSelectorQuery()
      query.select('.movable-area').boundingClientRect()
      query.select('.movable-view').boundingClientRect()
      query.exec((rect) => {
        console.log(rect)
        movableAreaWidth = rect[0].width
        movableViewWidth = rect[1].width
      })
    },
    _bindBGMEvent(){
      backgroundAudioManager.onPlay(() => {
        console.log('onPlay')
      })
      backgroundAudioManager.onStop(() => {
        console.log('onPlay')
      })
      backgroundAudioManager.onPause(() => {
        console.log('onPause')
      })
      backgroundAudioManager.onWaiting(() => {
        console.log('onWaiting')
      })
      backgroundAudioManager.onCanplay(() => {
        console.log('onCanplay')
        console.log(`歌曲总时长${backgroundAudioManager.duration}`)
        let duration = backgroundAudioManager.duration
        if(typeof duration != 'undefined'){
          //设置总时长
          this._setTotalTime()
        }else{
          setTimeout(() => {
            console.log(`歌曲总时长${backgroundAudioManager.duration}`)
            this._setTotalTime()
            //设置总时长
          },1000)
        }
      })
      backgroundAudioManager.onTimeUpdate(() => {
        // console.log('onTimeUpdate')
        if (!isMoving) {
          const duration = backgroundAudioManager.duration
          const currentTime = backgroundAudioManager.currentTime
          const sec = currentTime.toString().split('.')[0]
          console.log(sec)
        if (sec != currentSec) {
          // console.log(currentTime)
          const currentTimeFmt = this._timeFormat(currentTime)
          this.setData({
            distance: (movableAreaWidth - movableViewWidth) * currentTime / duration,
            progress: currentTime / duration * 100,
            ['showTime.currentTime'] : `${currentTimeFmt.min}:${currentTimeFmt.sec}`
          })
          currentSec = sec
        }

        }
        
      })
      backgroundAudioManager.onEnded(() => {
        console.log('onEnded')
        //另一种自然结束下一首的方法
        // this.triggerEvent('musicEnd')
      })
      backgroundAudioManager.onError((res) => {
        console.log('onError')
        wx.showToast({
          title: '发生错误 ' + res.errMsg
        })
      })
    },
    _setTotalTime(){
      duration = backgroundAudioManager.duration
      const durationFmt = this._timeFormat(duration)
      this.setData({
        ['showTime.totalTime'] : `${durationFmt.min}:${durationFmt.sec}`
      })
    },
    _timeFormat(sec){
      const min = Math.floor(sec / 60)  //分
      sec = Math.floor(sec % 60)  //秒
      return {
        'min' : this._fillZero(min),
        'sec' : this._fillZero(sec),
      }
    },
    _fillZero(num) {
      return num < 10 ? '0' + num :num
    }
  }
})
