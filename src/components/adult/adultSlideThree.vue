<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title">{{$t('adult.slideThree.title')}}</h1>
      <p class="content-paragraph content-p">{{$t('adult.slideThree.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('adult.slideThree.content2')}}</p>
      <a class="learnMore" @click="alertMsg"><button class="content-btn">{{$t('adult.slideThree.btn')}}</button></a>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .mainBox
    .content
      .content-paragraph
        width 9.34rem
        &.content-p
          font-size .2rem
        &.content-p2
          margin-bottom .9rem
      .learnMore
        .content-btn
          width 4rem
</style>
<script>
  export default{
    data () {
      return {}
    },
    methods: {
      alertMsg () {
        alert('我们的人员正在努力开发中...')
      }
    }
  }
</script>
