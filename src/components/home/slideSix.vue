<template>
  <div class="homeWrapper">
    <h1 class="slideTitle">{{$t('header.sideSix.sideSix1')}}</h1>
    <!--<p class="slideTxt">{{$t('header.sideSix.sideSix2')}}</p>-->
    <router-link to="/productCenter" class="slideBtn">{{$t('header.sideSix.sideSix3')}}</router-link>
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
  }
  .slideBtn{
    display: inline-block;
    text-align: center;
    font-size: 0.18rem;
    width: 2.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
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

