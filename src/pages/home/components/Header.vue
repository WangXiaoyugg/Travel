<template>
  <div class="header">
    <div class="header-left">
       <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont icon-arrow">&#xe65c;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  display: flex
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .icon-back
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    background-color: #fff
    margin-top: .12rem
    margin-left: .2rem
    height: .64rem
    line-height: .64rem
    border-radius: .1rem
    padding-left: .2rem
    color: #ccc
  .header-right
    width: 1.24rem
    float: right
    text-align: center
    color: #fff
    .icon-arrow
      font-size: .34rem
      margin-left : -0.08rem
</style>
