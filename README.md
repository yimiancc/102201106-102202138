# 102201106-102202138
2024软工实践作业——开发项目合作小程序“同舟”  

## 项目简介
本项目旨在开发一个用于项目交流与协作的小程序，方便团队成员随时随地分享进展、讨论问题、分配任务。该小程序集成了和即时聊天等功能，旨在提升团队协作效率。

## 目录说明

**tongzhou1.0/** - 包含项目的所有文档
1. **components/** - 小程序组件库。
   -**navigation-bar/** -小程序自定义导航栏组件。
     - **navigation-bar.js**
     - **navigation-bar.json**
     - **navigation-bar.wxml**
     - **navigation-bar.wxss**
2. **pages/** - 小程序页面代码，每个页面独立一个文件夹。
   - **login/** - 小程序登录页面。
     - **login.js**
     - **login.json**
     - **login.wxml**
     - **login.wxss**
   - **index/** - 小程序首页页面。
     - **index.js**
     - **index.json**
     - **index.wxml**
     - **index.wxss**
   - **creat-project/** - 小程序创建项目页面。
     - **creat-project.js**
     - **creat-project.json**
     - **creat-project.wxml**
     - **creat-project.wxss**
   - **project-list/** - 小程序项目列表页面。
     - **project-list.js**
     - **project-list.json**
     - **project-list.wxml**
     - **project-list.wxss**
   - **chat/** - 小程序项目内聊天界面。
     - **chat.js**
     - **chat.json**
     - **chat.wxml**
     - **chat.wxss**
3. **utils/** - 工具函数和配置文件，如网络请求封装、日期格式化等。
   - **util.js/** - 工具库文件，包含一系列实用的工具函数。
4. **app.js/** - 小程序配置文件，自定义ESLint规则，适应项目的特定需求和编码风格。
5. **app.json/** - 小程序项目的全局配置文件。
6. **app.wxss/** - 小程序项目的全局样式文件。
7. **.gitignore** - Git忽略文件列表，指定哪些文件或目录不应被提交到仓库。
8. **project.config.json** - 小程序开发者工具的配置文件，包含项目ID、AppID等信息。
9.  **project.private.config.json** - 小程序开发者工具的配置文件，包含开发者自定义配置信息。
10.   **sitemap.json** - 小程序开发者工具的配置文件，配置小程序及其页面是否允许被微信索引。

## 使用说明

### 环境准备

1. **下载安装微信**：相信它早就在你的手机上了~
2. **扫描小程序二维码**：使用微信扫描小程序体验版二维码进入小程序。
   
<img src="https://github.com/yimiancc/102201106-102202138/blob/main/wechat_images/oxpKb7WPYQzoN0vcDhKEFgbCk5m0.png" width="200" height="200"  alt="tongzhou"/><br/>

### 开发流程

1. **编写代码**：在`src/`目录下编写和修改代码。
2. **预览和调试**：在微信开发者工具中预览小程序，使用控制台进行调试。
3. **构建和发布**：完成开发后，可以通过微信开发者工具进行上传和发布。

### 运行测试

1. **单元测试**：在项目根目录下运行以下命令执行单元测试。
   ```bash
   npm test
   ```

2. **端到端测试**：根据项目具体配置，运行端到端测试脚本（如使用Cypress或Puppeteer）。

### 贡献指南

1. **代码风格**：遵循项目的代码风格指南，保持代码整洁和一致。
2. **提交规范**：使用Git的分支和合并策略，提交时附上清晰的提交信息。
3. **Pull Request**：在提交Pull Request前，确保代码通过所有测试，并经过必要的代码审查。

### 联系我们

如有任何问题或建议，请通过以下方式联系我们：
- GitHub Issues：https://github.com/your-repo-url/issues
- 邮件：your-email@example.com

感谢使用本项目！希望它能帮助您的团队更高效地进行项目交流和协作。
