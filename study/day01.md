# 编程学习

## pagefind
1. insatll
```javascript
npm i vitepress-plugin-pagefind
```

2. import
```javascript

import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite:{
    plugins:[pagefindPlugin()],
  }
})


//vite.config.ts
import { pagefindPlugin } from "vitepress-plugin-pagefind";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [pagefindPlugin()],
})

pagefindPlugin({
    btnPlaceholder: '搜索',
    placeholder: '搜索文档',
    emptyText: '空空如也',
    heading: '共: {{searchResult}} 条结果'
})
```

## vitepress
```javascript
npm install -D vitepress

npx vitepress init
```
