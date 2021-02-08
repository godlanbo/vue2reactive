记录学习vue2响应式原理的代码

手写还原了vue2响应式原理的核心代码，没有使用webpack进行热更新，使用新标准中的模块模式

```html
<script type="module"></script>
```

利用type为module便可以简易使用模块进行开发。

要运行代码，请以index.html构建一个本地服务（live server或者http-server）后就可以使用了。