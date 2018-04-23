<template>
  <div>
    <div class="recommend-title">周末去哪啊</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img alt="logo"
               :src="item.url"
               class="item-img" >
          </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeWeekend',
  data () {
    return {
      recommendList: [
        {id:'01', url:'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg', title:'世界花卉大观园',desc:'浪漫花海，完美呈现，无奇不有'},
        {id:'02', url:'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg', title:'世界花卉大观园',desc:'浪漫花海，完美呈现，无奇不有'},
        {id:'03', url:'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg', title:'世界花卉大观园',desc:'浪漫花海，完美呈现，无奇不有'},
        {id:'04', url:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg', title:'世界花卉大观园',desc:'浪漫花海，完美呈现，无奇不有'},

      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  line-height: .8rem
  background-color: #eee
  text-indent: .2rem
  margin-top: .2rem
.item-img-wrapper
  width: 100%
  overflow: hidden
  height: 0
  padding-bottom: 33.5%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
