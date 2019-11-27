/*
  * 公共弹窗组件
  * @param {Option}
  * 调用方式
  * Dialog(param)
*/

import Vue from 'vue'
import dialogVue from './index.vue'

// 设置中/英文默认按钮文字
// function getCookie (sName) {
//   var aCookie = document.cookie.split(';')
//   for (var i = 0; i < aCookie.length; i++) {
//     var aCrumb = aCookie[i].split('=')
//     if (sName === aCrumb[0]) {
//       return unescape(aCrumb[1])
//     }
//   }
//   return null
// }

function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim()
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
  return ''
}

var name = getCookie('lang')
let OK_TEXT = name === 'en' ? 'Sure' : '确定'
let CANCEL_TEXT = name === 'en' ? 'Cancel' : '取消'

let defaults = {
  type: 'alert', // 弹框类型 alert、confirm
  title: '', // 标题
  msg: '', // 内容文字
  okText: OK_TEXT, // 确定按钮文字
  cancelText: CANCEL_TEXT, // 取消按钮文字
  okFn: null, // 确定按钮回调函数
  cancleFn: null, // 取消按钮回调函数
  align: 'center' // 内容文字对齐方式
}
let instance = null
let DialogConstructor = Vue.extend(dialogVue)
let initInstance = () => {
  instance = null
  instance = new DialogConstructor({
    el: document.createElement('div')
  })
}

const Dialog = (options = {}) => {
  initInstance()
  let mergeOptions = Object.assign({}, defaults, options)

  Object.keys(mergeOptions).forEach(prop => {
    instance[prop] = mergeOptions[prop]
  })

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })
}

export default Dialog
