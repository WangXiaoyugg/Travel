<template>
  <div class="wrapper">
    城市选择
    <router-link to='/'>
      <div class="iconfont back-index">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.wrapper
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  font-size: .32rem
  background-color: $bgColor
  color: #fff
  text-align: center
  position: relative
  .back-index
    width: .64rem
    font-size: .4rem
    position: absolute
    top: 0
    left: 0
    color:#fff
    text-align: center
</style>
