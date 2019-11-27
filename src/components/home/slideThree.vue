<template>
  <div class="homeWrapper">
    <h1 class="slideTitle">{{$t('header.sideThree.sideThree1')}}</h1>
    <p class="slideTxt">{{$t('header.sideThree.sideThree2')}}</p>
    <div class="slidethreeImg">
      <div :style="{backgroundImage:'url('+slidethreeImg1+')'}"></div>
      <div :style="{backgroundImage:'url('+slidethreeImg2+')'}"></div>
      <div :style="{backgroundImage:'url('+slidethreeImg3+')'}"></div>
      <div :style="{backgroundImage:'url('+slidethreeImg4+')'}"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        slidethreeImg1: require('../../assets/img/allen/shouoye-3-icon-1.png'),
        slidethreeImg2: require('../../assets/img/allen/shouoye-3-icon-2.png'),
        slidethreeImg3: require('../../assets/img/allen/shouoye-3-icon-3.png'),
        slidethreeImg4: require('../../assets/img/allen/shouoye-3-icon-4.png')
      }
    }
  }
</script>

<style lang="css" scoped>
  .homeWrapper{
    width: 100%;
    text-align: left;
    padding-left:15% ;
  }
  .slideTitle{
    font-family: font1;
    font-size: 1rem;
    font-weight: normal;
  }
  .slideTxt{
    max-width: 9.2rem;
    font-size: 0.18rem;
    line-height: 0.36rem;
    font-family: font2;
    text-align: justify;
  }
  .slidethreeImg{
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    margin-top: 80px;
  }
  .slidethreeImg div{
    margin-right: 100px;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: contain;
    /*opacity: 0.4;*/
    /*-webkit-transition: all .3s ease-in-out;*/
    /*transition: all .3s ease-in-out;*/
  }
  /*.slidethreeImg div:hover{*/
    /*opacity: 1;*/
    /*-webkit-transition: all .3s ease-in-out;*/
    /*transition: all .3s ease-in-out;*/
  /*}*/
</style>

