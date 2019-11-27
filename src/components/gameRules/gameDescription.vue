<template>
  <div class="gameDescription-wrap">
    <div class="main">
      <div class="title">{{$t('knowBountyHunter.gameDescription.text1')}}</div>
      <div class="tit">{{$t('knowBountyHunter.gameDescription.text2')}}</div>
      <div class="textp">{{$t('knowBountyHunter.gameDescription.text3')}}</div>
      <div class="textp">{{$t('knowBountyHunter.gameDescription.text4')}}</div>
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
  .gameDescription-wrap{
    width: 100%;
    height: 100vh;
    background: url("../../assets/img/productCenter/game-js-bg.jpg") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .main{
      width: 100%;
      padding-left: 15%;
      color: #fff;
      text-align: left;
      .title{
        font-size: 1rem;
      }
      .tit{
        font-size: .4rem;
        padding: 50px 0;
      }
      .textp{
        width: 1414px;
        font-size: .18rem;
        color: #c5c2cc;
        line-height: 2;
        padding-bottom: 20px;
        @media screen and (max-width: 1680px){
          width: 90%;
        }
      }
    }
  }
</style>
