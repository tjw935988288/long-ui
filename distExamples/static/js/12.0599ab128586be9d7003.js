webpackJsonp([12],{495:function(t,o,e){function n(t){e(572)}var i=e(1)(e(528),e(603),n,"data-v-0c3fdb38",null);t.exports=i.exports},528:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{radio:"守望先锋",modal:!1,selectModal:!1,loginModal:!1,alert:{show:!1},confirm:{show:!1},prompt:{show:!1}}},methods:{back:function(){window.history.back()},showModal:function(t){this.$refs[t].open()},hideModal:function(t){this.$refs[t].close()},showAlert:function(t){this.alert={title:"标题",msg:t?"info"===t?"这是普通信息":"success"===t?"成功啦！":"warning"===t?"这是提醒！":"出错啦！":"这是内容",show:!0,type:t},this.$refs.alert.open()},showConfirm:function(){this.confirm={title:"问题",msg:"你确定？",show:!0},this.$refs.confirm.open()},showPrompt:function(){this.prompt={title:"录入信息",msg:"请输入你的姓名",show:!0},this.$refs.prompt.open()},handlerSure:function(t){t?(this.alert={title:"信息",msg:"你输入的是："+t,show:!0},this.$refs.alert.open()):(this.alert={title:"信息",msg:"你点击了确定",show:!0},this.$refs.alert.open())},handlerCancer:function(){console.log("取消")},modelChange:function(t){console.log(t)}}}},542:function(t,o,e){o=t.exports=e(474)(!0),o.push([t.i,".demo-select-modal[data-v-0c3fdb38]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.login-modal .ui-item-form[data-v-0c3fdb38]{padding:0}.login-modal .ui-item-form-content[data-v-0c3fdb38]{padding:0;padding-top:10px}","",{version:3,sources:["/www/myWorkFolder/long-ui/srcExamples/pages/modal.vue"],names:[],mappings:"AACA,oCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAChC,AACD,4CACE,SAAW,CACZ,AACD,oDACE,UAAW,AACX,gBAAkB,CACnB",file:"modal.vue",sourcesContent:["\n.demo-select-modal[data-v-0c3fdb38]{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.login-modal .ui-item-form[data-v-0c3fdb38]{\n  padding: 0;\n}\n.login-modal .ui-item-form-content[data-v-0c3fdb38]{\n  padding: 0;\n  padding-top: 10px;\n}\n"],sourceRoot:""}])},572:function(t,o,e){var n=e(542);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(475)("6f17a0c4",n,!0)},603:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"ui-page"},[e("header-bar",[e("icon-button",{attrs:{size:36,icon:"navigate_before"},nativeOn:{click:function(o){t.back(o)}},slot:"left"}),t._v(" "),e("span",[t._v("Modal")])],1),t._v(" "),e("scroll-view",[e("content-block",[e("div",[t._v("\n          这里有许多的常用的弹出框，\n          例如 alert、 confirm、 prompt....\n          alert有多种级别的提醒，点击一下就知道啦！\n        ")]),t._v(" "),e("button-row",[e("Button",{attrs:{text:"Modal",raised:""},nativeOn:{click:function(o){t.showModal("simModal")}}}),t._v(" "),e("Button",{attrs:{text:"Alert",raised:""},nativeOn:{click:function(o){t.showAlert("")}}})],1),t._v(" "),e("button-row",[e("Button",{attrs:{text:"confirm",raised:""},nativeOn:{click:function(o){t.showConfirm(o)}}}),t._v(" "),e("Button",{attrs:{text:"prompt",raised:""},nativeOn:{click:function(o){t.showPrompt()}}})],1)],1),t._v(" "),e("content-block",[e("div",{},[t._v("\n          不同类型的alert\n        ")]),t._v(" "),e("button-row",[e("Button",{attrs:{text:"info",raised:""},nativeOn:{click:function(o){t.showAlert("info")}}}),t._v(" "),e("Button",{attrs:{text:"success",raised:""},nativeOn:{click:function(o){t.showAlert("success")}}})],1),t._v(" "),e("button-row",[e("Button",{attrs:{text:"warning",raised:""},nativeOn:{click:function(o){t.showAlert("warning")}}}),t._v(" "),e("Button",{attrs:{text:"error",raised:""},nativeOn:{click:function(o){t.showAlert("error")}}})],1)],1),t._v(" "),e("content-block",[e("div",{},[t._v("\n          自定义的modal\n        ")]),t._v(" "),e("button-row",[e("Button",{attrs:{text:"select Modal",raised:""},nativeOn:{click:function(o){t.showModal("selectModal")}}}),t._v(" "),e("Button",{attrs:{text:"Login Modal",raised:""},nativeOn:{click:function(o){t.showModal("loginModal")}}})],1)],1)],1),t._v(" "),e("modal",{ref:"simModal",attrs:{title:"标题"}},[t._v("\n    这里是内容区域，点击关闭按钮，或者遮盖层关闭\n  ")]),t._v(" "),e("modal",{ref:"selectModal",attrs:{title:"Select Modal"}},[e("div",{},[t._v("\n      选择一个你喜欢的\n    ")]),t._v(" "),e("div",{staticClass:"demo-select-modal"},[e("radio",{attrs:{model:t.radio,name:"demoModal",value:"守望先锋",label:"守望先锋"}}),t._v(" "),e("radio",{attrs:{model:t.radio,name:"demoModal",value:"英雄联盟",label:"英雄联盟"}}),t._v(" "),e("radio",{attrs:{model:t.radio,name:"demoModal",value:"精灵宝可梦go",label:"精灵宝可梦go"}}),t._v(" "),e("radio",{attrs:{model:t.radio,name:"demoModal",value:"王者荣耀",label:"王者荣耀"}})],1)]),t._v(" "),e("modal",{ref:"loginModal",attrs:{title:"Login Modal"}},[e("div",{staticClass:"login-modal"},[e("text-field",{attrs:{label:"用户名",placeholder:"请输入用户名"}}),t._v(" "),e("text-field",{attrs:{label:"密码",placeholder:"请输入密码",type:"password"}}),t._v(" "),e("item-form",[e("ui-switch",{attrs:{label:"自动登录"}})],1)],1),t._v(" "),e("Button",{attrs:{text:"取消",fill:""},nativeOn:{click:function(o){t.hideModal("loginModal")}},slot:"footer"}),t._v(" "),e("Button",{attrs:{text:"登录",color:"red",fill:""},nativeOn:{click:function(o){t.hideModal("loginModal")}},slot:"footer"})],1),t._v(" "),e("alert",{ref:"alert",attrs:{title:t.alert.title,type:t.alert.type,msg:t.alert.msg}}),t._v(" "),e("confirm",{ref:"confirm",attrs:{title:t.confirm.title,"show-icon":"",msg:t.confirm.msg},on:{cancel:t.handlerCancer,sure:t.handlerSure}}),t._v(" "),e("prompt",{ref:"prompt",attrs:{title:t.prompt.title,msg:t.prompt.msg},on:{sure:t.handlerSure}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.0599ab128586be9d7003.js.map