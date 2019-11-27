<template>
  <div class="mainBox">
    <div class="content">
      <img class="discoverQr" src="../../assets/img/discovery/discoveryPi.jpg" alt="">
      <div class="discoverContent">
        <h1 class="title">DISCOVERY</h1>
        <h1 class="subtitle">{{$t('discover.slideOne.subtitle')}}</h1>
        <p class="content-p">{{$t('discover.slideOne.content')}}</p>
        <p class="content-p2">{{$t('discover.slideOne.content2')}}<router-link to="/assetsSafety">{{$t('discover.slideOne.routerLink')}}</router-link></p>
        <a class="discoverBtn ios-btn" href="https://app.pi-group.biz/appdownload/us/pi.html"><img src="../../assets/img/discovery/ios.png" alt=""></a>
        <a class="discoverBtn android-btn" href="https://app.pi-group.biz/appdownload/us/pi.html"><img src="../../assets/img/discovery/android.png" alt=""></a>
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
