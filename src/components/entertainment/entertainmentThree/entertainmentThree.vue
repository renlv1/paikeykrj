<template>
      <div class="mark comment_mark" id="comment_mark">
        <div class="entertainment_three_content_wrapper content_wrapper" id="entertainment_three_content_wrapper">
          <div class="entertainment_three_title_wrapper">
            <span class="entertainment_three_title">{{$t('entertainment.entertainmentThree.title')}}</span>
          </div>
          <p class="entertainment_three_descripe" v-html="$t('entertainment.entertainmentThree.descripe')"></p>
        </div>
      </div>
</template>
<script>
  export default {
    data () {
      return {
        bgOne: require('../../../assets/img/imagesb/television/television1.png'),
        bgDoct: require('../../../assets/img/imagesb/sports/bg_doct.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .entertainment_three_wrapper{
    height:100%;
    width:100%;
    background-repeat: no-repeat;
  }
  .entertainment_three_content_wrapper{
    .entertainment_three_title_wrapper{
      font-family: font1;
      font-size:1rem;
      color:@default;
      line-height: .6rem;
      .mt(.54rem);
      .mb(.24rem);
    }
    .entertainment_three_descripe{
      font-family: font2;
      font-size:.16rem;
      color:@f6f7ff;
      word-break: keep-all;
      line-height:.32rem;
    }
  }
</style>
