<template>
  <div class="home">
    <div class="comment_box" :style="{backgroundImage:'url(' + bgOne + ')'}">
      <div class="comment_doct" :style="{backgroundImage:'url(' + bgDoct + ')'}">
        <swiper class="swiper_container" :options="swiperOption" ref="mySwiper">
          <swiper-slide class="swiper-slide">
            <sportOne></sportOne>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <sportTwo></sportTwo>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <sportThree></sportThree>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <sportFour></sportFour>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <sportFive></sportFive>
          </swiper-slide>
          <!--<swiper-slide class="swiper-slide">-->
            <!--<sportSix></sportSix>-->
          <!--</swiper-slide>-->
        </swiper>
        <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import sportOne from './financeOne/financeOne.vue'
  import sportTwo from './financeTwo/financeTwo.vue'
  import sportThree from './financeThree/financeThree.vue'
  import sportFour from './financeFour/financeFour.vue'
  import sportFive from './financeFive/financeFive.vue'
//  import sportSix from './financeSix/financeSix.vue'
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
        bgOne: require('../../assets/img/imagesb/finance/finance_bg.jpg'),
        bgDoct: require('../../assets/img/imagesb/sports/bg_doct.png'),
        num: 5
      }
    },
    components: {
      swiper,
      swiperSlide,
      sportOne,
      sportTwo,
      sportThree,
      sportFour,
      sportFive,
//      sportSix,
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
