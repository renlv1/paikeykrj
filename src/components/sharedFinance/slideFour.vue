<template>
  <div class="homeWrapper">
    <h1 class="slideTitle">{{$t('sharedFinance.slideFour.slideFour1')}}</h1>
    <div class="textOutline">
      <p class="slideTxt">{{$t('sharedFinance.slideFour.slideFour2')}}</p>
      <p class="slideTxt">{{$t('sharedFinance.slideFour.slideFour3')}}</p>
      <p class="slideTxt">{{$t('sharedFinance.slideFour.slideFour4')}}</p>
      <p class="slideTxt">{{$t('sharedFinance.slideFour.slideFour5')}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default{
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        this.scrollBarFun()
      })
    },
    methods: {
      scrollBarFun () {
        /* eslint-disable */
        $(".textOutline").mCustomScrollbar()
        /* eslint-disable */
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
  .textOutline{
     max-height:4rem;
     max-width: 10.34rem;
     overflow: auto;
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

