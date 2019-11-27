<template>
  <div class="entertainment_one_mark comment_mark">
    <div class="entertainment_one_content_wrapper content_wrapper">
      <div class="entertainment_one_title_wrapper title_wrapper">
        <span class="pai" v-if="$t('entertainment.entertainmentOne.pai') !== ''">{{$t('entertainment.entertainmentOne.pai')}}</span>
        <span class="entertainment_one_title">{{$t('entertainment.entertainmentOne.title')}}</span>
      </div>
      <p class="entertainment_one_descripe">{{$t('entertainment.entertainmentOne.descripe')}}</p>
      <div class="entertainment_one_text_wrapper">
        <!--<p class="entertainment_one_topic">{{$t('entertainment.entertainmentOne.topic')}}</p>-->
        <p class="entertainment_one_text_content" v-for="(item, index) in $t('entertainment.entertainmentOne.content')" :key="index">{{item}}</p>
      </div>
      <!--<vbtn>-->
        <!--<a class="btn" slot="button" href="http://entertainment.pi-group.biz/html/index.html" target="_blank">{{$t('entertainment.entertainmentOne.btn')}}</a>-->
      <!--</vbtn>-->
    </div>
  </div>
</template>
<script>
  import vbtn from '../../btnComponents/commentBtn.vue'
  export default {
    data () {
      return {}
    },
    components: {
      vbtn
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .entertainment_one_content_wrapper {
    color: @default;
    .entertainment_one_title_wrapper {
      font-size: 1rem;
      line-height: .6rem;
      .pai {
        .mr(.5rem);
      }
      .entertainment_one_title {
        font-family: font1;
      }
    }
    .entertainment_one_descripe {
      color:@f6f7ff;
      font-size:.16rem;
      .pt(.24rem);
      .pb(.36rem);
    }
    .entertainment_one_text_wrapper {
      width:9.34rem;
      .mb(1.16rem);
      font-family: font2;
      .entertainment_one_topic {
        font-size:.16rem;
        color: @f6f7ff;
        .mb(.16rem);
      }
      .entertainment_one_text_content{
        line-height:.32rem;
        font-size:.16rem;
        word-break: keep-all;
      }
    }
  }
</style>
