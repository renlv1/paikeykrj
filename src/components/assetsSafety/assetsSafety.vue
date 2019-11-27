<template>
  <div class="assetsSafety">
    <div class="swiper-container">
      <div class="swiper-slide">
        <div class="mainBox">
          <div class="content">
            <img class="discoverQr" src="../../assets/img/assetsSafety/qr.png" alt="">
            <div class="discoverContent">
              <h1 class="title"><i>π</i>{{$t('assetsSafety.title')}}</h1>
              <p class="content-p">{{$t('assetsSafety.content')}}</p>
              <p class="content-p2">{{$t('assetsSafety.content2')}}</p>
              <router-link to="/ARdownload" class="discoverBtn">{{$t('assetsSafety.btn')}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/css/lin-common.css'
  .assetsSafety
    height: 100%
    position: relative
  .assetsSafety
    .swiper-container
      .swiper-slide
        background url("../../assets/img/industries/indutriesThree.jpg")
        background-size: cover
        .mainBox
          .content
            .discoverContent
              .title
                margin-bottom .1rem
                line-height 1.2rem
                i
                  line-height .6rem
                  font-style normal
                  font-family Microsoft_YaHei_UI
              .content-p
                margin-bottom .28rem
              .content-p2
                margin-bottom 1.1rem
              .discoverBtn
                line-height .56rem
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
