<template>
  <div :style="{backgroundImage: 'url(' + bgOne + ')'}" class="discover_bg">
    <div class="discover_doct">
      <div class="discover_seven_mark comment_mark" id="comment_mark">
        <div class="discover_seven_content_wrapper content_wrapper">
          <div class="img_wrapper">
            <img :src="speed">
          </div>
          <div class="discover_seven_content_box">
            <div class="discover_seven_title_wrapper title_wrapper">
              <p class="discover_seven_title" v-html="$t('discoverDetail.discoverEight.title')"></p>
            </div>
            <p class="discover_seven_descripe">{{$t('discoverDetail.discoverEight.descripe')}}</p>
            <div class="discover_seven_text_wrapper">
              <p class="discover_seven_topic"
                 v-for="(item, index) in $t('discoverDetail.discoverEight.topic')"
                 :key="index">{{index + 1}}. {{item.title}}<br>{{item.info}}</p>
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
        bgOne: require('../../../assets/img/imagesb/discoverDetail/rect.jpg'),
        speed: require('../../../assets/img/imagesb/discoverDetail/AR.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/discoverDetail';
  .discover_seven_content_wrapper {
    .flex;
    .img_wrapper {
      width: 1.5rem;
      img {
        width: 100%;
      }
    }
    .discover_seven_content_box {
      width: 9.1rem;
      flex: 1;
      .pl(.54rem);
      .pt(.15rem);
      .discover_seven_title_wrapper {
        font-size: 1rem;
        color: @default;
        .discover_seven_title {
          font-family: font1;
        }
      }
      .discover_seven_descripe{
        color:@f6f7ff;
       font-size:.16rem;
        line-height:.32rem;
        .pb(.38rem);
      }
      .discover_seven_text_wrapper {
        color: @f6f7ff;
        width:8.76rem;
        font-family: font2;
        .discover_seven_topic {
          font-size:.16rem;
          line-height: .32rem;
        }
      }
    }
  }
</style>
