<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title" v-html="$t('adult.slideOne.title')"></h1>
      <p class="content-paragraph content-p">{{$t('adult.slideOne.content')}}</p>
      <p class="content-paragraph content-p2" v-html="$t('adult.slideOne.content2')"></p>
      <!--<a class="learnMore" href="#"><button class="content-btn">{{$t('adult.slideOne.btn')}}</button></a>-->
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .mainBox
    .content
      .content-paragraph
        width 9.4rem
        &.content-p2
          margin-bottom .4rem
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
