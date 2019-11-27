<template>
  <div class="mark comment_mark">
    <div class="sports_four_content_wrapper content_wrapper" id="sports_four_content_wrapper">
      <div class="sports_four_title_wrapper">
        <span class="sports_four_title">{{$t('sports.sportsFour.title')}}</span>
      </div>
      <p class="about_us" v-html="$t('sports.sportsFour.descripe')"></p>
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
  .sports_four_content_wrapper{
    color:@default;
    .sports_four_title_wrapper{
      font-family: font1;
      font-size:1rem;
      color:@default;
    }
    .about_us{
      font-size:.16rem;
      word-break: keep-all;
      color:@f6f7ff;
      line-height:.3rem;
    }
  }
  .comment_mark{
    background:rgba(0,0,0,.3);
  }
</style>
