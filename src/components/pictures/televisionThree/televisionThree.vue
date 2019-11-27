<template>
  <div class="television_three_wrapper" :style="{backgroundImage:'url(' + bgOne + ')'}">
    <div class="television_three_doct" :style="{backgroundImage:'url(' + bgDoct + ')'}">
      <div class="mark comment_mark" id="comment_mark">
        <div class="television_three_content_wrapper content_wrapper" id="television_three_content_wrapper">
          <div class="television_three_title_wrapper">
            <span class="television_three_title">{{$t('television.televisionThree.title')}}</span>
          </div>
          <p class="television_three_descripe" v-html="$t('television.televisionThree.descripe')"></p>
        </div>
      </div>
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
  .television_three_wrapper{
    height:100%;
    width:100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .television_three_doct{
    height:100%;
    width:100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .television_three_content_wrapper{
    .television_three_title_wrapper{
      font-family: font1;
      font-size:1rem;
      color:@default;
      line-height: .6rem;
      .mt(.54rem);
      .mb(.24rem);
    }
    .television_three_descripe{
      font-size:.16rem;
      font-family: font2;
      color:@f6f7ff;
      word-break: keep-all;
      line-height:.32rem;
    }
  }
</style>
