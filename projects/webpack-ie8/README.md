#使用webpack编译打包，支持ie8

- 开发环境命令 `npm run dev`, indexOf 不支持ie8; 生产打包命令 `npm run build`, 打包后支持ie8, 以及ie7
- 可以使用es6部分语法，[兼容性列表][3]
- 模板引擎使用[templa.js][1], [tempalte-loader][2]
- node 版本: 6.2.0, 其他版本未做验证

[1]: https://github.com/yanhaijing/template.js
[2]: https://github.com/yanhaijing/template-loader
[3]: http://imweb.io/topic/561f9352883ae3ed25e400f5?utm_source=tuicool&utm_medium=referral
