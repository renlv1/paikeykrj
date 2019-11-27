<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title" v-html="$t('fanEntertainment.fanSlideOne.title')"></h1>
      <p class="content-paragraph content-p">{{$t('fanEntertainment.fanSlideOne.subtitle')}}</p>
      <p class="content-paragraph content-p2">{{$t('fanEntertainment.fanSlideOne.content')}}</p>
      <!--<router-link class="learnMore" to="/contact"><button class="content-btn">{{$t('fanEntertainment.fanSlideOne.btn')}}</button></router-link>-->
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .swiper-container
    .mainBox
      .content
        .content-paragraph
          &.content-p2
            margin-bottom .9rem
      .content-title
        span
          margin-right .2rem
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
