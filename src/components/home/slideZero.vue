<template>
  <div class="zero-wrap">
    <div class="mian">
      <h4>{{$t('discover.slideZero.text1')}}</h4>
      <div class="tit">{{$t('discover.slideZero.text2')}}</div>
      <div class="con">{{$t('discover.slideZero.text3')}}</div>
      <div class="list">
        <!--<router-link to="/presell" tag="div" class="li">{{$t('discover.slideZero.text4')}}</router-link>-->
        <div class="li" @click="$router.push('/presell')">{{$t('discover.slideZero.text4')}}</div>
        <!--<router-link tag="div" to="/knowBountyHunter" class="li">下载应用</router-link>-->
        <router-link tag="div" to="/knowBountyHunter" class="li">{{$t('discover.slideZero.text5')}}</router-link>
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
  .zero-wrap{
    width: 100%;
    padding-left: 15%;
    text-align: left;
    .mian{
      width: 100%;
      h4{
        font-family: font1;
        font-weight: normal;
        font-size: 1rem;
        color: #fff;
      }
      .tit{
        font-size: .4rem;
        padding-top: .14rem;
        padding-bottom: .24rem;
      }
      .con{
        width: 1450px;
        font-size: .18rem;
        padding-bottom: .5rem;
        @media screen and (max-width: 1690px){
          width: 100%;
        }
      }
      .list{
        display: flex;
        justify-content: flex-start;
        .li{
          width: 262px;
          height: 62px;
          box-shadow: 0 0 0 1px rgba(255,255,255, .2);
          margin-right: 40px;
          text-align: center;
          line-height: 62px;
          cursor: pointer;
          @media screen and (max-width: 1024px){
            width: auto;
            flex: 1;
          }
        }
      }
    }
  }
</style>
