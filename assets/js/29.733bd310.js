(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{448:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("vue项目中慎用style的scoped")])]),s._v(" "),a("p",[s._v("简介：vue组件开发，一般是使用单文件组件形式，我们一般style使用scoped使模块私有化。从主观上来说这是一个很好的方案，为什么我现在要说慎用呢？下面我们来看下")]),s._v(" "),a("h3",{attrs:{id:"scoped的实现私有化样式的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoped的实现私有化样式的原理"}},[s._v("#")]),s._v(" scoped的实现私有化样式的原理")]),s._v(" "),a("p",[s._v("那么我们先从实现原理说起。为了方便称呼，我们假设把加了scoped的组件叫做模块私有组件，其他未加scoped的组件就叫做模块一般组件。")]),s._v(" "),a("p",[s._v("通过DOM结构发现：vue是通过DOM结构以及css样式上加上了唯一不重复的标记，以保证唯一行，达到样式私有化模块化的目的，具体的渲染结果是怎么样的，我们通过一个例子来说明下。")]),s._v(" "),a("h5",{attrs:{id:"公共组件button组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共组件button组件"}},[s._v("#")]),s._v(" 公共组件button组件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//button.vue\n<template>\n  <div class="button-warp">\n    <button class="button">text</button>\n  </div>\n</template>\n...\n<style scoped>\n  .button-warp{\n    display:inline-block;\n  }\n  .button{\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radus: 2px;\n  }\n</style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h5",{attrs:{id:"浏览器渲染的button组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染的button组件"}},[s._v("#")]),s._v(" 浏览器渲染的button组件")]),s._v(" "),a("p",[s._v("渲染出来的html和css部分分别为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div data-v-2311c06a class="button-warp">\n  <button data-v-2311c06a class="button">text</button>\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".button-warp[data-v-2311c06a]{\n  display:inline-block;\n}\n.button[data-v-2311c06a]{\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radus: 2px;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("从上面浏览器渲染出来的代码我们可以看出，添加了scoped属性的组件，为了达到样式私有化模块的目的，做了两个处理：")]),s._v(" "),a("ul",[a("li",[s._v("给HTML的DOM节点上加了一个不重复的data属性（data-v-xxx）")]),s._v(" "),a("li",[s._v("在每句编译后生成的css语句的末尾加了加了一个当前组件的data属性，来保证唯一性样式。")])]),s._v(" "),a("p",[s._v("scoped的这一操作，虽然看上去是达到了组件样式模块的化的目的，但是每个样式的权重加重了，我们如果要修改这个样式，需要更高的权重去覆盖这个样式。")]),s._v(" "),a("h5",{attrs:{id:"其他组件引用button组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他组件引用button组件"}},[s._v("#")]),s._v(" 其他组件引用button组件")]),s._v(" "),a("p",[s._v("上面我们分析了单个组件渲染后的结果，那么组件相互调用之后又会什么样的结果呢？\n具体分两种情况：模块私有组件引用模块私有组件；模块一般组件引用模块私有组件。")]),s._v(" "),a("p",[s._v("下面我们举个例子，在组件article.vue组件中引用button组件，那么article组件是否添加scoped属性，渲染出来的结果会有什么区别呢？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//article.vue\n<template>\n  <div class="article">\n    \x3c!-- we-button假设是上面定义的组件 --\x3e\n    <we-button></v-button>\n  </div>\n</template>\n...\n<style>\n  .article{\n    width: 500px;\n    margin: 0 auto;\n  }\n  .article .button{\n    border-raduis: 5px;\n  }\n</style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("如果style上没有加scoped属性，那么渲染出来html和css分别就是：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <div class="article">\n    \x3c!-- we-button假设是上面定义的组件 --\x3e\n    <div data-v-2311c06a class="button-warp">\n    <button data-v-2311c06a class="button">text</button>\n  </div>\n  </div>\n</template>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/*button.vue渲染出来的css*/\n.button-warp[data-v-2311c06a]{\n  display:inline-block;\n}\n.button[data-v-2311c06a]{\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radus: 2px;\n}\n/*article.vue渲染出来的css*/\n.article{\n    width: 500px;\n    margin: 0 auto;\n  }\n  .article .button{\n    border-raduis: 5px;\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("从渲染结果可以看出，虽然在article组件中修改了button的属性样式，但是生效的依然是button组件（此时外部的样式被覆盖）")]),s._v(" "),a("h5",{attrs:{id:"模块私有组件-添加scoped-引用模块私有组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块私有组件-添加scoped-引用模块私有组件"}},[s._v("#")]),s._v(" 模块私有组件（添加scoped）引用模块私有组件")]),s._v(" "),a("p",[s._v("如果加了scoped的属性渲染出来的会生效吗？下面我们来见证一下")]),s._v(" "),a("p",[s._v("渲染出来的html和css分别是")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <div data-v-57bc25a0 class="article">\n    \x3c!-- we-button假设是上面定义的组件 --\x3e\n    <div data-v-57bc25a0 data-v-2311c06a class="button-warp">\n    <button data-v-2311c06a class="button">text</button>\n  </div>\n  </div>\n</template>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/*button.vue渲染出来的css*/\n.button-warp[data-v-2311c06a]{\n  display:inline-block;\n}\n.button[data-v-2311c06a]{\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radus: 2px;\n}\n/*article.vue渲染出来的css*/\n.article[data-v-57bc25a0]{\n  width: 500px;\n  margin: 0 auto;\n}\n.article .button[data-v-57bc25a0]{\n  border-raduis: 5px;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("从渲染结果我们，最后这句根本作用不到我们想要改变的DOM节点上面，所以根本不会影响到button.vue组件，这就很尴尬了。。。")]),s._v(" "),a("p",[s._v("当然这个问题也是可以解决的，直接增加全局样式修改，但这势必会影响全局样式。")]),s._v(" "),a("p",[s._v("所以需要另外一种方法在artice.vue组件内再加一个不带scoped属性的style标签，也就意味着要加两个style，一个用于私有样式，一个用于公有样式。这看起来还是有点low的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//article.vue\n<template>\n  <div class="article">\n    \x3c!-- we-button假设是上面定义的组件 --\x3e\n    <we-button></v-button>\n  </div>\n</template>\n...\n<style scoped>\n  .article{\n    width: 500px;\n    margin: 0 auto;\n  }\n  \n</style>\n<style>\n.article .button{\n    border-raduis: 5px;\n  }\n</style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("虽然可以解决，但是这样好像不太符合规范？")]),s._v(" "),a("h4",{attrs:{id:"总结一下scoped的渲染规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结一下scoped的渲染规则"}},[s._v("#")]),s._v(" 总结一下scoped的渲染规则")]),s._v(" "),a("ul",[a("li",[s._v("给HTML的DOM节点上加了一个不重复的data属性（data-v-xxx）")]),s._v(" "),a("li",[s._v("在每句编译后生成的css语句的末尾加了加了一个当前组件的data属性，来保证唯一性样式。")]),s._v(" "),a("li",[s._v("如果组件内部包含其他组件，只会给其他组件的最外层标签加上当前组件的data属性。")])]),s._v(" "),a("blockquote",[a("p",[s._v("解决方案")])]),s._v(" "),a("p",[s._v("就是在vue的组件最外层标签加上一个不重的类名,样式用类名包裹。(不要有定义两个相同class名称的根节点，因为都作用于整个单页会有一个失效)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n<div class="page-file-name">\n</div>\n</template>\n<style lang="less">\n.page-file-name{\n    ...\n    样式\n}\n</style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("参考文章\n"),a("a",{attrs:{href:"https://www.jb51.net/article/121603.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("浅谈vue中慎用style的scoped属性"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);