# L2 RestfulTemplate来啦 从此 CRUD 页面我就没再怕的！

## 概念：
> 抛开【代码模版】的称呼，我更加愿意将其定义为一种开发思想：将重复的页面布局部分通过弹性、灵活的方式进行封装，外部通过传递参数来实现CURD表格页面的快速对接，同时通过各种适配器类的来适配非restful风格和各种不同的API Response， 同时通过下层控件的积累，代码量不断压缩、低成本改善，功能更加内聚。

> 总结: rest-tmpl 是实现不受框架约束的、自由的、灵活的、高效的、可维护、开箱即用的一种 CRUD 表格对接方式的思想基础

在这种思想的驱动下，我设计了以下的项目结构

```text
components  
  └── basic
        └── rest-template
             |- widgets
             └── adapter
                    |- restful-adapter.j(t)s
                    |- http-response-adapter.j(t)s
                    |- page-adapter.j(t)s
                    └── x-header-adapter.j(t)s
             |- RestfulTemplate.vue
             |- TableTemplate.vue
             |- DialogTemplate.vue (DrawerTemplate.vue)
             └── FilterTemplate.vue
views
  └── user-manage
        |- index.vue
        └── template.js(x)
``` 

使用案例
```html
<template>
<RestfulTemplate
    :api="/user"
    :template="template"
/>
</tempalte>

<script>
export default {
    data () {
        return {
            template: [{
                text: '姓名',
                field: 'name'
            }, {
                text: '年龄',
                field: 'age'
            }]
        }
    }
}
</script>
```

L2 作为个人首个连载的教学视频，将以 directly coding 的方式进行，尽可能将踩坑以及填坑的过程完整地呈现给大家



小伙伴们如果喜欢， 记得<span style="background: orange;color: white;margin: 0 15px;padding: 7px 6px;border-radius: 8px;font-size: 21px;font-weight: 200">一键三连</span>哦！


# L2 Chapter 1 准备

## 框架选型

- Vue 2.6.12 (目前2.x最新版本)
- @vue/cli 4.5.9 (仅供参考，4.x 都可以)
- ant-design-vue (1.7.2 目前 1.x 最新版, 大家也可以选用其他组件库)
- typescript (4.1.3 目前最新版)
- rxjs (6.6.3 目前最新版)