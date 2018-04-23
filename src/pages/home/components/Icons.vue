<template>
  <div class="wrapper">
    <swiper >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="grid" v-for="item of page" :key="item.id">
          <div class="imgCt">
            <img class="icon-img"
                 :src="item.url"
            alt="">
          </div>
          <p class="img-desc">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>


  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList:[
        {id:'001', url:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", text:'景点门票'},
        {id:'002', url:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png", text:'必游榜单'},
        {id:'003', url:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png', text:'踏青赏花'},
        {id:'004', url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', text:'一日游'},
        {id:'005', url:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", text:'景点门票'},
        {id:'006', url:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png", text:'必游榜单'},
        {id:'007', url:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png', text:'踏青赏花'},
        {id:'008', url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', text:'一日游'},
        {id:'009', url:'http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png', text:'周边游'},
      ],
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
