<template>
  <div class="home">
    <swiper class="swiper_container" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <discoverOne></discoverOne>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <discoverTwo></discoverTwo>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <discoverThree></discoverThree>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <discoverFour></discoverFour>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <discoverFive></discoverFive>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <discoverSix></discoverSix>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <discoverSeven></discoverSeven>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <discoverEight></discoverEight>
      </swiper-slide>
    </swiper>
    <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import discoverOne from './discoverOne/discoverone.vue'
  import discoverTwo from './discoverTwo/discovertwo.vue'
  import discoverThree from './discoverThree/discoverthree.vue'
  import discoverFour from './discoverFour/discoverfour.vue'
  import discoverFive from './discoverFive/discoverfive.vue'
  import discoverSix from './discoverSix/discoversix.vue'
  import discoverSeven from './discoverSeven/discoverseven.vue'
  import discoverEight from './discoverEight/discovereight.vue'
  import vline from '../lineComponents/lineComponents.vue'
  export default {
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
        num: 8
      }
    },
    components: {
      swiper,
      swiperSlide,
      discoverOne,
      discoverTwo,
      discoverThree,
      discoverFour,
      discoverFive,
      discoverSix,
      discoverSeven,
      discoverEight,
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
<style lang="less">
  @import '../../assets/css/bcss/components_style.less';
</style>
