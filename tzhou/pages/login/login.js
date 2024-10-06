const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    motto: '你好！伙伴，快来完成我们的项目吧',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  methods: {
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
    onChooseAvatar(e) {
      const { avatarUrl } = e.detail;
      const { nickName } = this.data.userInfo;
      this.setData({
        "userInfo.avatarUrl": avatarUrl,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      });
    },
    onInputChange(e) {
      const nickName = e.detail.value;
      const { avatarUrl } = this.data.userInfo;
      this.setData({
        "userInfo.nickName": nickName,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      });
    },
    getUserProfile(e) {
      wx.getUserProfile({
        desc: '展示用户信息',
        success: (res) => {
          console.log(res);
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    },
    onLogin() {
      wx.setStorageSync('user', { name: '当前用户' });
      wx.redirectTo({
        url: '../index/index'
      });
    }
  }
});
