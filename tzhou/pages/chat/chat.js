Page({
  data: {
    messages: [],
    inputMessage: ''
  },

  onLoad(options) {
    this.setData({ projectId: options.projectId });
    this.loadMessages();
  },

  loadMessages() {
    const messages = wx.getStorageSync('messages') || {};
    this.setData({ messages: messages[this.data.projectId] || [] });
  },

  onInputMessage(e) {
    this.setData({ inputMessage: e.detail.value });
  },

  onSendMessage() {
    if (!this.data.inputMessage) return;

    const newMessage = {
      id: Date.now(),
      user: wx.getStorageSync('user').name,
      content: this.data.inputMessage
    };

    const messages = wx.getStorageSync('messages') || {};
    if (!messages[this.data.projectId]) {
      messages[this.data.projectId] = [];
    }
    messages[this.data.projectId].push(newMessage);
    wx.setStorageSync('messages', messages);

    this.setData({
      messages: messages[this.data.projectId],
      inputMessage: ''
    });
  }
});
