<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left bg-pi"></div>
      <div class="content-right">
        <h1 v-html="$t('productCenter.slideFive.title')"></h1>
        <h3>{{$t('productCenter.slideFive.subtitle')}}</h3>
        <p style="margin-bottom: .26rem" v-html="$t('productCenter.slideFive.content')"></p>
        <a class="learnMore" href="https://stock.pigamewallet.com/#/login"><button class="content-btn">{{$t('productCenter.slideFive.btn')}}</button></a>
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
        &.bg-pi
          background url("../../assets/img/productCenter/pi.png") no-repeat
          background-size cover
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
