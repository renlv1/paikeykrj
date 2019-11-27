<template>
    <div class="mainBox">
      <div class="content">
        <h1 class="content-title"><span>π</span>{{$t('aboutAssets.slideOne.title')}}</h1>
        <p class="subtitle">{{$t('aboutAssets.slideOne.subtitle')}}</p>
        <div class="article-content assetsScroll">
          <p class="article-p" v-html="$t('aboutAssets.slideOne.content')"></p>
          <p class="article-p2">{{$t('aboutAssets.slideOne.content2')}}</p>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/css/lin-common.css'
</style>
<script>
  import $ from 'jquery'
  export default{
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        this.assetsScroll()
      })
    },
    methods: {
      assetsScroll () {
        /* eslint-disable */
        $(".assetsScroll").mCustomScrollbar()
        /* eslint-disable */
      }
    }
  }
</script>

