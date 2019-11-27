<template>
  <div class="NewsDetail">
    <div class="swiper-container">
      <div class="swiper-slide">
        <div class="mainBox">
          <div class="content">
            <div class="newDetail-content">
              <router-link to="/news" class="backNews-btn"></router-link>
              <h1 class="title">{{newsDetail.title}}</h1>
              <p class="time">{{this.newsDate}}</p>
              <div class="article-content scrollBar">
                <div v-html="newsDetail.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/css/lin-common.css'
  .NewsDetail
    height: 100%
    position: relative
  .NewsDetail
    .swiper-container
      .swiper-slide
        background url("../../assets/img/news/bg-news.jpg")
        background-size: cover
        .mainBox
          .content
            .newDetail-content
              .backNews-btn
                margin-left .4rem
                display block
                width .73rem
                height .73rem
                background url("../../assets/img/industries/downArrow.png") no-repeat
                background-size cover
                transform rotate(90deg)
                margin-bottom .3rem
                &:active
                  opacity 0.6
              .title
                padding-left .4rem
                font-size .46rem
                margin-bottom 0.05rem
              .time
                padding-left .4rem
                font-size .34rem
                font-family font1
                color rgba(255, 255, 255, 0.4)
                margin-bottom .1rem
              .article-content
                width 10.24rem
                height 4rem
                font-size .18rem
                line-height 2
                overflow auto
</style>

<script>
  import $ from 'jquery'
  import axios from 'axios'
  export default{
    data () {
      return {
        newsDate: '',
        newsDetail: []
      }
    },
    created () {
      this.getNewsData()
    },
    mounted () {
      this.$nextTick(() => {
        this.scrollBarFun()
      })
    },
    methods: {
      getNewsData () {
        axios({
          method: 'post',
          baseURL: 'http://news1608.pi-group.biz/common/getNewsDetail',
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'},
          params: {id: this.$route.params.id}
        }).then((res) => {
          this.newsDetail = res.data.data
          let imgSrc = res.data.data.content.replace(/src="\/ueditor\//g, ' src="http://news1608.pi-group.biz/ueditor/')
          this.newsDetail.content = imgSrc
          this.getCreateTime()
        }).catch((res) => {
          console.log('error')
        })
      },
      getCreateTime () {
        let m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec']
        let newTime = new Date(this.newsDetail.createtime)
        let day = newTime.getDate()
        let month = newTime.getMonth()
        let year = newTime.getFullYear()
        this.newsDate = m[month] + ' ' + day + ',' + year
      },
      scrollBarFun () {
        /* eslint-disable */
        $(".scrollBar").mCustomScrollbar()
        /* eslint-disable */
      }
    }
  }
</script>
