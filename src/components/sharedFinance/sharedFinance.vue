<template>
  <div class="sharedFinance" :style="{backgroundImage:'url('+bg1+')'}">
    <!-- swiper -->
    <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <slideOne></slideOne>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <slideTwo></slideTwo>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <slideThree></slideThree>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <slideFour></slideFour>
      </swiper-slide>
    </swiper>

    <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import slideOne from './slideOne.vue'
  import slideTwo from './slideTwo.vue'
  import slideThree from './slideThree.vue'
  import slideFour from './slideFour.vue'
  import vline from '../lineComponents/lineComponents.vue'
  export default {
    name: 'sharedFinance',
    data () {
      return {
        bg1: require('../../assets/img/allen/sharedFinance_bg.jpg'),
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
        num: 4
      }
    },
    components: {
      swiper,
      swiperSlide,
      slideOne,
      slideTwo,
      slideThree,
      slideFour,
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
  .sharedFinance{
    position: relative;
    height: 100%;
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
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
  }
</style>
