(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{439:function(t,e,n){"use strict";n.r(e);var l=n(2),s=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("首先说明下网页HTML文件变成屏幕上画面过程：")]),t._v(" "),e("ol",[e("li",[t._v("HTML内容被HTML解析器解析成DOM树")]),t._v(" "),e("li",[t._v("CSS内容被CSS解析器解析成CSSOM树")]),t._v(" "),e("li",[t._v("DOM树+CSSOM树会产生Render Tree（渲染树）")]),t._v(" "),e("li",[t._v("生成布局。浏览器根据渲染树来布局，以计算每个节点的几何信息（位置、大小）")]),t._v(" "),e("li",[t._v("将各个节点绘制到屏幕上\n如下图")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/2b56a950-9cdc-11eb-ab90-d9ae814b240d.png",alt:"浏览器渲染机制"}})]),t._v(" "),e("p",[t._v("其中第四步为布局排列（flow），第五步为绘制（paint）。这两步加起来就是我们通常所说的渲染")]),t._v(" "),e("p",[t._v("今天要介绍的就是Reflow（重排）、重绘（Repaint），有的人说是回流与重绘")]),t._v(" "),e("h3",{attrs:{id:"一-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-是什么"}},[t._v("#")]),t._v(" 一.是什么？")]),t._v(" "),e("p",[t._v("在HTML中，每个元素可以理解为一个盒子，在浏览器解析过程中，会设计重排重绘：")]),t._v(" "),e("ul",[e("li",[t._v("重排：==元素的位置发生变动==（原因）时产生重排，也叫回流。"),e("font",{attrs:{color:"green"}},[t._v("计算每一个元素在设备视口内的确切位置和大小")]),t._v("（这是what）。当一个位置发生改变时其父元素以及后面的元素都可能发生变化，代价极高")],1),t._v(" "),e("li",[t._v("重绘：元素的样式发生改变，但是位置没有发生改变（原因）。"),e("font",{attrs:{color:"green"}},[t._v("将渲染树的每个节点转换成屏幕上的实际像素")]),t._v("（重点），这一步通常称为绘制或者栅格化")],1),t._v(" "),e("li")]),t._v(" "),e("p",[t._v("在页面初始渲染阶段，重排不可避免的触发。可以理解成页面一开始是空白的元素，后面添加了新的元素，使页面布局发生改变")]),t._v(" "),e("h3",{attrs:{id:"一-如何触发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-如何触发"}},[t._v("#")]),t._v(" 一.如何触发？")]),t._v(" "),e("blockquote",[e("p",[t._v("重排触发时机")])]),t._v(" "),e("p",[e("em",[t._v("重排一定会触发重绘")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("添加或删除可见dom元素")])]),t._v(" "),e("li",[e("p",[t._v("元素位置发生改变，或者动画")])]),t._v(" "),e("li",[e("p",[t._v("元素尺寸发生改变（外边框、内边框、边框大小、高度宽度等）")])]),t._v(" "),e("li",[e("p",[t._v("内容发生改变")])]),t._v(" "),e("li",[e("p",[t._v("页面一开始渲染的时候")])]),t._v(" "),e("li",[e("p",[t._v("浏览器窗口改变（重排是根据视口的大小来计算位置大小）（resize事件发生时）\n还有一些容易忽略的操作：获取一些特定属性的值")])]),t._v(" "),e("li",[e("p",[t._v("offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight，getComputedStyle（）方法")])])]),t._v(" "),e("p",[t._v("这些属性有一个特性，需要通过既是计算得到。因此浏览器为了获取这些值，也会进行回流（重排）")]),t._v(" "),e("blockquote",[e("p",[t._v("重绘触发时机")])]),t._v(" "),e("p",[e("em",[t._v("重绘不一定会触发重排")])]),t._v(" "),e("p",[t._v("我们可以把页面理解为一个黑板，黑板上有一朵画好了的小花。现在我们要把这躲小花从左边移到右边，那我们首先要确定好右边的具体位置，再画好形状（重排），再画上它原有的颜色（重绘）")]),t._v(" "),e("p",[t._v("引起重绘的行为：")]),t._v(" "),e("ol",[e("li",[t._v("样色修改")]),t._v(" "),e("li",[t._v("阴影的修改")])]),t._v(" "),e("h3",{attrs:{id:"三-如何减少"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-如何减少"}},[t._v("#")]),t._v(" 三.如何减少？")]),t._v(" "),e("p",[t._v("避免重排的经验：")]),t._v(" "),e("ul",[e("li",[t._v("如果设置元素样式，通过改变元素的class类名")]),t._v(" "),e("li",[t._v("避免设置多项内联样式")]),t._v(" "),e("li",[t._v("应用元素的动画，使用position属性的fixed或者absoluted，尽可能使元素脱离文档流，减少对其他元素的影响")]),t._v(" "),e("li",[t._v("避免使用table布局。table中某个元素大小以及内容的改变，都会引起整个table的重新计算")]),t._v(" "),e("li",[t._v("使用css3硬件加速（GPU）。可以让transform、opcity、filters不会引起重排重绘")]),t._v(" "),e("li",[t._v("避免使用css的JavaScript表达式")]),t._v(" "),e("li",[t._v("减少http请求次数")])]),t._v(" "),e("h3",{attrs:{id:"四-参考回答"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-参考回答"}},[t._v("#")]),t._v(" 四.参考回答？")]),t._v(" "),e("p",[t._v("如果被问到这个问题，大概要怎么回答？\n`")]),t._v(" "),e("blockquote",[e("p",[t._v("重排和重绘是浏览器渲染上的两个关键节点，html会被html解析器解析成DOM树，css会被css解析器解析成CSSOM树，两者形成一个渲染树，然后根据渲染树，来布局，确定页面上所有内容的位置大小（重排），然后把像素绘制到屏幕上")])]),t._v(" "),e("blockquote",[e("p",[t._v("其中重排就是当元素位置改变时，浏览器重新执行布局这个步骤，来重新确定页面上内容的大小和位置，确定完之后再重新绘制到屏幕上，所以重排一定会引起重绘")])]),t._v(" "),e("blockquote",[e("p",[t._v("如果元素没有发生变动，仅仅是样式变了，这时候浏览器渲染的时候就会跳过布局的步骤，直接进入绘制步骤，这就是重绘，所以重绘不一定会引起重排")])]),t._v(" "),e("h3",{attrs:{id:"五-例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-例子"}},[t._v("#")]),t._v(" 五.例子")]),t._v(" "),e("p",[t._v("例如，多次修改一个把元素布局的时候，我们很可能会如下操作")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('const el = document.getElementById(\'el\')\nfor(let i=0;i<10;i++) {\n    el.style.top  = el.offsetTop  + 10 + "px";\n    el.style.left = el.offsetLeft + 10 + "px";\n}\n')])])]),e("p",[t._v("每次循环都需要获取多次offset属性，比较糟糕，可以使用变量的形式缓存起来，待计算完毕再提交给浏览器发出重计算请求")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('// 缓存offsetLeft与offsetTop的值\nconst el = document.getElementById(\'el\')\nlet offLeft = el.offsetLeft, offTop = el.offsetTop\n\n// 在JS层面进行计算\nfor(let i=0;i<10;i++) {\n  offLeft += 10\n  offTop  += 10\n}\n\n// 一次性将计算结果应用到DOM上\nel.style.left = offLeft + "px"\nel.style.top = offTop  + "px"\n')])])]),e("p",[t._v("我们还可避免改变样式，使用类名去合并样式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("const container = document.getElementById('container')\ncontainer.style.width = '100px'\ncontainer.style.height = '200px'\ncontainer.style.border = '10px solid red'\ncontainer.style.color = 'red'\n")])])]),e("p",[t._v("使用类名去合并样式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<style>\n    .basic_style {\n        width: 100px;\n        height: 200px;\n        border: 10px solid red;\n        color: red;\n    }\n</style>\n<script>\n    const container = document.getElementById('container')\n    container.classList.add('basic_style')\n<\/script>\n")])])]),e("p",[t._v("前者每次单独操作，都去触发一次渲染树更改（新浏览器不会），")]),t._v(" "),e("p",[t._v("都去触发一次渲染树更改，从而导致相应的回流与重绘过程")]),t._v(" "),e("p",[t._v("合并之后，等于我们将所有的更改一次性发出")]),t._v(" "),e("p",[t._v("我们还可以通过通过设置元素属性display: none，将其从页面上去掉，然后再进行后续操作，这些后续操作也不会触发回流与重绘，这个过程称为离线操作")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("const container = document.getElementById('container')\ncontainer.style.width = '100px'\ncontainer.style.height = '200px'\ncontainer.style.border = '10px solid red'\ncontainer.style.color = 'red'\n")])])]),e("p",[t._v("离线操作后")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("let container = document.getElementById('container')\ncontainer.style.display = 'none'\ncontainer.style.width = '100px'\ncontainer.style.height = '200px'\ncontainer.style.border = '10px solid red'\ncontainer.style.color = 'red'\n...（省略了许多类似的后续操作）\ncontainer.style.display = 'block'\n")])])]),e("p",[t._v("参考文献")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1967594",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何回答如何理解重排和重绘"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://segmentfault.com/a/1190000017329980/",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的了解回流和重绘吗"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://juejin.cn/post/6844903942137053192",target:"_blank",rel:"noopener noreferrer"}},[t._v("回流与重绘"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);