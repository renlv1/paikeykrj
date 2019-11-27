<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left"></div>
      <div class="content-right">
        <h1>Discovery</h1>
        <h3>{{$t('productCenter.slideTwo.subtitle')}}</h3>
        <p v-html="$t('productCenter.slideTwo.content')"></p>
        <router-link class="learnMore" to="/discovery"><button class="content-btn">{{$t('productCenter.slideTwo.btn')}}</button></router-link>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/css/lin-common.css'
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
