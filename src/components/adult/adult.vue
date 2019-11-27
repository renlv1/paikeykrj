<template>
  <div class="productCenter">
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
      <swiper-slide class="swiper-slide">
        <slideFive></slideFive>
      </swiper-slide>
      <!--<swiper-slide class="swiper-slide">-->
        <!--<slideSix></slideSix>-->
      <!--</swiper-slide>-->
    </swiper>
    <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import slideOne from './adultSlideOne.vue'
  import slideTwo from './adultSlideTwo.vue'
  import slideThree from './adultSlideThree.vue'
  import slideFour from './adultSlideFour.vue'
  import slideFive from './adultSlideFive.vue'
//  import slideSix from './adultSlideSix.vue'
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
        num: 5
      }
    },
    components: {
      swiper,
      swiperSlide,
      slideOne,
      slideTwo,
      slideThree,
      slideFour,
      slideFive,
//      slideSix,
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
  .productCenter
    height: 100%
    position: relative
  .productCenter
    .swiper-container
      background url("../../assets/img/adult/adultBg.jpg")
      background-size: cover
</style>

