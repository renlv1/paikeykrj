<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title" v-html="$t('fanEntertainment.fanSlideThree.title')"></h1>
      <p class="content-paragraph content-p">{{$t('fanEntertainment.fanSlideThree.content')}}</p>
      <p class="content-paragraph content-p2" v-html="$t('fanEntertainment.fanSlideThree.content2')"></p>
      <p class="content-paragraph content-p3">{{$t('fanEntertainment.fanSlideThree.content3')}}</p>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .swiper-container
    .mainBox
      .content
        .content-paragraph
          width 11.24rem
          color #909199
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
