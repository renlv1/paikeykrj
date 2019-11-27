<template>
  <div :style="{backgroundImage: 'url(' + bgOne + ')'}" class="discover_bg">
    <div :style="{backgroundImage: 'url(' + bgDoct + ')'}" class="discover_doct">
      <div class="discover_six_mark comment_mark" id="comment_mark">
        <div class="discover_six_content_wrapper content_wrapper">
          <div class="img_wrapper">
            <img :src="earnings">
          </div>
          <div class="discover_six_content_box">
            <div class="discover_six_title_wrapper title_wrapper">
              <p class="discover_six_title">{{$t('discoverDetail.discoverSeven.title')}}</p>
            </div>
            <div class="discover_six_text_wrapper">
              <p class="discover_six_topic" v-for="(item, index) in $t('discoverDetail.discoverSeven.topic')" :key="index">{{item}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bgOne: require('../../../assets/img/imagesb/discoverDetail/doct_bg.png'),
        earnings: require('../../../assets/img/imagesb/discoverDetail/earnings.png'),
        bgDoct: require('../../../assets/img/imagesb/sports/bg_doct.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/discoverDetail';
  .discover_six_content_wrapper {
    color: @default;
    .flex;
    .img_wrapper{
      width:1.5rem;
      img{
        width:100%;
      }
    }
    .discover_six_content_box{
      flex:1;
      .pl(.54rem);
      .pt(.2rem);
      .discover_six_title_wrapper {
        font-size: 1rem;
        .discover_six_title{
          font-family: font1;
        }
      }
      .discover_six_text_wrapper{
        .pb(.65rem);
        .discover_six_topic{
          font-family:font2 ;
          width:8.45rem;
          font-size:.16rem;
          color:@f6f7ff;
          line-height:.32rem;
          word-break: keep-all;
        }
      }
    }
  }
</style>
