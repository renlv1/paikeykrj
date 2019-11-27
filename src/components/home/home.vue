<template>
  <div class="home">
    <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg0+')'}">
        <slideZero></slideZero>
      </swiper-slide>
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg1+')'}">
        <slideOne></slideOne>
      </swiper-slide>
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg2+')'}">
        <slideTwo></slideTwo>
      </swiper-slide>
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg3+')'}">
        <slideThree></slideThree>
      </swiper-slide>
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg4+')'}">
        <slideFour></slideFour>
      </swiper-slide>
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg4down1+')'}">
        <slideFourdown1></slideFourdown1>
      </swiper-slide>
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg4down3+')'}">
        <slideFourdown3></slideFourdown3>
      </swiper-slide>
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg6down1+')'}">
        <slideSixdown1></slideSixdown1>
      </swiper-slide>
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg4down2+')'}">
        <slideFourdown2></slideFourdown2>
      </swiper-slide>
      <!--<swiper-slide class="swiper-slide" style="background-color: #101010">-->
        <!--<slideFive></slideFive>-->
      <!--</swiper-slide>-->
      <swiper-slide class="swiper-slide" :style="{backgroundImage:'url('+bg6+')'}">
        <slideSix></slideSix>
      </swiper-slide>

    </swiper>

    <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
  </div>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import slideZero from './slideZero.vue'
import slideOne from './slideOne.vue'
import slideTwo from './slideTwo.vue'
import slideThree from './slideThree.vue'
import slideFour from './slideFour.vue'
import slideFourdown1 from './slideFourdown1.vue'
import slideFourdown2 from './slideFourdown2.vue'
import slideFourdown3 from './slideFourdown3.vue'
import slideFive from './slideFive.vue'
import slideSix from './slideSix.vue'
import slideSixdown1 from './slideSixdown1.vue'
import vline from '../lineComponents/lineComponents.vue'
export default {
  name: 'home',
  data () {
    return {
      bg0: require('../../assets/img/allen/bg-0.jpg'),
      bg1: require('../../assets/img/allen/bg-1.jpg'),
      bg2: require('../../assets/img/allen/bg-2.jpg'),
      bg3: require('../../assets/img/allen/bg-3.jpg'),
      bg4: require('../../assets/img/allen/bg-4.jpg'),
      bg4down1: require('../../assets/img/allen/bg-4down1.jpg'),
      bg4down2: require('../../assets/img/allen/bg-4down2.jpg'),
      bg4down3: require('../../assets/img/allen/bg-4down3.jpg'),
//      bg5: require('../../assets/img/allen/bg-5-1.png'),
      bg6: require('../../assets/img/allen/bg-7.jpg'),
      bg6down1: require('../../assets/img/allen/bg-6down1.jpg'),
      swiperOption: {
        activeitem: 0,
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        direction: 'vertical',
        speed: 500,
        setWrapperSize: true,
        autoHeight: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart (swiper) {
          // console.log(swiper.activeIndex)
          this.activeitem = swiper.activeIndex
        }
        // more Swiper configs and callbacks...
        // ...
      },
      num: 9
    }
  },
  components: {
    swiper,
    swiperSlide,
    slideZero,
    slideOne,
    slideTwo,
    slideThree,
    slideFour,
    slideFourdown1,
    slideFourdown2,
    slideFourdown3,
    slideFive,
    slideSix,
    slideSixdown1,
    vline
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
//     you can use current swiper instance object to do something(swiper methods)
//     然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    this.swiper.slideTo(0, 1000, false)
  },
  methods: {
    sealed (index) {
      this.swiper.slideTo(index, 1000, false)
      this.swiperOption.activeitem = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .home{
    position: relative;
    height: 100%;
    color: #fff;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 0.16rem;
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
</style>
