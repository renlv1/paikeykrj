<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left bg-ar"></div>
      <div class="content-right">
        <h1><span>Discovery</span>{{$t('productCenter.yuEbao.title')}}</h1>
        <h3>{{$t('productCenter.yuEbao.subtitle')}}</h3>
        <p>{{$t('productCenter.yuEbao.content')}}</p>
        <router-link to="/discovery" class="learnMore"><button class="content-btn">{{$t('productCenter.yuEbao.btn')}}</button></router-link>
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
            background url("../../assets/img/productCenter/yuE.png") no-repeat
            background-size cover
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
