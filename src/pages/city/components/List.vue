<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class='button-list'>
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class='button-list'>
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click='handleClickCity(item.name)'>
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list border-bottom">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleClickCity(innerItem.name)">{{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const elment = this.$refs[this.letter][0]
        this.scroll.scrollToElement(elment, 300)
      }
    }
  },
  methods: {
    handleClickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .title
    line-height: .5rem
    background-color: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.3%
      .button
        margin: .1rem
        padding: .1rem 0
        border-radius: .06rem
        text-align: center
        border: .02rem solid #ccc
  .item-list
    .item
      line-height: .76rem
      color: #666
      padding-left: .2rem
</style>
