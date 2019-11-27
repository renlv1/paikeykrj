<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title">{{$t('industries.slideOne.title')}}</h1>
      <p class="content-paragraph content-p">{{$t('industries.slideOne.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('industries.slideOne.content2')}}</p>
      <p class="content-paragraph content-p3">{{$t('industries.slideOne.content3')}}</p>
      <router-link class="learnMore" to="/contact"><button class="content-btn">{{$t('industries.slideOne.btn')}}</button></router-link>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .swiper-container
    .mainBox
      .content
        .content-paragraph
          &.content-p
            margin-top -.1rem
          &.content-p3
            margin-bottom .2rem
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
