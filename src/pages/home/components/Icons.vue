<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="grid" v-for="item of page" :key="item.id">
          <div class="imgCt">
            <img class="icon-img"
                 :src="item.imgUrl"
            alt="">
          </div>
          <p class="img-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>


  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

.wrapper >>> .swiper-container
  padding-bottom: 50%
  height: 0
.wrapper
  margin-top: .1rem
  .grid
    position: relative
    overflow: hidden
    float: left
    width 25%
    height:0
    padding-bottom: 25%
    .imgCt
      overflow: hidden
      position: absolute
      top: 0
      left: 0
      right: 0
      box-sizing: border-box
      padding: .1rem
      bottom: .44rem
      .icon-img
        height: 100%
        display: block
        margin: 0 auto
    .img-desc
        position: absolute
        bottom:0
        left:0
        right:0
        text-align: center
        line-height: .44rem
        height: .44rem
        color: $darkTextColor
        ellipsis()

</style>
