# learn less

##[常用方法][1]
- less 赋予css动态语言的特性，可以使用变量、函数、运算、继承。
- 变量：定义全局通用样式，如颜色、字体大小、边距。改变变量值就可以轻松实现页面换肤。
- 混合：可将一个定义好的class A，混入到其他选择器样式 B 中，可带参数，也可设置初始参数值，此时B将拥有A的所有属性。通常用于处理浏览器前缀的属性、文本单行截断、文本多行截断等需要多属性配合使用的情况。
- 嵌套规则：以树形结构写css，使css可与dom结构一一对应起来，更加清晰和具有模块化。使css也具有作用域的概念。
- @import：将一些公关样式或模块样式抽取到单独文件，可使用@import 引入。也可引入css文件后缀名 .css 即可。
- 命名空间：为了更好组织CSS或者单纯是为了更好的封装，将一些变量或者混合模块打包起来。

    ```less
        #bundle {
          .button () {
            display: block;
            border: 1px solid black;
            background-color: grey;
            &:hover { background-color: white }
          }
          .tab { ... }
          .citation { ... }
        }


        #header a {
          color: orange;
          #bundle > .button;
        }
    ```
## 编译


[1] http://www.bootcss.com/p/lesscss/
