<template>
  <div class="contactUs">
    <!-- swiper -->
    <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <slideOne></slideOne>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import slideOne from './contactSlideOne.vue'

  export default{
    data () {
      return {
        swiperOption: {
          activeitem: 0,
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
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
        }
      }
    },
    components: {
      slideOne
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      this.$nextTick(() => {
        //     you can use current swiper instance object to do something(swiper methods)
        //     然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .contactUs
    height: 100%
    position: relative
  .contactUs
    .swiper-wrapper
      .swiper-slide:nth-child(1)
        background url("../../assets/img/productCenter/bg-stripe.jpg")
        background-size: cover
</style>

