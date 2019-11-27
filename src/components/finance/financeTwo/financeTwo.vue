<template>
  <div class="finance_two_mark comment_mark">
    <div class="finance_two_content_wrapper content_wrapper">
      <div class="finance_two_title_wrapper title_wrapper">
        <p class="finance_two_title">{{$t('finance.financeTwo.title')}}</p>
      </div>
      <div class="finance_two_text_wrapper">
        <p class="finance_two_descripe">{{$t('finance.financeTwo.descripe')}}</p>
      </div>
      <vbtn>
        <router-link class="btn" slot="button" to="/sharedFinance">{{$t('finance.financeTwo.btn')}}</router-link>
      </vbtn>
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
  .finance_two_content_wrapper {
    .finance_two_title_wrapper {
      color: @default;
      line-height: .6rem;
      .finance_two_title {
        font-size: 1rem;
        font-family: font1;
      }
    }
    .finance_two_text_wrapper {
      width: 9.3rem;
      .mt(.32rem);
      .mb(.56rem);
      .finance_two_descripe {
        font-family: font2;
        color: @f6f7ff;
        font-size:.16rem;
        line-height: .32rem;
      }
    }
  }

  .comment_mark {
    background: rgba(0, 0, 0, .3);
  }
</style>
