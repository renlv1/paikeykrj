<template>
    <div class="homeWrapper">
      <button class="rightBtn" :style="{backgroundImage:'url('+right+')'}" @click="nextcolslide"></button>
      <!-- swiper -->
      <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg1+')'}">
          <div class="homeWrapperinner">
            <h1 class="slideTitle">{{$t('header.sideFive.sideFive1')}}</h1>
            <!--<p class="slideTxt">{{$t('header.sideFive.sideFive2')}}</p>-->
            <p class="slideTxt">{{$t('header.sideFive.sideFive4')}}</p>
            <a target="_blank" href="http://games.pi-group.biz" class="slideBtn">{{$t('header.sideFive.sideFive3')}}</a>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg2+')'}">
          <div class="homeWrapperinner">
            <h1 class="slideTitle">{{$t('header.sideFive.sideFive1')}}</h1>
            <!--<p class="slideTxt">{{$t('header.sideFive.sideFive2')}}</p>-->
            <p class="slideTxt">{{$t('header.sideFive.sideFive5')}}</p>
            <a target="_blank" href="http://finance.pi-group.biz" class="slideBtn">{{$t('header.sideFive.sideFive3')}}</a>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg3+')'}">
          <div class="homeWrapperinner">
            <h1 class="slideTitle">{{$t('header.sideFive.sideFive1')}}</h1>
            <!--<p class="slideTxt">{{$t('header.sideFive.sideFive2')}}</p>-->
            <p class="slideTxt">{{$t('header.sideFive.sideFive6')}}</p>
            <a target="_blank" href="http://adult.pi-group.biz" class="slideBtn">{{$t('header.sideFive.sideFive3')}}</a>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg4+')'}">
          <div class="homeWrapperinner">
            <h1 class="slideTitle">{{$t('header.sideFive.sideFive1')}}</h1>
            <!--<p class="slideTxt">{{$t('header.sideFive.sideFive2')}}</p>-->
            <p class="slideTxt">{{$t('header.sideFive.sideFive7')}}</p>
            <a target="_blank" href="http://entertainment.pi-group.biz" class="slideBtn">{{$t('header.sideFive.sideFive3')}}</a>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg5+')'}">
          <div class="homeWrapperinner">
            <h1 class="slideTitle">{{$t('header.sideFive.sideFive1')}}</h1>
            <!--<p class="slideTxt">{{$t('header.sideFive.sideFive2')}}</p>-->
            <p class="slideTxt">{{$t('header.sideFive.sideFive8')}}</p>
            <a target="_blank" href="http://sports.pi-group.biz" class="slideBtn">{{$t('header.sideFive.sideFive3')}}</a>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg6+')'}">
          <div class="homeWrapperinner">
            <h1 class="slideTitle">{{$t('header.sideFive.sideFive1')}}</h1>
            <!--<p class="slideTxt">{{$t('header.sideFive.sideFive2')}}</p>-->
            <p class="slideTxt">{{$t('header.sideFive.sideFive9')}}</p>
            <a target="_blank" href="http://pictures.pi-group.biz" class="slideBtn">{{$t('header.sideFive.sideFive3')}}</a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    data () {
      return {
        bg1: require('../../assets/img/allen/bg-5-1.jpg'),
        bg2: require('../../assets/img/allen/bg-5-2.jpg'),
        bg3: require('../../assets/img/allen/bg-5-3.jpg'),
        bg4: require('../../assets/img/allen/bg-5-4.jpg'),
        bg5: require('../../assets/img/allen/bg-5-5.jpg'),
        bg6: require('../../assets/img/allen/bg-5-6.jpg'),
        right: require('../../assets/img/allen/right.png'),
        swiperOption: {
          indexfiveitem: 0,
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          direction: 'horizontal',
          speed: 500,
          setWrapperSize: true,
          autoHeight: true,
          paginationClickable: true,
          mousewheelControl: false,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper.activeIndex)
            this.indexfiveitem = swiper.activeIndex
          }
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
//     you can use current swiper instance object to do something(swiper methods)
//     然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    },
    methods: {
      nextcolslide () {
        var num = this.swiperOption.indexfiveitem
        num = num + 1
        if (num <= 5) {
          this.swiper.slideTo(num, 1000, false)
          this.swiperOption.indexfiveitem = num
        } else {
          num = 0
          this.swiper.slideTo(num, 1000, false)
          this.swiperOption.indexfiveitem = num
        }
      }
    }
  }
</script>

<style lang="css" scoped>
  .homeWrapper{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .rightBtn{
    width: 1.46rem;
    height: 1.46rem;
    position: absolute;
    top: 45%;
    right: 0.4rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 100;
    background-color:rgba(225, 225, 225, 0);
    border: none;
    outline: none;
    cursor: pointer;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .homeWrapperinner{
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

