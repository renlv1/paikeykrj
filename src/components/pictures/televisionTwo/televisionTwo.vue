<template>
  <div class="television_two_wrapper" :style="{backgroundImage:'url(' + bgOne + ')'}">
    <div class="television_one_doct" :style="{backgroundImage:'url(' + bgDoct + ')'}">
      <div class="television_one_mark comment_mark" id="comment_mark">
        <div class="television_two_content_wrapper content_wrapper">
          <div class="television_two_title_wrapper title_wrapper">
            <span class="television_two_title">{{$t('television.televisionTwo.title')}}</span>
          </div>
          <div class="television_two_text_wrapper">
            <p class="television_two_topic" v-html="$t('television.televisionTwo.topic')"></p>
            <!--<div class="img_wrapper">-->
              <!--<img :src="imgbtn" @click="isShowVideo = true">-->
            <!--</div>-->
          </div>
        </div>
      </div>
      <div class="videoWrapper" v-show="isShowVideo">
        <video controls class="video" id="video">
          <source src="./static/video/pi_video.mp4" type="video/mp4">
          <source src="./static/video/pi_video.ogv" type="video/ogv">
          <source src="./static/video/pi_video.webm" type="video/webm">
          Your browser does not support the audio element.
        </video>
        <img :src="closeVideoImg" alt="关闭视频按钮" class="close_png" @click="closeVideo">
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bgOne: require('../../../assets/img/imagesb/television/television2.jpg'),
        bgDoct: require('../../../assets/img/imagesb/sports/bg_doct.png'),
        imgbtn: require('../../../assets/img/imagesb/television/button.png'),
        closeVideoImg: require('../../../assets/img/industries/closevideo.png'),
        isShowVideo: false
      }
    },
    methods: {
      closeVideo () {
        this.isShowVideo = false
        let video = document.getElementById('video')
        video.pause()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .television_two_wrapper{
    height:100%;
    width:100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .television_one_doct{
    height:100%;
    width:100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .television_two_content_wrapper {
    .television_two_title_wrapper {
      font-size: 1rem;
      color: @default;
      line-height: .6rem;
      .television_two_title {
        font-family: font1;
      }
    }
    .television_two_text_wrapper {
      width: 9.4rem;
      color: @f6f7ff;
      .mt(.24rem);
      font-family: font2;
      .television_two_topic {
        font-size:.16rem;
        line-height: .32rem;
      }
      .img_wrapper{
        width:1.46rem;
        .pt(.74rem);
        img{
          width:100%;
          &:hover{
            .cur;
          }
        }
      }
    }
  }

  .videoWrapper{
    .abs;
    .pc;
    width:60%;
    .video{
      width:100%;
    }
    .close_png{
      .abs;
      top:-.15rem;
      right:-.15rem;
      &:hover{
        .cur;
      }
    }
  }
</style>

