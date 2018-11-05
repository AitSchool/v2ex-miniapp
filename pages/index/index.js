Page({
  data: {
    topics: [],
  },
  onLoad: function(options) {
    this.getData();
  },
  getData: function(){
    wx.request({
      url: "https://www.v2ex.com/api/topics/hot.json",
      success: (res) => {
        this.setData({
          topics: res.data
        })
      }
    })
  }
})