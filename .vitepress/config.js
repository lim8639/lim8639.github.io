import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// docs/vite.config.ts

import { SearchPlugin } from "vitepress-plugin-search";


// 分词器来源
// https://wenjiangs.com/article/segment.html
// https://github.com/leizongmin/node-segment
// 安装：
// yarn add segment -D
// 以下为样例

// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();
// 开始分词
// console.log(segment.doSegment('这是一个基于Node.js的中文分词模块。'));

var options = {
  // 采用分词器优化，
  // encode: function (str) {
  //   return segment.doSegment(str, {simple: true});
  // },
  // tokenize: "forward", // 解决汉字搜索问题。来源：https://github.com/emersonbottero/vitepress-plugin-search/issues/11

  // 以下代码返回完美的结果，但内存与空间消耗巨大，索引文件达到80M+
  encode: false,
  tokenize: "full",
};

import AutoNavPlugin from 'vitepress-auto-nav-sidebar'

let { nav, sidebar } = AutoNavPlugin({
  entry:"./",
  ignoreFolders: ["node_modules", "assets", "public", ".vitepress", ".git", ".idea",".obsidian", "utils"], // 需要排除的一些目录
  ignoreFiles: ['index'], // 需要排除的一些文件
  dirPrefix: '目录：',
  filePrefix: '文件：',
  showNavIcon:false,
  showSideIcon:false,
  isCollapse: true,
  collapsed: false,
  singleLayerNav:true
})

nav.push({ text: '博客', link: 'https://limfly.cn/',target:'_blank' })

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "沫沫的时光机",
  description: "沫沫的知识库系统",
  lang: ['zh-CN','en-US'],
  vite:{
    plugins:[pagefindPlugin(),SearchPlugin(options)],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    lastUpdated: true,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    sidebar: sidebar,


    socialLinks: [
      { icon: 'github', link: 'https://github.com/lim8639' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: 'https://limfly.cn'
      }
    ]
  }
})
