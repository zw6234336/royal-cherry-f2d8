# Astro 入门套件：博客

![Astro 模板预览](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

<!-- dash-content-start -->

使用 Astro 创建博客并将其部署在 Cloudflare Workers 上作为[静态网站](https://developers.cloudflare.com/workers/static-assets/)。

功能特点：

- ✅ 极简风格设计（让它成为你自己的！）
- ✅ 100/100 Lighthouse 性能评分
- ✅ 对 SEO 友好，支持规范 URL 和 OpenGraph 数据
- ✅ 站点地图支持
- ✅ RSS 订阅源支持
- ✅ Markdown 和 MDX 支持

<!-- dash-content-end -->

## 开始使用

在此仓库之外，您可以使用 [C3](https://developers.cloudflare.com/pages/get-started/c3/)（`create-cloudflare` CLI）通过此模板启动新项目：

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/royal-cherry-f2d8
```

此模板的在线公开部署可访问：[https://royal-cherry-f2d8.templates.workers.dev](https://royal-cherry-f2d8.templates.workers.dev)

## 🚀 项目结构

Astro 会查找 `src/pages/` 目录中的 `.astro` 或 `.md` 文件。每个页面都会根据其文件名暴露为一个路由。

`src/components/` 没有什么特别之处，但我们喜欢把所有 Astro/React/Vue/Svelte/Preact 组件放在那里。

`src/content/` 目录包含相关的 Markdown 和 MDX 文档的"集合"。使用 `getCollection()` 从 `src/content/blog/` 中检索文章，并通过可选的模式对您的前置元数据进行类型检查。了解更多信息，请参阅 [Astro 的内容集合文档](https://docs.astro.build/en/guides/content-collections/)。

任何静态资源，如图像，都可以放在 `public/` 目录中。

## 🧞 命令

所有命令都从项目根目录的终端运行：

| 命令                      | 操作                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                                         |
| `npm run dev`             | 在 `localhost:4321` 启动本地开发服务器           |
| `npm run build`           | 将您的生产站点构建到 `./dist/` 目录              |
| `npm run preview`         | 在部署前本地预览您的构建                         |
| `npm run astro ...`       | 运行 CLI 命令，如 `astro add`、`astro check`     |
| `npm run astro -- --help` | 获取使用 Astro CLI 的帮助                        |
| `npm run deploy`          | 将您的生产站点部署到 Cloudflare                   |

## 👀 想要了解更多？

查看[我们的文档](https://docs.astro.build)或加入我们的 [Discord 服务器](https://astro.build/chat)。

## 致谢

此主题基于可爱的 [Bear Blog](https://github.com/HermanMartinus/bearblog/)。
