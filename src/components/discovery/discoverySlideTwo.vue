<template>
  <div class="mainBox">
    <div class="content">
      <img class="discoverLf" src="../../assets/img/discovery/discoverIcon.png" alt="">
      <div class="discoverRt content-right">
        <h1 class="title" v-html="$t('discover.slideTwo.title')"></h1>
        <p>{{$t('discover.slideTwo.content')}}</p>
        <router-link to="/aboutAssets" class="learnMore"><button class="content-btn">{{$t('discover.slideTwo.btn')}}<i> >></i></button></router-link>
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
          p
            width 7.25rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .learnMore
            .content-btn
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
