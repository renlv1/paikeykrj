<template>
  <div class="finance_one_mark comment_mark">
    <div class="finance_one_content_wrapper content_wrapper">
      <div class="finance_one_title_wrapper title_wrapper">
        <span class="pai" v-if="$t('finance.financeOne.pai') !== ''">{{$t('finance.financeOne.pai')}}</span><span
        class="finance_one_title">{{$t('finance.financeOne.title')}}</span>
      </div>
      <div class="finance_one_text_wrapper">
        <p class="finance_one_descripe">{{$t('finance.financeOne.descripe')}}</p>
        <P class="finance_one_text" v-for="(item, index) in $t('finance.financeOne.text')" :key="index">{{item}}</P>
      </div>
      <!--<vbtn>-->
        <!--<a class="btn" slot="button"-->
           <!--href="http://finance.pi-group.biz/html/index.html" target="_blank">{{$t('finance.financeOne.btn')}}</a>-->
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
  .finance_one_content_wrapper {
    color: @default;
    .finance_one_title_wrapper {
      font-size: 1rem;
      line-height: .6rem;
      .pai {
        .mr(.5rem);
      }
      .finance_one_title {
        font-family: font1;
      }
    }
    .finance_one_text_wrapper {
      .pt(.32rem);
      .pb(.65rem);
      .finance_one_descripe,
      .finance_one_text {
        font-family: font2;
        width: 9.4rem;
        font-size:.16rem;
        color: @f6f7ff;
        line-height: .32rem;
        word-break: keep-all;
      }
    }
  }

  .comment_mark {
    background: rgba(0, 0, 0, .3);
  }
</style>
