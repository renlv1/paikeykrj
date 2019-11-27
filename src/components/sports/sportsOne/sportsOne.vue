<template>
  <div class="sport_one_mark comment_mark">
    <div class="sports_one_content_wrapper content_wrapper">
      <div class="sports_one_title_wrapper title_wrapper">
        <span class="pai" v-if="$t('sports.sportOne.pai') !== ''">{{$t('sports.sportOne.pai')}}</span><span class="sports_one_title">{{$t('sports.sportOne.title')}}</span>
      </div>
      <p class="sports_one_descripe">{{$t('sports.sportOne.descripe')}}</p>
      <div class="sports_text_wrapper">
        <!--<p class="sports_topic">{{$t('sports.sportOne.topic')}}</p>-->
        <p class="sports_text_content">{{$t('sports.sportOne.text')}}</p>
      </div>
      <!--<vbtn>-->
        <!--<a class="btn" slot="button" href="http://sports.pi-group.biz/html/index.html" target="_blank">{{$t('sports.sportOne.btn')}}</a>-->
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
  .sports_one_content_wrapper {
    color: @default;
    .sports_one_title_wrapper {
      font-size: 1rem;
      line-height: .6rem;
      .pai {
        .mr(.5rem);
      }
      .sports_one_title {
        font-family: font1;
      }
    }
    .sports_one_descripe {
      color:@f6f7ff;
      font-size:.16rem;
      .pt(.4rem);
      .pb(.52rem);
    }
    .sports_text_wrapper {
      width:9.34rem;
      .mb(2rem);
      font-family: font2;
      .sports_topic {
        font-size:.16rem;
        color: @f6f7ff;
      }
      .sports_text_content{
        .mt(.16rem);
        font-size:.16rem;
        line-height:.3rem;
        word-break: keep-all;
      }
    }
  }
  .comment_mark{
    background:rgba(0,0,0,.3);
  }
</style>
