<template>
  <div class="indutries">
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
    </swiper>
    <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import slideOne from './indutriesSlideOne.vue'
  import slideTwo from './indutriesSlideTwo.vue'
  import slideThree from './indutriesSlideThree.vue'
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
        num: 3
      }
    },
    components: {
      swiper,
      swiperSlide,
      slideOne,
      slideTwo,
      slideThree,
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
  .indutries
    height: 100%
    position: relative
  .indutries
    .swiper-wrapper
      .swiper-slide:nth-child(1)
        background url("../../assets/img/industries/indutriesOne.jpg") no-repeat
        background-size: cover
      .swiper-slide:nth-child(2)
        background url("../../assets/img/industries/indutriesTwo.jpg") no-repeat
        background-size: cover
      .swiper-slide:nth-child(3)
        background url("../../assets/img/industries/indutriesThree.jpg") no-repeat
        background-size: cover
</style>

