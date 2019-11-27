<template>
  <div :style="{backgroundImage: 'url(' + bgOne + ')'}" class="discover_bg">
    <div :style="{backgroundImage: 'url(' + bgDoct + ')'}" class="discover_doct">
      <div class="discover_four_mark comment_mark" id="comment_mark">
        <div class="discover_four_content_wrapper content_wrapper">
          <div class="discover_four_title_wrapper title_wrapper">
            <p class="discover_four_title">{{$t('discoverDetail.discoverFour.title')}}</p>
          </div>
          <div class="discover_four_text_wrapper">
            <p class="discover_four_topic" v-for="(item, index) in $t('discoverDetail.discoverFour.topic')" :key="index">{{item}}</p>
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
        bgOne: require('../../../assets/img/imagesb/discoverDetail/poor.jpg'),
        bgDoct: require('../../../assets/img/imagesb/sports/bg_doct.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/discoverDetail';
  .discover_four_content_wrapper {
    color: @default;
    .discover_four_title_wrapper {
      font-size: 1rem;
      line-height:.6rem;
      .discover_four_title{
        font-family: font1;
      }
    }
    .discover_four_text_wrapper{
      .pt(.32rem);
      .pb(.65rem);
      .discover_four_topic{
        font-family:font2 ;
        width:9.4rem;
        font-size:.16rem;
        color:@f6f7ff;
        line-height:.32rem;
        word-break: keep-all;
      }
    }
  }
</style>
