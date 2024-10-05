Page({
  data: {
    projectName: '',
    description: '',
    members: ''
  },

  onInputName(e) {
    this.setData({ projectName: e.detail.value });
  },

  onInputDescription(e) {
    this.setData({ description: e.detail.value });
  },

  onInputMembers(e) {
    this.setData({ members: e.detail.value });
  },

  onSubmit() {
    const projects = wx.getStorageSync('projects') || [];
    const newProject = {
      id: Date.now(),
      name: this.data.projectName,
      description: this.data.description,
      members: this.data.members.split(',').map(m => m.trim())
    };
    projects.push(newProject);
    wx.setStorageSync('projects', projects);
    wx.showToast({ title: '项目发布成功' });
    wx.navigateBack();
  }
});
