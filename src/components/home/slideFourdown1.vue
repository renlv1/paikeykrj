<template>
  <div class="homeWrapper">
    <h1 class="slideTitle">{{$t('header.sideFourdown1.sideFourdown1-1')}}</h1>
    <p class="slideTxt">{{$t('header.sideFourdown1.sideFourdown1-2')}}</p>
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
</style>

