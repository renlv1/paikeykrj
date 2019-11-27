<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title"><a class="logo"></a><span>π</span> + AR {{$t('industries.slideThree.title')}}</h1>
      <p class="content-paragraph content-p">{{$t('industries.slideThree.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('industries.slideThree.content2')}}</p>
      <router-link to="/ARdownload" class="play-btn"></router-link>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .swiper-container
    .mainBox
      .content
        .content-title
          .logo
            display inline-block
            width .7rem
            height .76rem
            background url("../../assets/img/industries/logo.png") no-repeat
            background-size cover
            margin-right .3rem
        .content-paragraph
          color #909199
        .play-btn
          background url("../../assets/img/industries/downArrow.png") no-repeat
          background-size cover
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
