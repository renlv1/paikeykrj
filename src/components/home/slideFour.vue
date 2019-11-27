<template>
    <div class="homeWrapper">
      <div class="slidefour1">
        <h1 class="slideTitle">{{$t('header.sideFour.sideFour1')}}</h1>
        <p class="slideTxt">{{$t('header.sideFour.sideFour2')}}</p>
      </div>
      <div class="slidefour2">
        <div>
          <div class="slidefour2img" :style="{backgroundImage:'url('+slidefourImg1+')'}"></div>
          <h1 class="slideTitleS">{{$t('header.sideFour.sideFour3')}}</h1>
          <p class="slideTxtS">{{$t('header.sideFour.sideFour4')}}</p>
        </div>
        <div>
          <div class="slidefour2img" :style="{backgroundImage:'url('+slidefourImg2+')'}"></div>
          <h1 class="slideTitleS">{{$t('header.sideFour.sideFour5')}}</h1>
          <p class="slideTxtS">{{$t('header.sideFour.sideFour6')}}</p>
        </div>
        <div>
          <div class="slidefour2img" :style="{backgroundImage:'url('+slidefourImg3+')'}"></div>
          <h1 class="slideTitleS">{{$t('header.sideFour.sideFour7')}}</h1>
          <p class="slideTxtS">{{$t('header.sideFour.sideFour8')}}</p>
        </div>
        <div>
          <div class="slidefour2img" :style="{backgroundImage:'url('+slidefourImg4+')'}"></div>
          <h1 class="slideTitleS">{{$t('header.sideFour.sideFour9')}}</h1>
          <p class="slideTxtS">{{$t('header.sideFour.sideFour10')}}</p>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        slidefourImg1: require('../../assets/img/allen/shouoye-4-icon-1.png.png'),
        slidefourImg2: require('../../assets/img/allen/shouoye-4-icon-2.png.png'),
        slidefourImg3: require('../../assets/img/allen/shouoye-4-icon-3.png.png'),
        slidefourImg4: require('../../assets/img/allen/shouoye-4-icon-4.png.png')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .homeWrapper{
    width: 100%;
    text-align: left;
    padding-left:15% ;
  }
  .slidefour1{
    /*display: -webkit-box;*/
    /*display: -ms-flexbox;*/
    /*display: -webkit-flex;*/
    /*display: flex;*/
    /*position: relative;*/
  }
  .slidefour2{
    margin-top: 0.6rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  .slidefour2>div{
    margin-right: 100px;
    @media screen and (max-width: 768px) {
      margin-right: 30px;
    }
  }
  .slideTitle{
    font-family: font1;
    font-size: 1rem;
    font-weight: normal;
    margin-right: 0.8rem;
  }
  .slideTxt{
    /*position: absolute;*/
    /*bottom: 30px;*/
    /*left: 340px;*/
    max-width: 9.2rem;
    font-size: 0.18rem;
    line-height: 0.36rem;
    font-family: font2;
    text-align: justify;
    /*margin-top: 0.02rem;*/
    @media screen and (max-width: 414px) {
      width: 6rem;
    }
  }
  .slidefour2img{
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    @media screen and (max-width: 414px) {
      width: 1rem;
      height: 1rem;
    }
  }
  .slideTitleS{
    font-family: font1;
    font-size: 0.48rem;
    font-weight: normal;
    margin-top: 0.5rem;
  }
  .slideTxtS{
    max-width: 2.62rem;
    font-size: 0.16rem;
    font-family: font2;
    text-align: left;
    @media screen and (max-width: 768px) {
      width: 1rem;
    }
  }
</style>

