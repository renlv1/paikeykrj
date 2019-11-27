<template>
  <div class="bhGameRules-wrap">
    <div class="main">
      <div class="img"><img src="../../assets/img/productCenter/bh-gameRules.png" alt=""></div>
      <div class="con-box">
        <div class="title">{{$t('knowBountyHunter.text1')}}</div>
        <ul>
          <router-link tag="li" to="/bhRules">{{$t('knowBountyHunter.text2')}} <span>>></span></router-link>
          <router-link tag="li" to="/bhRules">{{$t('knowBountyHunter.text3')}} <span>>></span></router-link>
          <router-link tag="li" to="/bhRules">{{$t('knowBountyHunter.text4')}} <span>>></span></router-link>
        </ul>
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
  .bhGameRules-wrap{
    width: 100%;
    height: 100vh;
    background: url("../../assets/img/allen/apache.jpg") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .main{
      width: 100%;
      padding-left: 15%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      .img{
        width: 150px;
        height: 150px;
        margin-right: 100px;
      }
      .con-box{
        color: #fff;
        text-align: left;
        .title{
          font-size: .6rem;
          padding-bottom: 50px;
        }
        ul{
          li{
            font-size: .24rem;
            padding-bottom: 40px;
            cursor: pointer;
            span{
              color: #f9b72b;
            }
          }
        }
      }
    }
  }
</style>
