<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left bg-ar"></div>
      <div class="content-right">
        <h1>{{$t('productCenter.empire.title')}}</h1>
        <h3>{{$t('productCenter.empire.subtitle')}}</h3>
        <p>{{$t('productCenter.empire.content')}}</p>
        <a href="http://www.paik.im" class="learnMore"><button class="content-btn">{{$t('productCenter.empire.btn')}}</button></a>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .swiper-container
    .mainBox
      .content
        .content-left
          &.bg-ar
            background url("../../assets/img/productCenter/empire.png") no-repeat
            background-size cover
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
