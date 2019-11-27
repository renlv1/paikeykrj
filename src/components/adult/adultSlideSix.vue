<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title">{{$t('adult.slideSix.title')}}</h1>
      <p class="content-paragraph content-p">{{$t('adult.slideSix.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('adult.slideSix.content2')}}</p>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .mainBox
    .content
      .content-paragraph
        &.content-p
          margin-bottom .1rem
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
