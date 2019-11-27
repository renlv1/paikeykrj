<template>
  <div class="homeWrapper">
    <h1 class="slideTitle" v-html="$t('header.sideSixdown1.sideSixdown1-1')"></h1>
    <p class="slideTxt">{{$t('header.sideSixdown1.sideSixdown1-2')}}</p>
    <a class="play-btn" @click="openCloseVideo" :style="{backgroundImage:'url('+play+')'}"></a>
    <div class="playVideo" v-show="aboutVideoFlag">
      <div class="videoBox">
        <video controls="controls" ref="aboutVideo">
          <source src="./static/video/paifu.mp4" type="video/mp4">
        </video>
        <img class="closevideoBtn" src="../../assets/img/industries/closevideo.png" alt="" @click="openCloseVideo">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        play: require('../../assets/img/allen/index_video.png'),
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

<style lang="css" scoped>
  .homeWrapper{
    width: 100%;
    text-align: left;
    padding-left:15% ;
  }
  .slideTitle{
    font-family: font1;
    font-size: 1rem;
    font-weight: normal;
  }
  .slideTxt{
    max-width: 9.2rem;
    font-size: 0.18rem;
    line-height: 0.36rem;
    font-family: font2;
    text-align: justify;
  }
  .play-btn{
    display: block;
    width: 1.46rem;
    height: 1.46rem;
    cursor: pointer;
    margin-top: 50px;
    background-repeat: no-repeat;
    background-size: cover;
  }
 .playVideo {
    position: absolute;
    top: 0!important;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    z-index: 2000;
  }
 .playVideo .videoBox {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
 .playVideo .videoBox video {
    width: 100%;
  }
 .playVideo .videoBox .closevideoBtn {
    position: absolute;
    right: -15px;
    top: -15px;
    cursor: pointer;
  }
</style>

