<template>
  <div>
    <div class="banner"
         @click="handleClickBanner">
        <img :src="bannerImg"
             alt="banner"
             class="banner-img">
        <div class="banner-info">
          <div class="banner-title">{{this.sightName}}</div>
          <div class="banner-number">
            <span class="iconfont icon-photo">&#xe6dd;</span>11
          </div>
        </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>


  </div>

</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation,
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
