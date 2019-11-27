<template>
  <div class="container">
    <div class="er-code">
      <img src="../../assets/img/productCenter/add/ErCode.png" />
    </div>
    <h3>{{$t('productCenter.addContent.description')}}</h3>
    <p>{{$t('productCenter.addContent.subDescription')}}</p>
  </div>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height 1080px
    background url("../../assets/img/productCenter/add/bg.png") no-repeat
    background-position center
    background-size cover
    display flex
    flex-direction column
    align-items center
    justify-content center
    .er-code
      img
        width 215px
        height 215px
     h3
       font-size 40px
       color #fff
       margin 60px 0 40px
       text-align center
     p
       font-size 24px
       color #c5c2cc
       text-align center
</style>
