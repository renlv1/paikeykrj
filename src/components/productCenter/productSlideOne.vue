<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title">{{$t('productCenter.slideOne.title')}}</h1>
      <p class="productCenter-p" style="width: 9rem;">{{$t('productCenter.slideOne.subtitle')}}</p>
      <!--<a class="learnMore" href="http://finance.pi-group.biz/html/index.html"><button class="content-btn">{{$t('productCenter.slideOne.btn')}}</button></a>-->
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/css/lin-common.css'
.swiper-container
  .mainBox
    .productCenter-p
      margin-bottom 0.52rem
      font-size 0.24rem
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
