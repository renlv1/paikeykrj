<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title">{{$t('fanEntertainment.fanSlideTwo.title')}}</h1>
      <p class="content-paragraph content-p">{{$t('fanEntertainment.fanSlideTwo.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('fanEntertainment.fanSlideTwo.content2')}}</p>
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
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
