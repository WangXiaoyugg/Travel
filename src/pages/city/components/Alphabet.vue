<template>
  <div class="list">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  width: .44rem
  position: absolute
  top: 1.58rem
  bottom: 0
  right: 0
  .item
    text-align: center
    color: $bgColor
    line-height: .4rem
</style>

