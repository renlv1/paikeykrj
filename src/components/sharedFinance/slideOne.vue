<template>
    <div class="homeWrapper">
      <h1 class="slideTitle">{{$t('sharedFinance.slideOne.slideOne1')}}</h1>
      <p class="slideTxt">{{$t('sharedFinance.slideOne.slideOne2')}}</p>
      <p class="slideTitle2">{{$t('sharedFinance.slideOne.slideOne3')}}</p>
      <p class="slideTxt">{{$t('sharedFinance.slideOne.slideOne4')}}</p>
      <!--<h1 class="slideTitle">{{$t('header.sideOne.sideOne2')}}</h1>-->
      <!--<h3 class="slideTitle2">{{$t('header.sideOne.sideOne3')}}</h3>-->
      <!--<router-link to="/contact" class="slideBtn">{{$t('header.sideOne.sideOne4')}}</router-link>-->
    </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {}
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
    margin-bottom: 0.5rem;
  }
  .slideTitle2{
    font-family: font1;
    font-size: 0.24rem;
    font-weight: normal;
  }
  .slideBtn{
    display: inline-block;
    text-align: center;
    font-size: 18px;
    width: 260px;
    height: 60px;
    line-height: 60px;
    font-family: "Microsoft YaHei UI Light";
    border: 1px solid rgba(225, 225, 225, 0.2);
    color: #fff;
    text-decoration: none;
    margin-top: 50px;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  .slideBtn:hover{
    border: 1px solid rgba(225, 225, 225, 1);
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
</style>

