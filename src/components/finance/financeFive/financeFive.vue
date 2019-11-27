<template>
  <div class="finance_five_mark comment_mark">
    <div class="finance_five_content_wrapper content_wrapper" id="finance_five_content_wrapper">
      <div class="finance_five_title_wrapper">
        <span class="pai" v-if="$t('finance.financeFour.pai') !== ''">{{$t('finance.financeFive.pai')}}</span><span class="finance_five_title">{{$t('finance.financeFive.title')}}</span>
      </div>
      <ul class="finance_five_list_wrapper">
        <li class="finance_five_item" v-for="(item, index) in $t('finance.financeFive.content')">
          <div class="finance_five_img_wrapper">
            <img :src="financepic1" v-if="index === 0">
            <img :src="financepic2" v-else-if="index === 1">
            <img :src="financepic3" v-else>
          </div>
          <p class="finance_five_content_one content_style one_comment">{{item.descripe}}</p>
          <p class="finance_five_content_one content_style">{{item.text}}</p>
          <router-link to="/discovery" class="button" tag="span" v-if="index === 0">{{item.btn}}</router-link>
          <router-link to="/ARdownload" class="button" tag="span" v-if="index === 1">{{item.btn}}</router-link>
          <a href="https://app.pi-group.biz/appdownload/us/me.html" v-if="index === 2" class="button" target="_blank">{{item.btn}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        financepic1: require('../../../assets/img/imagesb/finance/financepic1.png'),
        financepic2: require('../../../assets/img/imagesb/finance/financepic2.png'),
        financepic3: require('../../../assets/img/imagesb/finance/financepic3.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .finance_five_content_wrapper{
    .finance_five_title_wrapper{
      font-size:1rem;
      color:@default;
      line-height:.6rem;
      .pai{
        .mr(.5rem);
      }
      .finance_five_title{
        font-family: font1;
      }
    }
    .finance_five_list_wrapper{
      .pt(.76rem);
      width:13.4rem;
      .flex;
      font-family: font2;
      .finance_five_item{
        flex:1;
        color:@default;
        .rel;
        .pb(.84rem);
        .finance_five_img_wrapper{
          width:3.6rem;
          height:2.36rem;
          .mb(.14rem);
          img{
            width:100%;
            height:100%;
          }
        }
        .content_style{
          font-size:.16rem;
          line-height: .32rem;
          width:2.94rem;
          word-break: keep-all;
        }
        .content_style.one_comment{
          line-height:.36rem;
        }
        .one_comment{
          width:3.34rem;
        }
        .two_comment{
          width:3.56rem;
        }
        .three_comment{
          width:2.22rem;
        }
        .finance_five_content_one{
          width:3.58rem;
        }
        .finance_five_content_two{
          width:3.58rem;
        }
        .finance_five_content_three{
          width:3.46rem;
        }
        .button{
          color:#fff;
          display:inline-block;
          width:2.6rem;
          height:.6rem;
          line-height:.6rem;
          text-align: center;
          font-size: .18rem;
          .abs;
          bottom:0;
          border:1px solid rgba(255,255,255,.2);
          &:hover{
            cursor: pointer;
            border:1px solid @default;
          }
        }
      }
    }
  }
  .comment_mark {
    background: rgba(0, 0, 0, .3);
  }
  @media screen and (max-width:1440px) {
    #finance_five_content_wrapper{
      .pt(1rem);
    }
  }
</style>

