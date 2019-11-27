<template>
  <div class="finance_three_mark comment_mark">
    <div class="finance_three_content_wrapper content_wrapper" id="finance_three_content_wrapper">
      <div class="finance_three_title_wrapper">
        <p class="finance_three_descripe">{{$t('finance.financeThree.descripe')}}</p>
      </div>
      <ul class="finance_three_list_wrapper">
        <li class="finance_three_item" v-for="(item, index) in $t('finance.financeThree.list')">
          <div class="finance_three_img_wrapper">
            <img :src="financeicon1" v-if="index === 0">
            <img :src="financeicon2" v-else-if="index === 1">
            <img :src="financeicon3" v-else-if="index === 2">
            <img :src="financeicon4" v-else>
          </div>
          <span class="finance_three_topic">{{item.topic}}</span>
          <p class="finance_three_content_one content_style">{{item.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        financeicon1: require('../../../assets/img/imagesb/finance/financeicon1.png'),
        financeicon2: require('../../../assets/img/imagesb/finance/financeicon2.png'),
        financeicon3: require('../../../assets/img/imagesb/finance/financeicon3.png'),
        financeicon4: require('../../../assets/img/imagesb/finance/financeicon4.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';

  .finance_three_content_wrapper {
    .finance_three_title_wrapper {
      color: @default;
      line-height: .6rem;
      .mb(1rem);
      .finance_three_descripe {
        font-family: font1;
        font-size: 1rem;
      }
    }
    .finance_three_list_wrapper {
      width: 15.6rem;
      .flex;
      .finance_three_item {
        flex: 1;
        font-size:.12rem;
        color: @f6f7ff;
        .finance_three_img_wrapper {
          width: 1.5rem;
          img {
            width: 100%;
          }
        }
        .finance_three_topic {
          font-family: font1;
          font-size: .48rem;
          .inb;
          .pt(.5rem);
          .pb(.3rem);
          line-height:.24rem;
        }
        .content_style {
          font-size:.16rem;
          font-family: font2;
          line-height: .32rem;
          width: 2.94rem;
          word-break: keep-all;
        }
      }
    }
  }
  .comment_mark{
    background:rgba(0,0,0,.3);
  }
  @media screen and (max-width:1440px) {
    #finance_three_content_wrapper{
      .pt(1rem);
    }
  }
</style>
