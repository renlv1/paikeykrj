<template>
  <div class="aboutUs">
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
  import slideOne from './aboutSlideOne.vue'
  import slideTwo from './aboutSlideTwo.vue'
  import slideThree from './aboutSlideThree.vue'
  import slideFour from './aboutSlideFour.vue'
  import vline from '../lineComponents/lineComponents.vue'
  export default{
    data () {
      return {
        swiperOption: {
          activeitem: 0,
          notNextTick: true,
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
  .aboutUs
    height: 100%
    position: relative
  .aboutUs
    .swiper-wrapper
      .swiper-slide:nth-child(1)
        background url("../../assets/img/about/aboutOne.jpg") no-repeat
        background-size: cover
      .swiper-slide:nth-child(2)
        background url("../../assets/img/about/aboutTwo.jpg") no-repeat
        background-size: cover
      .swiper-slide:nth-child(3)
        background url("../../assets/img/about/aboutThree.jpg") no-repeat
        background-size: cover
      .swiper-slide:nth-child(4)
        background url("../../assets/img/about/aboutFour.jpg") no-repeat
        background-size: cover
</style>

