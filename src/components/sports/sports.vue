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
          <!--<swiper-slide class="swiper-slide">-->
            <!--<sportFour></sportFour>-->
          <!--</swiper-slide>-->
        </swiper>
      </div>
      <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
    </div>
  </div>
</template>o

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import sportOne from './sportsOne/sportsOne.vue'
  import sportTwo from './sportsTwo/sportsTwo.vue'
  import sportThree from './sportsThree/sportsThree.vue'
  import sportFour from './sportsFour/sportsFour.vue'
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
        bgOne: require('../../assets/img/imagesb/sports/sport_bg_one.jpg'),
        bgDoct: require('../../assets/img/imagesb/sports/bg_doct.png'),
        num: 3
      }
    },
    components: {
      swiper,
      swiperSlide,
      sportOne,
      sportTwo,
      sportThree,
      sportFour,
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

<style lang="less" scoped>
  @import '../../assets/css/bcss/components_style';
</style>

