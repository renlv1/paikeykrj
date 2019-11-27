<template>
  <div class="ARdownload">
    <div class="swiper-container">
      <div class="swiper-slide">
        <div class="mainBox">
          <div class="content">
            <img class="discoverQr" src="../../assets/img/discovery/discoverQr.png" alt="">
            <div class="discoverContent">
              <h1 class="title"><span>π</span> +AR</h1>
              <p class="content-p">{{$t('ARdownload.content')}}</p>
              <p class="content-p2">{{$t('ARdownload.content2')}}</p>
              <a class="discoverBtn ios-btn" href="https://app.pi-group.biz/appdownload/us/ar.html"><img src="../../assets/img/discovery/ios.png" alt=""></a>
              <a class="discoverBtn android-btn" href="https://app.pi-group.biz/appdownload/us/ar.html"><img src="../../assets/img/discovery/android.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .ARdownload
    height: 100%
    position: relative
  .ARdownload
    .swiper-container
      .swiper-slide
        background url("../../assets/img/industries/indutriesThree.jpg")
        background-size: cover
        .mainBox
          .content
            .discoverContent
              .title
                margin-bottom .1rem
                span
                  line-height .6rem
              .content-p
                margin-bottom .22rem
              .content-p2
                margin-bottom 1.2rem
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
