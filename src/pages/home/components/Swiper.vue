<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="banner"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption:{
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
      },
      swiperList: [
        {id:'001', imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/c905d7879e288802.jpg_640x200_36a02c62.jpg'},
        {id:'002', imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ab/2d291e6cf2bc7f02.jpg_640x200_fa5f0167.jpg'},
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff !important
.wrapper
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 31.25%
  .swiper-img
    width: 100%

</style>
