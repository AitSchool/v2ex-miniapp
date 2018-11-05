Page({
  data: {
    replies:[],
    topic: {},
  },
  onLoad: function(options) {
    this.getTopics(options.id);
    this.getReplies(options.id); // <- 这里
  },
  getTopics: function(id) {
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + id,
      success: (res) => {
        // 先 console 一下看看返回的数据结构
        // console.log(res)
        // 发现数据为数组格式，因此取其第一项
        this.setData({
          topic: res.data[0],
        })
      }
    })
  },
  // <- 这里
  getReplies: function(id) {
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + id,
      success: (res) => {
        // console.log(res.data);
        // 点击开其中一项发现，没有 title 属性，内容在 content 属性中。
        this.setData({
          replies: res.data,
        })
      }
    })
  }
})