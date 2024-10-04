Page({
  onSubmit(e) {
      const { projectName, description, recruitment } = e.detail.value;
      
      if (!projectName || !description || !recruitment) {
          wx.showToast({
              title: '请填写完整信息',
              icon: 'none'
          });
          return;
      }
      
      // 假设这里是调用云函数或API保存项目数据
      wx.cloud.callFunction({
          name: 'createProject',
          data: {
              projectName,
              description,
              recruitment,
          },
          success: (res) => {
              wx.showToast({
                  title: '项目发布成功！',
              });
              // 可以跳转到项目列表页面
              wx.navigateBack();
          },
          fail: () => {
              wx.showToast({
                  title: '发布失败，请重试',
                  icon: 'none'
              });
          }
      });
  }
});
