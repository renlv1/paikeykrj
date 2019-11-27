<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left bg-pi"></div>
      <div class="content-right">
        <h1 style="margin-bottom: 0.08rem" v-html="$t('productCenter.slideSix.title')"></h1>
        <h3>{{$t('productCenter.slideSix.subtitle')}}</h3>
        <p style="margin-bottom: .58rem">{{$t('productCenter.slideSix.content')}}</p>
        <a class="learnMore" href="https://www.pigamewallet.com/doc/publicaccount/index.html#/login"><button class="content-btn">{{$t('productCenter.slideSix.btn')}}</button></a>
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
