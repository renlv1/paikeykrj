<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title">{{$t('aboutUs.slideOne.title')}}</h1>
      <p class="content-paragraph content-p">{{$t('aboutUs.slideOne.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('aboutUs.slideOne.content2')}}</p>
      <p class="content-paragraph content-p3">{{$t('aboutUs.slideOne.content3')}}</p>
      <a class="play-btn" @click="openCloseVideo"></a>
    </div>
    <div class="playVideo" v-show="aboutVideoFlag">
      <div class="videoBox">
        <video controls="controls" ref="aboutVideo">
          <source src="./static/video/pi_imageFilm.mp4" type="video/mp4">
        </video>
        <img class="closevideoBtn" src="../../assets/img/industries/closevideo.png" alt="" @click="openCloseVideo">
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .swiper-container
    .mainBox
      .content
        .content-paragraph
          &.content-p3
            margin-bottom .2rem
        .play-btn
          background url("../../assets/img/about/paikeyingshi-3-vido.png") no-repeat
          background-size cover
      .playVideo
        top 0!important
</style>
<script>
    export default{
      data () {
        return {
          aboutVideoFlag: false
        }
      },
      methods: {
        openCloseVideo () {
          this.aboutVideoFlag = !this.aboutVideoFlag
          this.$refs.aboutVideo.pause()
        }
      }
    }
</script>
