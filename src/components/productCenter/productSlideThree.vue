<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left bg-ar"></div>
      <div class="content-right">
        <h1><span style="margin-right: .14rem">π</span>+AR</h1>
        <h3>{{$t('productCenter.slideThree.subtitle')}}</h3>
        <p style="margin-bottom: .1rem">{{$t('productCenter.slideThree.content')}}</p>
        <router-link to="/ARdownload" class="learnMore"><button class="content-btn">{{$t('productCenter.slideThree.btn')}}</button></router-link>
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
          background url("../../assets/img/productCenter/ar.png") no-repeat
          background-size cover
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
