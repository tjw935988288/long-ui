webpackJsonp([33],{489:function(t,e,i){var n=i(1)(i(524),i(620),null,null,null);t.exports=n.exports},524:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toolActive:0}},methods:{tabClick:function(t){this.toolActive=t},back:function(){window.history.back()}},components:{}}},620:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui-page"},[i("header-bar",[i("icon-button",{attrs:{size:36,icon:"navigate_before"},nativeOn:{click:function(e){t.back(e)}},slot:"left"}),t._v(" "),i("span",[t._v("Bottom Nav")])],1),t._v(" "),i("scroll-view",[i("list",[i("item-cell",[i("item-title",[t._v("\n          当前选中\n        ")]),t._v(" "),i("item-title-after",[t._v("\n          "+t._s(0===t.toolActive?"首页":1===t.toolActive?"发现":"我的")+"\n        ")])],1)],1),t._v(" "),0===t.toolActive?i("list",{attrs:{title:"首页信息"}},[i("item-cell",[i("item-title",[t._v("\n          发布时间\n        ")]),t._v(" "),i("item-title-after",[t._v("\n          2016-10-15\n        ")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("\n          访问次数\n        ")]),t._v(" "),i("item-title-after",[i("badge",{attrs:{value:"23"}})],1)],1),t._v(" "),i("item-cell",[i("item-title",[t._v("\n          测试数据\n        ")]),t._v(" "),i("item-title-after",[t._v("\n          test\n        ")])],1)],1):t._e(),t._v(" "),1===t.toolActive?i("list",{attrs:{title:"人员信息"}},[i("item-cell",[i("item-title",[t._v("\n          艾瑞莉娅\n        ")]),t._v(" "),i("item-title-after",[t._v("\n          艾欧尼亚\n        ")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("\n          德莱厄斯\n        ")]),t._v(" "),i("item-title-after",[t._v("\n          洛克萨斯\n        ")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("\n          嘉文四世\n        ")]),t._v(" "),i("item-title-after",[t._v("\n          德玛西亚\n        ")])],1)],1):t._e(),t._v(" "),2===t.toolActive?i("list",{attrs:{title:"个人信息"}},[i("item-cell",[i("item-title",[t._v("\n          姓名\n        ")]),t._v(" "),i("item-title-after",[i("badge",{attrs:{value:"23"}})],1)],1),t._v(" "),i("item-cell",[i("item-title",[t._v("\n          年龄\n        ")]),t._v(" "),i("item-title-after",[t._v("\n          洛克萨斯\n        ")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("\n          居住地\n        ")]),t._v(" "),i("item-title-after",[t._v("\n          深圳\n        ")])],1)],1):t._e()],1),t._v(" "),i("bottom-nav",{attrs:{active:t.toolActive},on:{"nav-change":t.tabClick}},[i("bottom-nav-item",{attrs:{icon:"home2",title:"首页"}}),t._v(" "),i("bottom-nav-item",{attrs:{icon:"compass2",title:"发现"}}),t._v(" "),i("bottom-nav-item",{attrs:{icon:"user",title:"我的"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=33.e8042fea1a09a2d55dae.js.map