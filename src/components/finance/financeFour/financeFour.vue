<template>
  <div class="finance_four_mark comment_mark">
    <div class="finance_four_content_wrapper content_wrapper" id="finance_four_content_wrapper">
      <div class="finance_four_title_wrapper title_wrapper">
        <span class="pai" v-if="$t('finance.financeFour.pai') !== ''">{{$t('finance.financeFour.pai')}}</span><span
        class="finance_four_title">{{$t('finance.financeFour.title')}}</span>
      </div>
      <div class="finance_four_text_wrapper">
        <p class="finance_four_descripe"
           v-for="(item, index) in $t('finance.financeFour.descripe')" :key="index"
           :class="{margin: index === 3}">{{item}}</p>
        <span class="finance_four_descripe inb" v-html="$t('finance.financeFour.lianjie')"></span><a href="https://github.com/pidiscovery/pi" class="lianjie">https://github.com/pidiscovery/pi</a>
      </div>
      <vbtn>
        <a class="btn" slot="button" href="./static/video/WhitePaper.pdf" target="_blank">{{$t('finance.financeFour.btn')}}</a>
      </vbtn>
    </div>
  </div>
</template>
<script>
  import vbtn from '../../btnComponents/commentBtn.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      vbtn
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .finance_four_content_wrapper {
    font-size:.12rem;
    .finance_four_title_wrapper {
      font-size: 1rem;
      color: @default;
      line-height: .6rem;
      .pai {
        .mr(.5rem);
      }
      .finance_four_title {
        font-family: font1;
      }
    }
    .finance_four_text_wrapper {
      .pt(.24rem);
      .pb(.4rem);
      a{
        color: #E4A924;
        font-size:.16rem;
      }
      width: 9.42rem;
      .finance_four_descripe {
        font-family: font2;
        color: @f6f7ff;
        font-size:.16rem;
        line-height: .32rem;
        word-break: keep-all;
      }
      .inb{
        .mr(10px);
      }
      .margin {
        .pt(.32rem);
        .pb(.32rem);
      }
    }
  }

  .comment_mark {
    background: rgba(0, 0, 0, .3);
  }
  @media screen and (max-width:1440px) {
    #finance_four_content_wrapper{
      .pt(1rem);
    }
  }
</style>
