<template>
  <div class="homeWrapper">
    <h1 class="slideTitle">{{$t('sharedFinance.slideThree.slideThree1')}}</h1>
    <h1 class="slideTitle">{{$t('sharedFinance.slideThree.slideThree2')}}</h1>
    <p class="slideTxt">{{$t('sharedFinance.slideThree.slideThree3')}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
      }
    }
  }
</script>

<style lang="css" scoped>
  .homeWrapper{
    width: 100%;
    text-align: left;
    padding-left:15%  ;
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
    margin-top: 0.8rem;
  }
  .slidethreeImg div{
    margin-right: 1rem;
    width: 1rem;
    height: 1rem;
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

