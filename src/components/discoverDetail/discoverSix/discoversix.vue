
<template>
  <div :style="{backgroundImage: 'url(' + bgOne + ')'}" class="discover_bg">
    <div :style="{backgroundImage: 'url(' + bgDoct + ')'}" class="discover_doct">
      <div class="discover_five_mark comment_mark" id="comment_mark">
        <div class="discover_five_content_wrapper content_wrapper">
          <div class="discover_five_content_box">
            <div class="discover_five_title_wrapper title_wrapper">
              <p class="discover_five_title" v-html="$t('discoverDetail.discoverSix.title')"></p>
            </div>
            <div class="discover_five_text_wrapper">
              <p class="discover_five_topic" v-for="(item, index) in $t('discoverDetail.discoverSix.topic')" :key="index">{{item}}</p>
            </div>
          </div>
          <div class="rulesslide">
            <img :src="rulesslide">
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
        bgOne: require('../../../assets/img/imagesb/discoverDetail/map_bg.png'),
        rulesslide: require('../../../assets/img/imagesb/discoverDetail/rulesslide.png'),
        bgDoct: require('../../../assets/img/imagesb/sports/bg_doct.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/discoverDetail';
  .discover_five_content_wrapper {
    .flex;
    .discover_five_content_box{
      width: 9.1rem;
      .mr(.5rem);
      .discover_five_title_wrapper {
        font-size: 1rem;
        color: @default;
        .discover_five_title {
          font-family: font1;
        }
      }
      .discover_five_text_wrapper {
        color: @f6f7ff;
        .discover_five_topic {
          font-family: font2;
          font-size:.16rem;
          line-height: .32rem;
        }
      }
    }
    .rulesslide{
      width:5.29rem;
      height:5.96rem;
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
