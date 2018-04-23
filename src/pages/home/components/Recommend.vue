<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img alt="logo"
               :src="item.url"
               class="item-img" >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  data () {
    return {
      recommendList: [
        {id:'01', url:'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg', title:'世界花卉大观园',desc:'浪漫花海，完美呈现，无奇不有'},
        {id:'02', url:'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg', title:'世界花卉大观园',desc:'浪漫花海，完美呈现，无奇不有'},
        {id:'03', url:'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg', title:'世界花卉大观园',desc:'浪漫花海，完美呈现，无奇不有'},
        {id:'04', url:'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg', title:'世界花卉大观园',desc:'浪漫花海，完美呈现，无奇不有'},

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
.item
  display: flex
  height: 1.9rem
  overflow: hidden
  .item-img
    width: 1.6rem
    height: 1.6rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      background: #ff9300
      padding: 0 .2rem
      margin-top: .2rem
      color: #fff
      line-height: .44rem
      border-radius: .06rem
</style>
