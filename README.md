
# 技术讲解
# VuePress
Vue 驱动的静态网站生成器
https://www.vuepress.cn/

入门全教程：
https://www.z01.com/help/web/3582.shtml


如果你是部署在GitPage的根域名，如waipo.github.io，则需要将dist发布后的文件，放在master根目录。

所以，本库：
1、master分支是发布后的文件。
2、develop分支是完整的源码
3、gh-pages分支没有任何意义，除非作为子目录部署，如waipo.github.io/gh-pages配置。



## 运行命令：
```
npm run  docs:dev
npm run  docs:build

```