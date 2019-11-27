<template>
  <div :style="{backgroundImage: 'url(' + bgOne + ')'}" class="discover_bg">
    <div :style="{backgroundImage: 'url(' + bgDoct + ')'}" class="discover_doct">
      <div class="discover_two_mark comment_mark">
        <div class="discover_two_content_wrapper content_wrapper">
          <div class="discover_two_title_wrapper title_wrapper">
            <span class="discover_two_title">{{$t('discoverDetail.discovertwo.title')}}</span>
          </div>
          <div class="discover_two_text_wrapper">
            <P class="discover_two_text" v-for="(item, index) in $t('discoverDetail.discovertwo.topic')" :key="index">{{item}}</P>
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
        bgOne: require('../../../assets/img/imagesb/discoverDetail/business.jpg'),
        bgDoct: require('../../../assets/img/imagesb/sports/bg_doct.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/discoverDetail';
  .discover_two_content_wrapper {
    color: @default;
    .discover_two_title_wrapper {
      font-size: 1rem;
      line-height:.6rem;
      .discover_two_title{
        font-family: font1;
      }
    }
    .discover_two_text_wrapper{
      .pt(.32rem);
      .pb(.65rem);
      .discover_two_text{
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
