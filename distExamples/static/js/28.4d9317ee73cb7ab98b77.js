webpackJsonp([28],{477:function(t,e,n){function o(t){n(591)}var i=n(1)(n(510),n(622),o,"data-v-792e7114",null);t.exports=i.exports},510:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{actionSheet:{show:!1,showCancel:!0,actions:[{isLabel:!0,name:"选择一个你喜欢的"},{name:"守望先锋",click:function(){t.showMsg("守望先锋")}},{name:"炉石传说",click:function(){t.showMsg("炉石传说")}},{name:"英雄联盟",color:"red",click:function(){t.showMsg("英雄联盟")}},{name:"剑灵",click:function(){t.showMsg("剑灵")}}]},modal:{show:!1,msg:"",title:"你选择的是"}}},methods:{back:function(){window.history.back()},showMsg:function(t){this.modal.msg=t.name,this.modal.show=!0,this.$refs.modal.open()},showActionSheet:function(t){this.actionSheet.show=!0,this.actionSheet.showCancel=!t},hideActionSheet:function(){this.actionSheet.show=!1}},watch:{topPopup:function(t){var e=this;t&&setTimeout(function(){e.topPopup=!1},2e3)}}}},561:function(t,e,n){e=t.exports=n(474)(!0),e.push([t.i,".center-block[data-v-792e7114]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}","",{version:3,sources:["/www/myWorkFolder/long-ui/srcExamples/pages/actionSheet.vue"],names:[],mappings:"AACA,+BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B",file:"actionSheet.vue",sourcesContent:["\n.center-block[data-v-792e7114]{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"],sourceRoot:""}])},591:function(t,e,n){var o=n(561);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(475)("023acdde",o,!0)},622:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-page"},[n("header-bar",[n("icon-button",{attrs:{size:36,icon:"navigate_before"},nativeOn:{click:function(e){t.back(e)}},slot:"left"}),t._v(" "),n("span",[t._v("Action Sheet")])],1),t._v(" "),n("scroll-view",{staticClass:"center-block"},[n("button-area",[n("Button",{attrs:{text:"点击弹出 Action Sheet",raised:""},nativeOn:{click:function(e){t.showActionSheet()}}}),t._v(" "),n("Button",{attrs:{text:"不带 cancel 按钮的",raised:""},nativeOn:{click:function(e){t.showActionSheet(!0)}}})],1)],1),t._v(" "),n("action-sheet",{attrs:{actions:t.actionSheet.actions,open:t.actionSheet.show,showCancel:t.actionSheet.showCancel},on:{showMsgModal:t.showMsg,close:function(e){t.hideActionSheet()}}}),t._v(" "),n("modal",{ref:"modal",attrs:{title:t.modal.title,msg:t.modal.msg}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=28.4d9317ee73cb7ab98b77.js.map