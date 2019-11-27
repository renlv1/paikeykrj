<template>
  <div class="News">
    <div class="swiper-container">
      <div class="swiper-slide">
        <div class="mainBox">
          <div style="padding-top: .6rem">
            <div class="news-left">
              <div class="content">
                <p class="time">{{nowDate}}</p>
                <div class="title" v-html="$t('news.title')"></div>
                <div class="title" v-html="$t('news.title2')"></div>
                <!--<p class="title-bottom">{{$t('news.content')}}</p>-->
              </div>
            </div>
            <div class="news-right">
              <ul class="list">
                <li v-for="(news, index) in newsData">
                  <span>0{{index + 1 + (pageNumber-1) * newsData.length}}</span>
                  <router-link :to="{name: 'newsDetail', params: {id: news.id}}">{{news.littleTitle}}</router-link>
                </li>
              </ul>
              <div class="turnPages">
                <a class="page-btn pre" @click="getPreNewsData" v-if="pageNumber !== 1">
                  <div class="btn-img"></div>
                </a>
                <a class="page-btn" @click="getNextNewsData">
                  <div class="btn-img"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  export default{
    data () {
      return {
        nowDate: '',
        pageNumber: 0,
        newsData: []
      }
    },
    created () {
      this.getNowDate()
      this.getNextNewsData()
    },
    methods: {
      getNowDate () {
        let nowDate = new Date()
        let day = nowDate.getDate()
        let month = nowDate.getMonth() + 1
        let year = nowDate.getFullYear()
        this.nowDate = year + '.' + month + '.' + day
      },
      getNextNewsData () {
        this.pageNumber = this.pageNumber + 1
        axios({
          method: 'post',
          baseURL: 'http://news1608.pi-group.biz/common/getNewses',
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'},
          params: {type: 67, pageNo: this.pageNumber}
        }).then((res) => {
          this.newsData = res.data.data
        }).catch((res) => {
          console.log('error')
        })
      },
      getPreNewsData () {
        if (this.pageNumber !== 1) {
          this.pageNumber = this.pageNumber - 1
          axios({
            method: 'post',
            baseURL: 'http://news1608.pi-group.biz/common/getNewses',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'},
            params: {type: 67, pageNo: this.pageNumber}
          }).then((res) => {
            this.newsData = res.data.data
          }).catch((res) => {
            console.log('error')
          })
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .News
    height: 100%
    position: relative
  .News
    .swiper-container
      .swiper-slide
        background url("../../assets/img/news/bg-news.jpg")
        background-size: cover
        .mainBox
          .news-left
            display inline-block
            margin-right 1.98rem
            .content
              width auto
              .time
                font-size .18rem
                margin-bottom 0.08rem
              .title
                font-size 1.6rem
                font-family font1
                margin-left -0.08rem
              .title-bottom
                margin-top .28rem
                font-size .18rem
          .news-right
            display inline-block
            font-size .18rem
            vertical-align top
            .list
              li
                margin-bottom .3rem
                span
                  color rgba(255,255,255,0.4)
                  font-size .28rem
                a
                  display inline-block
                  width 5.14rem
                  margin-left .56rem
                  color #fff
                  text-decoration none
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                  cursor pointer

          .turnPages
            display flex
            justify-content  center
            .page-btn
              display block
              padding .1rem
              cursor pointer
              &:active
                opacity 0.6
              &.pre
                margin-right .1rem
                .btn-img
                  transform rotate(180deg)
              .btn-img
                width .22rem
                height 0.07rem
                background url("../../assets/img/news/next.png") no-repeat
                background-size cover

</style>

