<template>
  <div>
    <router-link
      tag="div"
      to='/'
      class="header-abs"
      v-show="showAbs">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle">
      <router-link to='/'>
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>

</template>

<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacityStyle: 0
      },
    }
  },
  activated () {
    window.addEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if ( top  > 60 ) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false

      } else {
        this.showAbs = true
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  border-radius: .4rem
  background-color: rgba(0, 0, 0, .8)
  .header-back
    color: #fff
    font-size: .32rem
    line-height: .8rem
    height:.8rem
    text-align:center
.header-fixed
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  font-size: .3rem
  background-color: $bgColor
  color: #fff
  text-align: center
  position: fixed
  top: 0
  left: 0
  right: 0
  .header-fixed-back
    width: .64rem
    font-size: .4rem
    position: absolute
    top: 0
    left: 0
    color:#fff
    text-align: center
</style>
