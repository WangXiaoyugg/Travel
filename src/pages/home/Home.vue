<template>
  <div>
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
     <home-recommend></home-recommend>
     <home-weekend></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  mounted() {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
           .then(this.getHomeInfoSuccess)
           .catch(e => {
             console.log(e)
           })
    },
    getHomeInfoSuccess (res) {
      console.log(res)
    }
  }
}
</script>

<style>

</style>
