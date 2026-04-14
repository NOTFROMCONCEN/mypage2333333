# 明日方舟风格个人主页 | Arknights-inspired Homepage

一个基于 Vite + React + TypeScript + Framer Motion 的明日方舟风格个人主页。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4-purple)

## ✨ 特性

- 🎨 **明日方舟风格设计** - 深色主题、金色强调、科技感十足
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **高性能** - 使用 Vite 构建，支持代码分割和懒加载
- 🎭 **流畅动画** - 基于 Framer Motion 的交互动画
- ♿ **可访问性** - 支持键盘导航和屏幕阅读器
- 🔧 **类型安全** - 完整的 TypeScript 类型定义

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 pnpm

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
arknights-homepage/
├── src/
│   ├── components/       # 可复用组件
│   │   ├── Button.tsx    # 通用按钮组件
│   │   ├── HeaderNav.tsx # 导航栏组件
│   │   ├── common.tsx    # 通用组件（HoverCard, AngledPanel 等）
│   │   └── icons.tsx     # SVG 图标组件
│   ├── config/           # 配置文件
│   │   └── animations.ts # 动画配置
│   ├── data/             # 数据文件
│   │   ├── navigation.ts # 导航数据
│   │   ├── hero.ts       # 主视觉数据
│   │   ├── stats.ts      # 统计数据
│   │   ├── summary.ts    # 摘要数据
│   │   ├── skills.ts     # 技能数据
│   │   ├── timeline.ts   # 时间线数据
│   │   ├── projects.ts   # 项目数据
│   │   └── index.ts      # 数据导出
│   ├── hooks/            # 自定义 Hooks
│   │   └── useSectionNav.ts # 区域导航 Hook
│   ├── sections/         # 页面区块
│   │   ├── OverviewSection.tsx  # 概览区块
│   │   ├── ArchiveSection.tsx   # 档案区块
│   │   ├── ProjectsSection.tsx  # 项目区块
│   │   └── ContactSection.tsx   # 联络区块
│   ├── styles/           # 样式文件
│   │   ├── variables.css # CSS 变量
│   │   ├── base.css      # 基础样式
│   │   ├── layout.css    # 布局样式
│   │   ├── components.css# 组件样式
│   │   └── index.css     # 样式入口
│   ├── types/            # 类型定义
│   │   └── index.ts      # 类型导出
│   ├── App.tsx           # 应用主组件
│   └── main.tsx          # 应用入口
├── public/               # 静态资源
├── index.html            # HTML 入口
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目配置
```

## 🛠️ 可用脚本

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run lint` | 运行 ESLint 检查 |
| `npm run lint:fix` | 自动修复 ESLint 错误 |
| `npm run format` | 使用 Prettier 格式化代码 |
| `npm run format:check` | 检查代码格式 |
| `npm run type-check` | 运行 TypeScript 类型检查 |

## 🎨 设计系统

### 颜色

- **背景色**: `#0b0d10`
- **面板色**: `#111317`
- **强调色**: `#ffd34d` (金色)
- **文本色**: `#e5e7eb`
- **次要文本**: `#b4b4b8`

### 字体

- 主字体: Inter, Noto Sans SC, PingFang SC, Microsoft YaHei

## 📦 部署

构建产物位于 `dist/`，可部署到：

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)
- Nginx 或其他静态文件服务器

### Vercel 部署

```bash
npm i -g vercel
vercel
```

### GitHub Pages 部署

1. 在 `vite.config.ts` 中设置 `base: '/your-repo-name/'`
2. 运行 `npm run build`
3. 将 `dist/` 目录推送到 `gh-pages` 分支

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👨‍💻 作者

**HUAMEITANG**

- 网络工程师 · 自动化运维
- 专注于稳定性、自动化、可观测性

---

Built with ❤️ using React + TypeScript + Framer Motion
