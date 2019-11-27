<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left bg-ar"></div>
      <div class="content-right">
        <h1><span style="margin-right: .14rem">π</span>{{$t('productCenter.Fund.title')}}</h1>
        <h3>{{$t('productCenter.Fund.subtitle')}}</h3>
        <p>{{$t('productCenter.Fund.content')}}</p>
        <router-link to="/discovery" class="learnMore"><button class="content-btn">{{$t('productCenter.Fund.btn')}}</button></router-link>
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
            background url("../../assets/img/productCenter/fund.png") no-repeat
            background-size cover
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
