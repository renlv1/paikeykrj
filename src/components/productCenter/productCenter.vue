<template>
    <div class="productCenter">
      <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide">
          <slideOne></slideOne>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideZero></slideZero>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideEmpire></slideEmpire>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideTwo></slideTwo>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slide-add></slide-add>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideThree></slideThree>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideFour></slideFour>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideWorld></slideWorld>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideFive></slideFive>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideSix></slideSix>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideFund></slideFund>
        </swiper-slide>
      </swiper>
      <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
    </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import slideZero from './productSlideZero.vue'
  import slideAdd from './productAdd.vue'
  import slideOne from './productSlideOne.vue'
  import slideEmpire from './productEmpire.vue'
  import slideTwo from './productSlideTwo.vue'
  import slideThree from './productSlideThree.vue'
  import slideFour from './productSlideFour.vue'
  import slideWorld from './productWorld.vue'
  import slideFive from './productSlideFive.vue'
  import slideSix from './productSlideSix.vue'
  import slideYueBao from './productYueBao.vue'
  import slideFund from './productFund.vue'
  import vline from '../lineComponents/lineComponents.vue'
  export default{
    data () {
      return {
        swiperOption: {
          activeitem: 0,
          notNextTick: true,
          pagination: '.swiper-pagination',
          direction: 'vertical',
          speed: 500,
          setWrapperSize: true,
          autoHeight: true,
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
          onTransitionStart (swiper) {
            this.activeitem = swiper.activeIndex
          }
        },
        num: 11
      }
    },
    components: {
      swiper,
      swiperSlide,
      slideZero,
      slideOne,
      slideEmpire,
      slideTwo,
      slideThree,
      slideFour,
      slideWorld,
      slideFive,
      slideSix,
      slideYueBao,
      slideFund,
      vline,
      slideAdd
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.swiper.slideTo(0, 1000, false)
      })
    },
    methods: {
      sealed (index) {
        this.swiper.slideTo(index, 1000, false)
        this.swiperOption.activeitem = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .productCenter
    height: 100%
    position: relative
  .productCenter
    .swiper-wrapper
      .swiper-slide:nth-child(1)
        background url("../../assets/img/productCenter/productCenter.jpg") no-repeat
        background-size: 100% 100%
      .swiper-slide:nth-child(2), .swiper-slide:nth-child(3), .swiper-slide:nth-child(4), .swiper-slide:nth-child(5), .swiper-slide:nth-child(6), .swiper-slide:nth-child(7), .swiper-slide:nth-child(8), .swiper-slide:nth-child(9),.swiper-slide:nth-child(10),.swiper-slide:nth-child(11)
        background url("../../assets/img/productCenter/bg-stripe.jpg") no-repeat
        background-size: 100% 100%
</style>

