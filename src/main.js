// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import en from './resources/i18n/en-US.json'
import cn from './resources/i18n/zh-CN.json'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import http from './api/getData'
import store from './vuex/store'
// import { i18n } from './resources/i18n/config'
// import Bus from './assets/js/bus'
import 'jquery'
// jQuery()
import '../static/js/jquery.mCustomScrollbar.concat.min'
Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = http
Vue.prototype.$api = 'http://web.dis20190000test.com'
// Vue.prototype.$api = 'https://disapi.pi-group.biz'

if (process.BROWSER_BUILD) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}

axios.defaults.withCredentials = true // 存cookie
// 后台国际化
// console.log(Vue.config.lang)
// console.log('44')
// Bus.$on('setLang', (str) => {
//   if (str === 'en') {
//     axios.defaults.headers = {'disbounty-language': 'en'}
//   }
// })
// if (store.getters.language === 'en') {
//   axios.defaults.headers = {'disbounty-language': 'en'}
// }
// 时间戳转换
Vue.prototype.$changeDate = function (time, str = '/', type = 1) {
  function ifTime (value) { // 判断时间是否是个位数
    if (value < 10) {
      return '0' + value
    }
    return value
  }
  let newTime = new Date(time)
  let day = newTime.getDate()
  let month = newTime.getMonth() + 1
  let year = newTime.getFullYear()
  let hours = newTime.getHours()
  let min = newTime.getMinutes()
  let sec = newTime.getSeconds()
  switch (type) {
    case 1:
      return year + str + ifTime(month) + str + ifTime(day) + ' ' + ifTime(hours) + ':' + ifTime(min)
    case 2:
      return year + str + ifTime(month) + str + ifTime(day) + ' 00:00:00'
    case 3:
      return year + str + ifTime(month) + str + ifTime(day) + ' 23:59:59'
    case 4:
      return year + str + ifTime(month) + str + ifTime(day)
    case 5:
      return year + str + ifTime(month) + str + ifTime(day)
    case 6:
      return ifTime(hours) + ':' + ifTime(min)
    case 7:
      return ifTime(hours) + ':' + ifTime(min) + ':' + ifTime(sec)
    case 8:
      return year + str + ifTime(month) + str + ifTime(day) + ' ' + ifTime(hours) + ':' + ifTime(min) + ':' + ifTime(sec)
    case 9:
      return ifTime(month) + str + ifTime(day) + ' ' + ifTime(hours) + ':' + ifTime(min)
    case 10:
      return year + str + ifTime(month) + str + ifTime(day) + ' ' + ifTime(hours) + ':' + ifTime(min)
  }
}

Vue.filter('fourNumber', function (value) { // 保留4位小数点,不四舍五入
  if (!isNaN(value) && value !== null) {
    let f = Math.floor(value * 10000) / 10000
    let s = f.toString()
    let rs = s.indexOf('.')
    if (rs < 0) {
      rs = s.length
      s += '.'
    }
    while (s.length <= rs + 4) {
      s += '0'
    }
    return s
  }
})

Vue.filter('f4', function (value) { // 保留4位小数点,不四舍五入
  if (!isNaN(value) && value !== null) {
    let f = Math.floor(value * 10000) / 10000
    let s = f.toString()
    let rs = s.indexOf('.')
    if (rs < 0) {
      rs = s.length
      s += '.'
    }
    while (s.length <= rs + 4) {
      s += '0'
    }
    return s
  } else {
    return '0.0000'
  }
})

function setCookie (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + ';' + expires
}
function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim()
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
  return ''
}

var x = getCookie('lang')

Vue.config.lang = 'en'

if (!x) {
  setCookie('lang', Vue.config.lang, 30)
} else {
  Vue.config.lang = x
}

var locales = {
  en: en,
  cn: cn
}

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
  // console.log(locales[lang])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

router.afterEach((to, from, next) => {
  if (to.name === 'presell') {
    // router.go(0)
    // window.location.reload()
  }
})
