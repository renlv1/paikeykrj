<template>
  <div class="productSlideZero-wrap">
    <div class="mian">
      <div class="list">
        <div class="img"><img src="../../assets/img/productCenter/zero-img.png" alt=""></div>
        <div class="con-box">
          <div class="title">{{$t('productCenter.slideZero.text1')}}</div>
          <div class="tit">{{$t('productCenter.slideZero.text2')}}</div>
          <div class="con">{{$t('productCenter.slideZero.text3')}}</div>
          <div class="list-btn">
            <router-link to="/presell" tag="div" class="li-btn">{{$t('productCenter.slideZero.text4')}}</router-link>
            <router-link to="/knowBountyHunter" tag="div" class="li-btn">{{$t('productCenter.slideZero.text5')}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .productSlideZero-wrap{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .mian{
      width: 100%;
      padding-left: 15%;
      text-align: center;
      .list{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .img{
          width: 190px;
          height: 190px;
          margin-right: 50px;
        }
        .con-box{
          color: #fff;
          text-align: left;
          .title{
            font-family: font2;
            font-weight: normal;
            font-size: .6rem;
            padding: 40px 0 40px 0;
          }
          .tit{
            font-size: .24rem;
            padding-bottom: 10px;
          }
          .con{
            width: 1134px;
            font-size: .16rem;
            color: #c5c2cc;
            line-height: 2;
            @media screen and (max-width: 1660px){
              width: 90%;
            }
            @media screen and (max-width: 1024px){
              width: 80%;
            }
          }
          .list-btn{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 60px;
            .li-btn{
              width: 262px;
              height: 62px;
              line-height: 62px;
              text-align: center;
              box-shadow: 0 0 0 1px rgba(73, 73, 77, 0.99);
              margin-right: 40px;
              font-size: .18rem;
              cursor: pointer;
              @media screen and (max-width: 1024px){
                width: auto;
                flex: 1;
              }
            }
          }
        }
      }
    }
  }
</style>
