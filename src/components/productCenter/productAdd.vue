<template>
  <div class="mainBox">
    <div class="content">
      <div class="content-left bg-pi"></div>
      <div class="content-right">
        <h1 v-html="$t('productCenter.addContent.title')"></h1>
        <h3>{{$t('productCenter.addContent.subtitle')}}</h3>
        <p style="margin-bottom: .26rem" v-html="$t('productCenter.addContent.content')"></p>
        <a v-if="isMobile" class="learnMore" href="http://topspeedweb.pi-group.biz/#/login">
          <button class="content-btn">{{$t('productCenter.addContent.btn')}}</button>
        </a>
        <a v-if="isPc" class="learnMore" @click="isPcM()">
          <button class="content-btn">{{$t('productCenter.addContent.btn')}}</button>
        </a>
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
            background url("../../assets/img/productCenter/add/logo.png") no-repeat
            background-size cover
</style>
<script>
export default {
  /* eslint-disable */
  data() {
    return {
      isMobile: false,
      isPc: false
    }
  },
  mounted() {
    this.isIos()
  },
  methods: {
    isIos() {
      if (/AppleWebKit.*mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        this.isMobile = true
      } else {
        this.isPc = true
      }
    },
    isPcM() {
      this.$router.push('/detail')
    }
  }
}
</script>
