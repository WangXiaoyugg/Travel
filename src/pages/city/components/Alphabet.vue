<template>
  <div class="list">
    <div class="item"
         v-for="(item, index) of letters"
         :key="index"
         :ref="item"
         @click="handleLetterClick"
         @touchstart.prevent="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let letter in this.cities) {
        letters.push(letter)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      const letter = e.target.innerText
      this.$emit('change', letter)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      this.timer = setTimeout(() => {
        // 字母A到 顶部的距离，不包括 绿色头部
        const headerHeight = 79
        const letterHeight = 20
        // 手指触摸滚动时 距离屏幕顶部的距离， 减去header高度，即列表滚动的距离;
        const touchY = e.touches[0].clientY - headerHeight
        // （滚动距离 - 起始距离） / 字母高度 =  滚动字母的索引
        const index = Math.floor((touchY - this.startY) / letterHeight)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }, 16)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
