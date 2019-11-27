<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title">{{$t('adult.slideTwo.title')}}</h1>
      <p class="content-paragraph content-p">{{$t('adult.slideTwo.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('adult.slideTwo.content2')}}</p>
      <a class="learnMore"><button class="content-btn">{{$t('adult.slideTwo.btn')}}</button></a>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .mainBox
    .content
      .content-paragraph
        width 9.4rem
        &.content-p
          font-size .2rem
        &.content-p2
          margin-bottom .4rem
      .learnMore
        .content-btn
          width 4rem
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
