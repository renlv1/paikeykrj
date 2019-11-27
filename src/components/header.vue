<template>
  <div class="header" v-show="headerShow">
    <div class="headerTop">
      <div class="headerLeft">
        <router-link class="logoA" to="/" :style="{backgroundImage:'url('+logo1+')'}">GROUP</router-link>
        <span class="logoLine"></span>
        <div class="logoText">
            <span>
              {{$t('header.header1')}}
              <br/>
              {{$t('header.header2')}}</span>
        </div>
      </div>
      <div class="headerRight">
        <button @click="langruageEN">EN</button>
        <button @click="langruageCN">CN</button>
        <button class="logoBtn" :style="{backgroundImage:'url('+logo2+')'}" @click="openMenu"></button>
      </div>
    </div>

    <div class="menu_bg" :class="{'active_menu': isActive}">
    </div>
    <div class="menu_wrapper" :class="{'active_menu_wrapper': isActive}">
      <div class="headerTop ortherH">
        <div class="headerRight">
          <button class="blackTxt" @click="langruageEN">EN</button>
          <button class="blackTxt" @click="langruageCN">CN</button>
          <button class="closeBtn" :style="{backgroundImage:'url('+logo4+')'}" @click="closeMenu"></button>
        </div>
      </div>
      <div class="menu_body">
        <div class="menu_list">
          <ul>
            <li>
              <router-link @click.native="closeMenu" to="/">.01&nbsp;&nbsp;<span class="bigT">{{$t('header.menu.menu1')}}</span>
              </router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/about">{{$t('header.menu.menu2')}}</router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/productCenter">{{$t('header.menu.menu3')}}</router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/multimediaEntertainment">{{$t('header.menu.menu4')}}
              </router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/news">{{$t('header.menu.menu5')}}</router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/contact">{{$t('header.menu.menu6')}}</router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link @click.native="closeMenu" to="/industries">.02&nbsp;&nbsp;<span
                class="bigT">{{$t('header.menu.menu7')}}</span></router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/finance">{{$t('header.menu.menu9')}}</router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/game">{{$t('header.menu.menu8')}}</router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/adult">{{$t('header.menu.menu10')}}</router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/entertainment">{{$t('header.menu.menu11')}}</router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/sports">{{$t('header.menu.menu12')}}</router-link>
            </li>
            <li>
              <router-link @click.native="closeMenu" to="/pictures">{{$t('header.menu.menu13')}}</router-link>
            </li>
          </ul>
        </div>
        <div class="phoneNum">
          {{$t('header.menu.menu14')}}&nbsp;&nbsp;
          {{$t('header.menu.menu15')}}&nbsp;&nbsp;
          {{$t('header.menu.menu16')}}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '@/assets/js/bus'
  import Vue from 'vue'
  function setCookie (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toGMTString()
    document.cookie = cname + '=' + cvalue + ';' + expires
  }
  export default{
    data () {
      return {
        headerShow: true,
        logo1: require('../assets/img/allen/logo-π.png'),
        logo2: require('../assets/img/allen/list.png'),
        logo3: require('../assets/img/allen/meunbg.png'),
        logo4: require('../assets/img/allen/close.svg'),
        isActive: false,
        idEmarge: false
      }
    },
    created () {
      if (Vue.config.lang === 'cn') {
        Bus.$emit('setLang', 'cn')
        this.$store.dispatch('setLanguage', 'cn')
      } else if (Vue.config.lang === 'en') {
        Bus.$emit('setLang', 'en')
        this.$store.dispatch('setLanguage', 'en')
      }
    },
    // watch: {
    //   routerPath: function () {
    //     this.getPath()
    //   }
    // },
    // mounted () {
    //   let _this = this
    //   window.onresize = function () {
    //     _this.getPath()
    //   }
    // },
    // computed: {
    //   routerPath () {
    //     return this.$route.path
    //   }
    // },
    methods: {
      // getPath () {
      //   console.log(this.$route.path.indexOf('presell') > -1 && window.innerWidth <= 1200)
      //   if (this.$route.path.indexOf('presell') > -1 && window.innerWidth <= 1200) {
      //     if (window.innerWidth <= 1200) {
      //       this.headerShow = false
      //       this.footerShow = false
      //     } else {
      //       this.headerShow = true
      //       this.footerShow = true
      //     }
      //   } else {
      //     // console.log(this.headerShow)
      //     this.headerShow = true
      //     this.footerShow = true
      //   }
      // },
      openMenu () {
        this.isActive = true
      },
      closeMenu () {
        this.isActive = false
      },
      langruageCN () {
        Vue.config.lang = 'cn'
        setCookie('lang', Vue.config.lang, 30)
        this.$store.dispatch('setLanguage', Vue.config.lang)
        Bus.$emit('setLang', 'cn')
      },
      langruageEN () {
        Vue.config.lang = 'en'
        setCookie('lang', Vue.config.lang, 30)
        this.$store.dispatch('setLanguage', Vue.config.lang)
        Bus.$emit('setLang', 'en')
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 100;
  }

  .headerTop {
    padding-top: 0.9rem;
    width: 100%;
    color: #fff !important;
    overflow: hidden;
  }

  .ortherH {
    position: absolute;
    top: 0;
  }

  .headerLeft {
    float: left;
  }

  .headerRight {
    float: right;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .logoA {
    font-size: 34px;
    color: #fff;
    text-decoration: none;
    line-height: 36px;
    width: 200px;
    height: 66px;
    background-color: #0f89f5;
    box-sizing: border-box;
    padding: 20px 20px 20px 80px;
    float: left;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: 30px 50%;
    font-family: font1;
    margin-left: 50px;
    text-align: center;
    @media screen and (max-width: 768px) {
      width: 100px;
      padding: 20px 20px 20px 50px;
      background-position: 10px 50%;
      margin-left: 10px;
      font-size: 24px;
    }
  }

  .logoLine {
    float: left;
    display: inline-block;
    width: 1px;
    height: 66px;
    background-color: #fff;
    opacity: 0.4;
    margin: 0 40px;
    @media screen and (max-width: 768px) {
      margin: 0 15px;
    }
  }

  .logoText {
    float: left;
    text-align: left;
    height: 66px;
    font-size:0.16rem;
    font-family: font1;
    position: relative;
    opacity: 0.8;

  }

  .logoText span {
    line-height: 20px;
    position: absolute;
    top: 27%;
    display: inline-block;
    width: 180px;
  }

  .headerRight button {
    color: #fff !important;
    opacity: 0.4;
    background: none;
    border: none;
    font-family: font1;
    cursor: pointer;
    font-size: 0.24rem;
    margin-right: 50px;
    height: 66px;
    outline: none;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    @media screen and (max-width: 768px) {
      margin-right: 10px;
    }
  }

  .headerRight button:hover {
    opacity: 1;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }

  .headerRight .blackTxt {
    color: #000 !important;
    opacity: 0.4;
  }

  .headerRight .blackTxt:hover {
    opacity: 1;
  }

  .logoBtn {
    width: 66px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .closeBtn {
    margin-top: 17px;
    width: 24px !important;
    height: 24px !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: 0 0 !important;
  }

  .closeBtn:hover {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); /* Internet Explorer */
    -moz-transform: rotate(180deg); /* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg); /* Opera */
  }

  .menu_bg {
    /*display: none;*/
    background: #fff;
    background-repeat: no-repeat;
    background-position: 0;
    background-size: contain;
    position: fixed;
    z-index: 1000;
    width: 0;
    height: 100%;
    right: 0;
    top: 0;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: all .4s ease-in 0s;
    -webkit-transition: all .4s ease-in 0s;
  }

  .active_menu {
    width: 73%;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 1);
    transition: all .4s ease-in .2s;
    -webkit-transition: all .4s ease-in .2s;
  }

  .menu_wrapper {
    /*display: none;*/
    position: fixed;
    z-index: 1000;
    width: 0;
    height: 100%;
    right: 0;
    top: 0;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    transition: all .4s ease-in 0s;
    -webkit-transition: all .4s ease-in 0s;
  }

  .active_menu_wrapper {
    width: 73%;
    /*z-index: 1000;*/
    -webkit-transform: translateX(100);
    -ms-transform: translateX(100);
    transform: translateX(100);
    transition: all .4s ease-in .2s;
    -webkit-transition: all .4s ease-in .2s;
  }

  .menu_body {
    width: 100%;
    height: 100%;
    /* Center slide text vertically */
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .menu_list {
    display: flex;
    width: 100%;
  }

  .menu_list ul {
    width: 50%;
    font-family: font3;
    text-align: left;
    padding-left: 12%;
  }

  .menu_list ul li {
    margin-top: 0.46rem;
    margin-bottom: 0.46rem;
    font-size: 0.24rem;
  }

  .menu_list ul li .bigT {
    font-size: 0.4rem;
  }

  .menu_list ul li a {
    text-decoration: none;
  }

  .phoneNum {
    position: absolute;
    left: 50px;
    bottom: 46px;
    font-size: 0.2rem;
    opacity: 0.4;
  }
</style>

