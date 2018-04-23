<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  overflow: hidden
  padding: 0 .1rem
  height: .72rem
  background-color: $bgColor
  .search-input
    width: 100%
    height: .64rem
    line-height: .64rem
    color: #666
    padding: 0 .1rem
    box-sizing: border-box
    text-align: center
    border-radius: .03rem
</style>
