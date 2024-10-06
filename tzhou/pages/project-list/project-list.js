Page({
  data: {
    projects: []
  },

  onLoad() {
    this.loadProjects();
  },

  loadProjects() {
    const projects = wx.getStorageSync('projects') || [];
    this.setData({ projects });
  },

  onProjectClick(e) {
    const projectId = e.currentTarget.dataset.id;
    const project = this.data.projects.find(p => p.id === projectId);
    wx.showModal({
      title: project.name,
      content: `简介: ${project.description}\n招募成员: ${project.members.join(', ')}`,
      showCancel: true,
      confirmText: '进入聊天',
      success: (res) => {
        if (res.confirm) {
          wx.navigateTo({
            url: `../chat/chat?projectId=${projectId}`
          });
        }
      }
    });
  },

  onPullDownRefresh() {
    this.loadProjects();
    wx.stopPullDownRefresh();
  }
});
