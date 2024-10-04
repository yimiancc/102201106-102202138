Page({
  onLogin() {
    wx.setStorageSync('user', { name: '当前用户' });
    wx.redirectTo({
      url: '../index/index'
    });
  }
});
