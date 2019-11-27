<template>
  <div class="apache-wrap">
    <div class="main">
      <div class="qr-Code"></div>
      <div class="con-box">
        <div class="title">Bounty Hunter</div>
        <div class="tit">追逐猎物，竞争为王！</div>
        <div class="con">为了保证你的账户安全,请使用 <span>谷歌验证器></span></div>
        <div class="list">
          <div class="li">
            <img src="../../assets/img/allen/android-btn.png" alt="">
          </div>
          <div class="li">
            <img src="../../assets/img/allen/ios-btn.png" alt="">
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
    components: {},
    computed: {},
    created () {},
    mounted () {},
    beforeDestroy () {},
    destroyed () {},
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .apache-wrap{
    width: 100%;
    height: 100vh;
    background: url("../../assets/img/allen/apache.jpg") no-repeat;
    background-size: cover;
    padding-left: 15%;
    text-align: left;
    display: flex;
    align-items: center;
    .main{
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      .qr-Code{
        width: 190px;
        height: 190px;
        background-color: pink;
      }
      .con-box{
        margin-left: 50px;
        color: #fff;
        font-family: font2;
        .title{
          font-size: .6rem;
        }
        .tit{
          font-size: .24rem;
          padding: 24px 0;
        }
        .con{
          font-size: .2rem;
          span{
            color: #f9b72b;
          }
        }
        .list{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: 60px;
          .li{
            width: 262px;
            height: 62px;
            line-height: 62px;
            margin-right: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 0 1px rgba(255,255,255, .2);
            text-align: center;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
