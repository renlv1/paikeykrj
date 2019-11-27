<template>
  <div :style="{backgroundImage: 'url(' + bgOne + ')'}" class="discover_bg">
    <div :style="{backgroundImage: 'url(' + bgDoct + ')'}" class="discover_doct">
      <div class="discover_one_mark comment_mark">
        <div class="discover_one_content_wrapper content_wrapper">
          <div class="discover_one_title_wrapper title_wrapper">
            <span class="discover_one_title">{{$t('discoverDetail.discoverone.title')}}</span>
          </div>
          <!--<p class="discover_one_descripe">{{$t('discoverDetail.discoverone.descripe')}}</p>-->
          <div class="discover_one_text_wrapper">
            <p class="discover_one_topic" v-for="(item, index) in $t('discoverDetail.discoverone.topic')" :key="index">{{item}}</p>
          </div>
          <!--<vbtn>-->
            <!--<router-link class="btn" slot="button" to="/contact" tag="span">{{$t('discoverDetail.discoverone.btn')}}</router-link>-->
          <!--</vbtn>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vbtn from '../../btnComponents/commentBtn.vue'
  export default {
    data () {
      return {
        bgOne: require('../../../assets/img/imagesb/discoverDetail/entertainment_bg.jpg'),
        bgDoct: require('../../../assets/img/imagesb/sports/bg_doct.png')
      }
    },
    components: {
      vbtn
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/discoverDetail';
  .discover_one_content_wrapper {
    color: @default;
    .discover_one_title_wrapper {
      font-size: 1rem;
      .mb(.2rem);
      color: @default;
      .discover_one_title{
        font-family: font1;
      }
    }
    .discover_one_descripe {
      font-family:font2 ;
      font-size:.16rem;
      color: @f6f7ff;
      .pt(.24rem);
      .pb(.36rem);
    }
    .discover_one_text_wrapper{
      width: 9.1rem;
      color: @f6f7ff;
      .mb(.54rem);
      .discover_one_topic {
        font-size:.16rem;
        line-height: .32rem;
      }
    }
  }
</style>
