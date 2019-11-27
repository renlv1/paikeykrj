<template>
  <div class="mark comment_mark">
    <div class="finance_six_content_wrapper content_wrapper" id="finance_six_content_wrapper">
      <div class="finance_six_title_wrapper">
        <span class="finance_six_title">{{$t('finance.financeSix.title')}}</span>
      </div>
      <p class="finance_six_descripe" v-html="$t('finance.financeSix.descripe')"></p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .finance_six_content_wrapper{
    .finance_six_title_wrapper{
      font-family: font1;
      font-size:1rem;
      color:@default;
    }
    .finance_six_descripe{
      font-family: font2;
      color:@f6f7ff;
      word-break: keep-all;
      line-height:.3rem;
      font-size:.16rem;
    }
  }
  .comment_mark{
    background:rgba(0,0,0,.3);
  }
</style>
