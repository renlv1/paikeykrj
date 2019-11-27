//   公共请求数据
import Vue from 'vue'
import Vuex from 'vuex'
import http from '../api/getData'
// import router from '../router'

Vue.use(Vuex)
var $api = 'http://web.dis20190000test.com'
// var $api = 'https://disapi.pi-group.biz'
export default new Vuex.Store({
  state: {
    userInfo: [],
    account: [],
    loginFlag: false,
    total: 0,
    myList: [],
    detailTotal: 0,
    detailList: [],
    language: ''
  },
  getters: {
    account: state => state.account,
    userInfo: state => state.userInfo,
    headerShow: state => state.headerShow,
    loginFlag: state => state.loginFlag,
    total: state => state.total,
    myList: state => state.myList,
    detailTotal: state => state.detailTotal,
    detailList: state => state.detailList,
    language: state => state.language
  },
  actions: {
    balanceAction ({commit}) {
      http.post($api + '/user/balance').then((res) => { // 用戶信息
        if (res.success) {
          commit('USERINFO', res.data.user)
          commit('ACCOUNT', res.data.accountList[0])
          commit('LOGIN_FLAG', true)
        } else {
          commit('LOGIN_FLAG', false)
        }
      })
    },
    setLanguage ({commit}, data) {
      commit('setLanguage', data)
    },
    setTotal ({commit}, data) {
      commit('setTotal', data)
    },
    setMyList ({commit}, data) {
      commit('setMyList', data)
    },
    setDetailTotal ({commit}, data) {
      commit('setDetailTotal', data)
    },
    setDetailList ({commit}, data) {
      commit('setDetailList', data)
    }
  },
  mutations: {
    setLanguage (state, data) {
      state.language = data
    },
    setMyList (state, data) {
      state.myList = data
    },
    setTotal (state, data) {
      state.total = data
    },
    setDetailList (state, data) {
      state.detailList = data
    },
    setDetailTotal (state, data) {
      state.detailTotal = data
    },
    USERINFO (state, data) {
      state.userInfo = data
    },
    ACCOUNT (state, data) {
      state.account = data
    },
    LOGIN_FLAG (state, data) {
      state.loginFlag = data
    }
  }
})
