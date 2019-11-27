<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title" v-html="$t('aboutUs.slideFour.title')"></h1>
      <div class="developmentHistory">
        <ul class="nav">
          <li>
            <a @click="Year = 7" :class="{'active': Year === 7}">2017</a>
          </li>
          <li>
            <a @click="Year = 6" :class="{'active': Year === 6}">2016</a>
          </li>
          <li>
            <a @click="Year = 5" :class="{'active': Year === 5}">2015</a>
          </li>
        </ul>
        <ul class="history-content" v-if="Year === 7">
          <li v-for="item in data7">
            <a>{{item.content}}</a>
          </li>
        </ul>
        <ul class="history-content" v-if="Year === 6">
          <li v-for="item in data6">
            <a>{{item.content}}</a>
          </li>
        </ul>
        <ul class="history-content" v-if="Year === 5">
          <li v-for="item in data5">
            <a>{{item.content}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .developmentHistory
    margin-top .4rem
    .nav
      display inline-block
      vertical-align top
      margin-right 2.37rem
      li
        a
          display flex
          align-items center
          justify-content center
          width .96rem
          height .8rem
          position relative
          font-size .2rem
          font-family font2
          color #fff
          cursor pointer
          &:hover
            text-decoration none
            color #ffba14
            &:before
              width 2.32rem
              background-color #ffba14
          &:before
            content ''
            width .96rem
            height 1px
            position absolute
            left 0
            top 0
            background-color #fff
            transition width 1s
          &.active
            color #ffba14
            &:before
              width 2.32rem
              background-color #ffba14
    .history-content
      height 4.6rem
      display inline-block
      font-size 0
      li
        margin-bottom .18rem
        a
          color #ABAAB2
          font-family font2
          font-size .16rem
          &:hover
            text-decoration none
</style>
<script>
  export default{
    data () {
      return {
        Year: 7
      }
    },
    computed: {
      data7 () {
        return this.$t('aboutUs.slideFour.data7')
      },
      data6 () {
        return this.$t('aboutUs.slideFour.data6')
      },
      data5 () {
        return this.$t('aboutUs.slideFour.data5')
      }
    }
  }
</script>
