<template>
  <div class="list">
    <div class="item"
         v-for="(item,key) of cities"
         :key="key">{{key}}</div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  }
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

