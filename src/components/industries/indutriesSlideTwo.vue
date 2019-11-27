<template>
  <div class="mainBox">
    <div class="content">
      <!--<h1 class="content-title">{{$t('industries.slideTwo.title')}}</h1>-->
      <p class="content-paragraph content-p">{{$t('industries.slideTwo.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('industries.slideTwo.content2')}}</p>
      <a class="play-btn" @click="toggleVideo"></a>
    </div>
    <div class="playVideo" v-show="videoFlag">
      <div class="videoBox">
        <video controls="controls" ref="indutriesVideo">
          <source src="./static/video/pi_video.mp4" type="video/mp4">
          <source src="./static/video/pi_video.ogv" type="video/ogv">
          <source src="./static/video/pi_video.webm" type="video/webm">
        </video>
        <img class="closevideoBtn" src="../../assets/img/industries/closevideo.png" alt="" @click="toggleVideo">
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .swiper-container
    .mainBox
      .content
        .play-btn
          background url("../../assets/img/about/paikeyingshi-3-vido.png") no-repeat
          background-size cover
</style>
<script>
  export default{
    data () {
      return {
        videoFlag: false
      }
    },
    methods: {
      toggleVideo () {
        this.videoFlag = !this.videoFlag
        this.$refs.indutriesVideo.pause()
      }
    }
  }
</script>
