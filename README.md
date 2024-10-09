# 102201106-102202138
2024软工实践作业——开发项目合作小程序“同舟”  

## 项目简介
本项目旨在开发一个用于项目交流与协作的小程序，方便团队成员随时随地分享进展、讨论问题、分配任务。该小程序集成了创建项目，加入项目和即时聊天等功能，旨在提升团队协作效率。

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
## 微信小程序预览效果
### 环境准备

1. **下载安装微信**：相信它早就在你的手机上了~
2. **扫描小程序二维码**：使用微信扫描小程序体验版二维码进入小程序。
   
<img src="https://github.com/yimiancc/102201106-102202138/blob/main/wechat_images/oxpKb7WPYQzoN0vcDhKEFgbCk5m0.png" width="200" height="200"  alt="tongzhou"/><br/>

## 微信开发者工具测试
### 环境准备
1. **安装微信开发者工具**：下载并安装最新版本的微信开发者工具。

### 环境准备
1.**克隆项目**：从github仓库导入本项目文件夹tongzhou1.0到本地。  

2.**配置微信开发者工具**：
   - **打开微信开发者工具，选择“导入项目”**
   - **填写AppID（在project.config.json中查找）**
   - **选择不需要云服务**
   - **目录选择克隆到本地的项目根目录**
   - **点击导入**
  
### 联系我们

如有任何问题或建议，请通过以下方式联系我们：
- "软件工程2024"群聊中仓库学号对应的两位开发者

感谢使用本项目！希望它能帮助您的团队更高效地进行项目交流和协作。
