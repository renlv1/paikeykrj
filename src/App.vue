<template>
  <div id="app" :class="{'noOverflow': Overflow}">
    <vheader v-show="headerShow"></vheader>
    <router-view></router-view>
    <vfooter v-show="footerShow"></vfooter>
  </div>
</template>
<script type="text/ecmascript-6">
  import vheader from './components/header.vue'
  import vfooter from './components/footer.vue'
  export default {
    name: 'app',
    data () {
      return {
        Overflow: false,
        headerShow: true,
        footerShow: true,
        screenWidth: window.innerWidth
      }
    },
    mounted () {
      let _this = this
      _this.getPath()
      window.onresize = function () {
        // _this.screenWidth = window.innerWidth
        _this.getPath()
      }
    },
    watch: {
      routerPath: function () {
        this.getPath()
      }
    },
    computed: {
      routerPath () {
        return this.$route.path
      }
    },
    methods: {
      getPath () {
        if (this.$route.path.indexOf('presell') > -1) {
          if (window.innerWidth > 1200) {
            this.headerShow = true
            this.footerShow = true
            this.Overflow = false
          } else {
            this.headerShow = false
            this.footerShow = false
            this.Overflow = true
          }
        } else {
          // console.log(this.headerShow)
          this.headerShow = true
          this.footerShow = true
          this.Overflow = false
        }
      }
    },
    components: {vheader, vfooter}
  }
</script>

<style lang="less">
  @font-face {
    font-family: 'font1';   /*字体名称*/
    src: url('../src/assets/fonts/HeroicCondensed-Medium.ttf');       /*字体源文件*/
  }
  @font-face {
    font-family: 'font2';   /*字体名称*/
    src: url('../src/assets/fonts/MicrosoftYaHeiLight.ttf');       /*字体源文件*/
  }
  @font-face {
    font-family: 'font3';   /*字体名称*/
    src: url('../src/assets/fonts/Neoplanta-Regular_0.ttf');       /*字体源文件*/
  }

@import './assets/css/reset.css';
@import './assets/css/jquery.mCustomScrollbar.css';
@import './assets/css/scrollBar.css';
@import './assets/css/bcss/components_style';

#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    overflow: visible;
  }
}
.noOverflow{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
