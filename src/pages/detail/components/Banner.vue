<template>
  <div>
    <div class="banner"
         @click="handleClickBanner">
        <img src="http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_600x330_f68eb231.jpg"
            alt="banner"
            class="banner-img">
        <div class="banner-info">
          <div class="banner-title">北京野生动物园(AAAA景区)</div>
          <div class="banner-number">
            <span class="iconfont icon-photo">&#xe6dd;</span>11
          </div>
        </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>

  </div>

</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p80/201211/07/c4c2ab01fa0a277693835fbb.jpg_r_800x800_70e5cfbd.jpg',
        'http://img1.qunarzz.com/sight/p0/1501/7d/bf80dd42eea3649a9fcb126bc9b594ba.water.jpg_r_800x800_8d93aab4.jpg',
      ],
      showGallary: false
    }
  },
  components: {
    CommonGallary,
  },
  methods: {
    handleClickBanner () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  overflow: hidden
  position: relative
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: .6rem
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex: 1
      padding: 0 .2rem
      font-size: .3rem
    .banner-number
      margin-top: .14rem
      height: .32rem
      line-height: .32rem
      padding: 0.02rem .4rem
      background-color: rgba(0, 0, 0, .8)
      border-radius: .2rem
      text-align: center
      font-size: .24rem
      .icon-photo
        font-size: .24rem
        margin-right: .1rem
</style>
