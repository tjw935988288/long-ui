<template>
<div class="ui-page">
  <header-bar>
    <icon-button slot="left" @click.native="back" :size="36" icon="navigate_before"></icon-button>
    <span>Popup</span>
  </header-bar>
  <scroll-view class="center-block">
    <button-area>
      <Button text="上面弹出" @click.native="open('top')" raised></Button>
      <Button text="下面弹出" @click.native="open('bottom')" raised></Button>
      <Button text="左边弹出" @click.native="open('left')" raised></Button>
      <Button text="右边弹出" @click.native="open('right')" raised></Button>
    </button-area>
  </scroll-view>
  <popup position="bottom" class="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
    <div class="demo-popup-bar">
      <span>弹出</span>
      <a href="javascript:;" class="demo-link" @click.native="close('bottom')">关闭</a>
    </div>
    <content-block>
      Popup 弹出框组件，可以从上下左右四个方位弹出，也可以直接渐变透明度显示，弹出框的宽度高度需要自己设置
    </content-block>
  </popup>
  <popup position="top" :overlay="false" class="demo-popup-top" :open="topPopup">
    更新成功
  </popup>
  <popup position="left" class="demo-popup-left" :open="leftPopup" @close="close('left')">
    <button-area>
      <Button text="关闭弹框" @click.native="close('left')" fill color="blue" raised></Button>
    </button-area>
  </popup>
  <popup position="right" class="demo-popup-right" :open="rightPopup" @close="close('right')">
    <button-area>
      <Button text="关闭弹框" @click.native="close('right')" fill color="blue" raised></Button>
    </button-area>
  </popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.ui-center-block{
  display: flex;
  align-items: center;
}
.demo-popup-bottom {
  width: 100%;
}
.demo-popup-bar{
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #474a4f;
  color:#FFF;
  padding-left: 10px;
  font-size: 16px;
}
.demo-link{
  display: flex;
  align-items: center;
  color: #FFF;
  text-decoration: none;
  height: 48px;
  padding-left: 10px;
  padding-right: 10px;
}
.demo-popup-top{
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7)!important;
  color: #fff;  
}
.demo-popup-left{
  display: flex;
  width: 85%;
  height: 100%;
  align-items: center;
}
.demo-popup-right{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>
