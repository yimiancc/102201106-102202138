Page({
  onCreateProject() {
    wx.navigateTo({
      url: '../create-project/create-project'
    });
  },

  onJoinProject() {
    wx.navigateTo({
      url: '../project-list/project-list'
    });
  }
});
