<template>
  <div class="home">
    <swiper class="swiper_container" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <sportOne></sportOne>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <sportTwo></sportTwo>
      </swiper-slide>
      <!--<swiper-slide class="swiper-slide">-->
        <!--<sportThree></sportThree>-->
      <!--</swiper-slide>-->
    </swiper>
    <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import sportOne from './televisionOne/televisionOne.vue'
  import sportTwo from './televisionTwo/televisionTwo.vue'
//  import sportThree from './televisionThree/televisionThree.vue'
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
        num: 2
      }
    },
    components: {
      swiper,
      swiperSlide,
      sportOne,
      sportTwo,
//      sportThree,
      vline
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
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

<style lang="less" scoped>
  @import '../../assets/css/bcss/components_style';
</style>

