<template>
  <div class="wrapper">
    <div class="grid">
      <div class="imgCt">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
         alt="">
      </div>

      <p class="img-desc">热门景点</p>
    </div>
    <div class="grid">
      <div class="imgCt">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
         alt="">
      </div>

      <p class="img-desc">热门景点</p>
    </div>
    <div class="grid">
      <div class="imgCt">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
         alt="">
      </div>

      <p class="img-desc">热门景点</p>
    </div>
    <div class="grid">
      <div class="imgCt">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
         alt="">
      </div>

      <p class="img-desc">热门景点</p>
    </div>
    <div class="grid">
      <div class="imgCt">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
         alt="">
      </div>

      <p class="img-desc">热门景点</p>
    </div>
    <div class="grid">
      <div class="imgCt">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
         alt="">
      </div>

      <p class="img-desc">热门景点</p>
    </div>
    <div class="grid">
      <div class="imgCt">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
         alt="">
      </div>

      <p class="img-desc">热门景点</p>
    </div>
    <div class="grid">
      <div class="imgCt">
        <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
         alt="">
      </div>

      <p class="img-desc">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.wrapper
  height: 0
  overflow: hidden
  padding-bottom: 50%
  .grid
    position: relative
    overflow: hidden
    float: left
    width 25%
    height:0
    padding-bottom: 25%
    .imgCt
      overflow: hidden
      position: absolute
      top: 0
      left: 0
      right: 0
      box-sizing: border-box
      padding: .1rem
      bottom: .44rem
      .icon-img
        height: 100%
        display: block
        margin: 0 auto
    .img-desc
        position: absolute
        bottom:0
        left:0
        right:0
        text-align: center
        line-height: .44rem
        height: .44rem
        color: $darkTextColor
</style>
