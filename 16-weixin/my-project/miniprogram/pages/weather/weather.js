// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    weatherMsg:'查询中...'
  },
  output(e){
    this.city = e.detail
  },
  searchWeather(){
    var url = 'http://v.juhe.cn/weather/index?format=2&cityname=' + this.city.value + '&key=69961ecd758116c7f1135b60f45d8734'
    wx.request({
      url:url,
      success:(res)=>{
        var tomorrow = res.data.result.future[1]
        this.setData({
          weatherMsg : tomorrow.temperature + '  ' + tomorrow.weather
        })
        
        console.log(this.weatherMsg)
      }
    })
    
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