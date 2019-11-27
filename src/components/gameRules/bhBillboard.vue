<template>
  <div class="bhBillboard-wrap">
    <div class="main">
      <div class="title">{{$t('knowBountyHunter.bhBillboard.text1')}}</div>
      <div class="textp">{{$t('knowBountyHunter.bhBillboard.text2')}}</div>
      <div class="textp">{{$t('knowBountyHunter.bhBillboard.text3')}}</div>
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
  .bhBillboard-wrap{
    width: 100vw;
    height: 100vh;
    background: url("../../assets/img/productCenter/bhBillboard.jpg") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .main{
      width: 100vw;
      padding-left: 15%;
      text-align: left;
      color: #fff;
      .title{
        font-size: 1rem;
        padding-bottom: 50px;
        text-align: left;
      }
      .textp{
        width: 1332px;
        font-size: .18rem;
        line-height: 2;
        color: #c5c2cc;
        padding-bottom: 50px;
        @media screen and (max-width: 1671px){
          width: 90%;
        }
      }
    }
  }
</style>
