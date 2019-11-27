<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left bg-pay"></div>
      <div class="content-right">
        <h1><span style="margin-right: .14rem">π</span>{{$t('productCenter.slideFour.title')}}</h1>
        <h3>{{$t('productCenter.slideFour.subtitle')}}</h3>
        <p style="margin-bottom: .6rem" v-html="$t('productCenter.slideFour.content')"></p>
        <router-link to="/discovery" class="learnMore"><button class="content-btn">{{$t('productCenter.slideFour.btn')}}</button></router-link>
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
        &.bg-pay
          background url("../../assets/img/productCenter/pay.png") no-repeat
          background-size cover
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
