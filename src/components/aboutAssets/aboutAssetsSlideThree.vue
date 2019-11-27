<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title" v-html="$t('aboutAssets.slideThree.title')"></h1>
      <p class="subtitle" v-html="$t('aboutAssets.slideThree.subtitle')"></p>
      <div class="article-content article-content1027">
        <p class="article-p">{{$t('aboutAssets.slideThree.content')}}</p>
        <p class="article-p2">{{$t('aboutAssets.slideThree.content2')}}</p>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/css/lin-common.css'
  .aboutAssets
    .swiper-container
      .swiper-slide
        .mainBox
          .content
            .article-content
              &.article-content1027
                width 10.27rem
                height auto
                margin-left .4rem
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>

