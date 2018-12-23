// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '113.245399',
    latitude: '23.393400',
    markers:[{
      longitude:'113.245399',
      latitude:'23.393400',
      iconPath:'/pages/map/src/1.svg'
    }],
  },
  getData(){
    let that = this
    wx.getLocation({
      success: function (res) {
        // console.log(res.longitude, res.latitude)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [{
            longitude: res.longitude,
            latitude: res.latitude,
            iconPath: '/pages/map/src/1.svg'
          }]
        })
      }
    })
  },
  controlsTap(){
    console.log(123)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let that = this
    wx.getLocation({
      success: function(res) {
        // console.log(res.longitude, res.latitude)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [{
            longitude: res.longitude,
            latitude: res.latitude,
            iconPath: '/pages/map/src/1.svg'
          }]
        })
      }
    })
    wx.getSystemInfo({
      success: function(res) {
        // console.log(res)
        that.setData({
          controls: [{
            id: 1,
            position: { left: 20, top: res.screenHeight - 350, width: 35, height: 35 },
            iconPath: '/pages/map/src/3.svg',
            clickable: true
          }]
        })
      },
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