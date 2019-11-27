<template>
  <div class="mainBox">
    <div class="content">
      <img class="discoverLf" src="../../assets/img/discovery/discoverIcon2.png" alt="">
      <div class="discoverRt content-right">
        <h1 class="title" v-html="$t('discover.slideThree.title')"></h1>
        <router-link to="/DiscoverDetail"><span>1</span>{{$t('discover.slideThree.content')}}<i>>></i></router-link>
        <router-link to="/DiscoverDetail"><span>2</span>{{$t('discover.slideThree.content2')}}<i>>></i></router-link>
        <router-link to="/DiscoverDetail"><span>3</span>{{$t('discover.slideThree.content3')}}<i>>></i></router-link>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .mainBox
    .content
      .discoverRt
        &.content-right
          .title
              margin-top .2rem
              line-height 1.2rem
            i
              font-style normal
          a
            display block
            color #fff
            font-size .24rem
            margin-bottom .4rem
            cursor pointer
            font-family font2
            &:hover
              text-decoration none
            &:active
              opacity 0.6
            span
              margin-right .2rem
            i
              color #ffba14
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
