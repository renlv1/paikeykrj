<template>
  <div class="presell-one">
    <div class="web">
      <div class="one-c">
        <div class="c-title">
          <h3><span>TIP</span> {{$t('presellOne.text1')}}</h3>
          <div class="time-box">
            <span>{{days}}</span> {{$t('presellOne.text2')}} <span>{{hours}}</span> {{$t('presellOne.text3')}} <span>{{minutes}}</span> {{$t('presellOne.text4')}} <span>{{seconds}}</span> {{$t('presellOne.text5')}}
          </div>
          <p>{{$t('presellOne.text6')}}(π)</p>
          <div class="price-box">{{canBidMinPrice | fourNumber}}~{{canBidMaxPrice | fourNumber}}</div>
          <div class="amount">{{$t('presellOne.text7')}}：<span>{{issueTotal | fourNumber}}</span> TIP</div>
          <div class="info">{{$t('presellOne.text8')}}</div>
          <div class="buy-btn" @click="bookingBuy" v-if="loginFlag">{{$t('presellOne.text9')}}</div>
          <div class="buy-btn" @click="loginBtn" v-else>{{$t('presellOne.text12')}}{{$t('presellOne.text13')}}</div>
          <div class="islogin" v-show="loginFlag">{{$t('presellOne.text10')}},
            <span v-if="userInfo.nickname">{{userInfo.nickname}}</span><span v-else>{{userInfo.username}}</span>
            <span @click="loginOut" class="user-box"> {{$t('presellOne.text11')}}</span>
          </div>
          <!--<div class="islogin" v-else>{{$t('presellOne.text10')}}, {{$t('presellOne.text12')}}<span @click="loginBtn"> {{$t('presellOne.text13')}}</span></div>-->
        </div>
      </div>
    </div>
    <div class="appointment-popup" v-show="loginShow">
      <div class="myPopup-box">
        <div class="left-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="left-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <i class="icon_false" @click="closePayShow"></i>
        <div class="formDiv">
          <div class="buy-title">{{$t('presellOne.text13')}}</div>
          <div class="price-input money-input">
            <input class="buy-input" @keyup.enter="login" @input="loginTip = ''" v-model.trim="loginUserName"type="text"  :placeholder="$t('presellOne.text33')">
          </div>
          <div class="price-input money-input">
            <input class="buy-input" @keyup.enter="login" @input="loginTip = ''" v-model.trim="loginPassword"  type="password" :placeholder="$t('presellOne.text34')">
            <div class="error-tip">{{loginTip}}</div>
          </div>
          <div class="submit-btn" @click="login">{{$t('presellOne.text31')}}</div>
        </div>
      </div>
    </div>
    <!--    预约弹窗-->
    <div class="appointment-popup" v-show="appointmentShow">
      <div class="myPopup-box">
        <div class="left-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="left-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="icon_false close-icon" @click="closeDialog"></div>
        <div class="formDiv">
          <div class="buy-title">{{$t('presellOne.text9')}}</div>
          <div class="price-input">
            <span>{{$t('presellOne.text14')}}</span> <input class="buy-input" v-model.trim="price" type="number" :placeholder="$t('presellOne.text15')" @input="checkInput('price')" onpaste="return false">
           <p>π</p>
          </div>
          <div class="price-range">{{$t('presellOne.text16')}}：{{canBidMinPrice | fourNumber}}-{{canBidMaxPrice | fourNumber}}</div>
          <div class="price-input">
            <span>{{$t('presellOne.text17')}}</span> <input class="buy-input" v-model.trim="amount" type="number" :placeholder="$t('presellOne.text18')" @input="checkInput('amount')" onpaste="return false">
            <div class="error-tip">{{errorMsg}}</div>
            <p>TIP</p>
          </div>
          <div class="price-input order-money">
            <span>{{$t('presellOne.text19')}}</span>
            <input class="buy-input" v-model.trim="orederMoney" readonly>
            <!--<p>{{orederTotal}}</p>-->
            <p>π</p>
          </div>
          <div class="account">{{$t('presellOne.text20')}}：{{account.balance | fourNumber}}π</div>
          <div class="submit-btn" @click="submitBuy">{{$t('presellOne.text21')}}</div>
        </div>
      </div>
    </div>
    <!--    支付弹窗-->
    <div class="appointment-popup" v-show="payShow">
      <div class="myPopup-box">
        <div class="left-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="left-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <i class="icon_false" @click="closePayShow"></i>
        <div class="formDiv">
          <div class="buy-title">{{$t('presellOne.text22')}}</div>
          <div class="price-input money-input">
            <span class="pay-input">{{$t('presellOne.text23')}}</span> <input class="buy-input" v-model.trim="payPassword" type="password" :placeholder="$t('presellOne.text24')">
          </div>
          <div class="price-input money-input">
            <span class="pay-input" v-if="userInfo.openGoogleCode === 2">{{$t('presellOne.text25')}}</span>
            <span class="pay-input" v-else>{{$t('presellOne.text47')}}</span>
            <input class="buy-input" v-model.trim="payCode" type="text" :placeholder="$t('presellOne.text26')" v-if="userInfo.openGoogleCode === 2">
            <input class="buy-input email-input" v-model.trim="payCode" type="text" :placeholder="$t('presellOne.text27')" v-else>
            <div class="send" @click="sendCode" :class="{'disable-send':isDisabled}" v-show="userInfo.openGoogleCode !==2" >{{sendBtnValue}}</div>
            <div class="error-tip">{{payTip}}</div>
            <div class="error-tip" v-show="sendErrMsg">{{sendErrMsg}}</div>
          </div>
          <div class="submit-btn" @click="submitPay">{{$t('presellOne.text31')}}</div>
        </div>
      </div>
    </div>
    <!--    失败弹窗-->
    <div class="appointment-popup" v-show="failedShow">
      <div class="myPopup-box loginOut">
        <div class="left-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="left-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <i class="icon_false" @click="closePayShow"></i>
        <div class="formDiv">
          <div class="buy-title">{{codeMsg}}</div>
          <div class="submit-btn" @click="closePayShow">{{$t('presellOne.text31')}}</div>
        </div>
      </div>
    </div>
    <!--    退出登录弹窗-->
    <div class="appointment-popup" v-show="loginOutShow">
      <div class="myPopup-box loginOut">
        <div class="left-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="left-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="formDiv">
          <div class="buy-title">{{$t('presellOne.text29')}}</div>
          <div class="btn-box">
            <div class="cancel-btn" @click="closePayShow">{{$t('presellOne.text30')}}</div>
            <div class="sure-btn" @click="loginOutBtn">{{$t('presellOne.text31')}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--    成功弹窗-->
    <div class="appointment-popup" v-show="successfulShow">
      <div class="myPopup-box loginOut">
        <div class="left-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-top">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="left-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <div class="right-bottom">
          <div class="heng"></div>
          <div class="shu"></div>
        </div>
        <i class="icon_false" @click="closePayShow"></i>
        <div class="formDiv">
          <div class="buy-title">{{result}}</div>
          <div class="submit-btn" @click="sureBtn">{{$t('presellOne.text31')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  // import Bus from '../../../assets/js/bus'
  // import Dialog from '../../dialog/dialog.vue'
  export default{
    data () {
      return {
        orederTotal: '',
        result: '',
        successfulShow: false,
        loginShow: false,
        loginTip: '',
        loginUserName: '',
        loginPassword: '',
        loginOutShow: false,
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        lastBidTime: '', // 距结束时间(秒数)
        issueTotal: '', // 预售总量
        canBidMaxPrice: '', // 预计成交最高单价
        canBidMinPrice: '', //  预计成交最低单价
        notLogin: '',
        appointmentShow: false,
        failedShow: false,
        payShow: false,
        isDisabled: false,
        openGoogleCode: false,
        openTradePassword: '',
        openMobileCode: '',
        codeType: '',
        sendBtnValue: this.$t('presellOne.text45'),
        sendBtnTimes: 60,
        sendErrMsg: '',
        payPassword: '', // 支付密码
        payCode: '', // 支付验证码
        price: '', // 单价
        amount: '', // 数量
        errorMsg: '', // 预约购买错误提示
        payTip: '', // 支付错误提示
        codeMsg: '',
        countdownTime: null,
        timer: null,
        userBalance: '', // 用户余额
        pageSize: 5,
        nickName: '',
        userEmail: '', // 用户邮箱
        ajaxLang: ''
      }
    },
    props: {
      dialog: {
        default: Boolean
      }
    },
    created () {
      this.$store.dispatch('balanceAction')
      // this.getCheckAccount()
      this.getBountyData(1)
      // this.login()
    },
    methods: {
      sureBtn () {
        this.$emit('dialogShow', false)
        this.successfulShow = false
      },
      closeDialog () {
        this.errorMsg = ''
        this.price = ''
        this.amount = ''
        this.payPassword = ''
        this.payCode = ''
        this.sendErrMsg = ''
        this.payTip = ''
        this.appointmentShow = false
        this.$emit('dialogShow', false)
      },
      closePayShow () {
        this.errorMsg = ''
        this.price = ''
        this.amount = ''
        this.payPassword = ''
        this.payCode = ''
        this.sendErrMsg = ''
        this.payTip = ''
        this.payShow = false
        this.loginShow = false
        this.failedShow = false
        this.loginOutShow = false
        this.successfulShow = false
        this.loginTip = ''
        this.$emit('dialogShow', false)
      },
      // 1.3 TIP预售主页
      getBountyData (page) {
        this.$http.post(this.$api + '/tipbid/bountyTipBidIndex', {
          pageIndex: page,
          pageSize: this.pageSize
        }).then(res => {
          if (res.success === true) {
            this.issueTotal = res.data.issueTotal
            this.canBidMinPrice = res.data.canBidMinPrice
            this.canBidMaxPrice = res.data.canBidMaxPrice
            this.lastBidTime = res.data.lastBidTime
            this.countdownTime = setInterval(() => {
              this.lastBidTime--
              if (this.lastBidTime <= 0) {
                this.days = '00'
                this.hours = '00'
                this.minutes = '00'
                this.seconds = '00'
                clearInterval(this.countdownTime)
              } else {
                let day = parseInt(Number(this.lastBidTime) / 60 / 60 / 24)
                let hour = parseInt(Number(this.lastBidTime) / 60 / 60 % 24)
                let minute = parseInt(Number(this.lastBidTime) / 60 % 60)
                let second = parseInt(Number(this.lastBidTime) % 60)
                this.days = this.checkTime(day)
                this.hours = this.checkTime(hour)
                this.minutes = this.checkTime(minute)
                this.seconds = this.checkTime(second)
              }
            }, 1000)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      checkTime (i) {
        if (i < 10) {
          i = '0' + i
        }
        return i
      },
      cancelDialog () {
        this.$emit('dialogShow', false)
        this.loginShow = false
      },
      successDialog () {
        this.$emit('dialogShow', false)
        // this.getCheckAccount()
        this.loginShow = false
        this.notLogin = true
      },
      // 支付
      submitPay () {
        this.payTip = ''
        if (this.userInfo.openGoogleCode === 2) {
          this.codeType = 1
        } else {
          this.codeType = 2
        }
        if (this.payPassword === '') {
          this.payTip = this.$t('presellOne.text36')
          return
        }
        if (this.payCode === '') {
          this.payTip = this.$t('presellOne.text37')
          return
        }
        this.$http.post(this.$api + '/security/safetyValidate', {
          tradePwd: this.payPassword,
          code: this.payCode,
          codeType: this.codeType
        }).then(res => {
          if (res.success === true) {
            this.$http.post(this.$api + '/tipbid/bountyTipBid', {
              bidAmount: this.orederMoney,
              tipAmount: this.amount
            }).then(res => {
              if (res.success === true) {
                this.payShow = false
                this.successfulShow = true
                this.result = this.$t('presellOne.text38')
                this.getMyList(1)
              } else {
                this.payShow = false
                if (res.msg === '安全密码错误') {
                  this.result = this.$t('presellTwo.text35')
                } else if (res.msg === '验证码无效') {
                  this.result = this.$t('presellTwo.text36')
                } else {
                  this.result = res.msg
                }
                this.successfulShow = true
              }
            }).catch(err => {
              console.log(err)
            })
          } else {
            this.payShow = false
            if (res.msg === '安全密码错误') {
              this.result = this.$t('presellTwo.text35')
            } else if (res.msg === '验证码无效') {
              this.result = this.$t('presellTwo.text36')
            } else {
              this.result = res.msg
            }
            this.successfulShow = true
            this.sendBtnValue = this.$t('presellOne.text45')
            this.sendBtnTimes = 60
            this.isDisabled = false
            clearTimeout(this.timer)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 提交购买
      submitBuy () {
        this.payTip = ''
        if (this.price === '') {
          this.errorMsg = this.$t('presellOne.text39')
          return
        }
        if (this.amount === '') {
          this.errorMsg = this.$t('presellOne.text40')
          return
        }
        if (this.orederMoney > this.account.balance) {
          this.errorMsg = this.$t('presellOne.text41')
          return
        }
        this.$http.post(this.$api + '/tipbid/bountyTipBid', {
          bidAmount: this.orederMoney,
          tipAmount: this.amount
        }).then(res => {
          if (res.success === true) {
            this.appointmentShow = false
            this.successfulShow = true
            this.result = this.$t('presellOne.text38')
            this.getMyList(1)
          } else {
            if (res.resultCode === 'ACCOUNT_LOCK') {
              this.appointmentShow = false
              this.payShow = true
            } else {
              this.appointmentShow = false
              this.successfulShow = true
              this.result = res.msg
            }
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 预约购买
      bookingBuy () {
        if (Vue.config.lang === 'cn') {
          this.sendBtnValue = '获取验证码'
        } else {
          this.sendBtnValue = 'code'
        }
        this.errorMsg = ''
        this.price = ''
        this.amount = ''
        this.payPassword = ''
        this.payCode = ''
        this.sendErrMsg = ''
        this.payTip = ''
        this.loginTip = ''
        this.$emit('dialogShow', true)
        if (this.userInfo.openTradePassword !== 2) {
          this.failedShow = true
          this.codeMsg = this.$t('presellOne.text42')
        } else if (this.userInfo.openGoogleCode !== 2 && this.userInfo.openMobileCode !== 2) {
          this.failedShow = true
          this.codeMsg = this.$t('presellOne.text43')
        } else if (this.userInfo.openTradePassword === 2 && this.userInfo.openGoogleCode === 2 || this.userInfo.openMobileCode === 2) {
          this.appointmentShow = true
        }
      },
      // 1.3 查询用户信息
      // getCheckAccount () {
      //   this.$http.post(this.$api + '/user/balance').then(res => {
      //     if (res.success === true) {
      //       this.openGoogleCode = res.data.user.openGoogleCode
      //       this.openMobileCode = res.data.user.openMobileCode
      //       this.openTradePassword = res.data.user.openTradePassword
      //       this.nickName = res.data.user.nickname
      //       this.userBalance = Number(res.data.accountList[0].balance)
      //       this.userEmail = res.data.user.email
      //       this.notLogin = true
      //     }
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // },
      // getDetailList (page) {
      //   this.$http.post(this.$api + '/tipbid/bountyTipBidIndexOfTotal', {
      //     pageIndex: page,
      //     pageSize: this.pageSize
      //   }).then(res => {
      //     if (res.success === true) {
      //       if (res.data.bidRecordTotalList.length === 0) {
      //         this.$store.dispatch('detailTotal', 0)
      //         this.$store.dispatch('detailList', '')
      //       } else {
      //         this.$store.dispatch('detailTotal', res.mapData.totalPage)
      //         this.$store.dispatch('detailList', res.data.bidRecordList)
      //       }
      //     } else {
      //       this.$store.dispatch('detailTotal', 0)
      //       this.$store.dispatch('detailList', '')
      //     }
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // },
      // 我的预约
      getMyList (page) {
        this.$http.post(this.$api + '/tipbid/myBountyTipBidList', {
          pageIndex: page,
          pageSize: this.pageSize
        }).then(res => {
          if (res.success === true) {
            if (res.data.bidRecordList.length === 0) {
              this.$store.dispatch('setTotal', 0)
              this.$store.dispatch('setMyList', '')
            } else {
              this.$store.dispatch('setTotal', res.mapData.totalCount)
              this.$store.dispatch('setMyList', res.data.bidRecordList)
            }
          } else {
            this.$store.dispatch('setTotal', 0)
            this.$store.dispatch('setMyList', '')
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 登录
      login () {
        // Bus.$on('setLang', (str) => {
        //   console.log(str === 'en')
        //   if (str === 'en') {
        //     this.ajaxLang = 'en'
        //   }
        // })
        // if (this.language === 'en') {
        //   this.ajaxLang = 'en'
        // }
        // console.log(this.ajaxLang)
        // this.$http.post(`${this.$api}/user/weblogin?userName=${this.loginUserName}&password=${this.loginPassword}`, {}, {headers: {'disbounty-language': this.ajaxLang}}).then((res) => {
        //   if (res.data.success === true) {
        //     this.$store.dispatch('balanceAction')
        //     this.$emit('dialogShow', false)
        //     this.loginShow = false
        //     // this.getCheckAccount()
        //     this.getMyList()
        //   } else {
        //     this.loginTip = res.msg
        //   }
        // })
        if (this.loginUserName && this.loginPassword) {
          this.$http.post(this.$api + '/user/weblogin', {
            userName: this.loginUserName,
            password: this.loginPassword
          }).then(res => {
            if (res.success === true) {
              this.$store.dispatch('balanceAction')
              this.$emit('dialogShow', false)
              this.loginShow = false
              // this.getCheckAccount()
              this.getMyList(1)
            } else {
              if (res.msg === '用户不存在') {
                this.loginTip = this.$t('presellTwo.text31')
              } else if (res.msg === '用户名或密码错误') {
                this.loginTip = this.$t('presellTwo.text32')
              } else if (res.msg === '密码输入错误次数过多,请稍后再试') {
                this.loginTip = this.$t('presellTwo.text33')
              } else {
                this.loginTip = res.msg
              }
            }
          })
        } else {
          this.loginTip = this.$t('presellOne.text44')
        }
      },
      // 退出登录
      loginOutBtn () {
        this.loginUserName = ''
        this.loginPassword = ''
        this.$http.post(this.$api + '/user/logout').then(res => {
          if (res.success === true) {
            this.$store.dispatch('balanceAction')
            this.$emit('dialogShow', false)
            this.notLogin = false
            this.loginOutShow = false
          }
        }).catch(err => {
          console.log(err)
        })
      },
      loginOut () {
        this.$emit('dialogShow', true)
        this.loginOutShow = true
      },
      loginBtn () {
        this.loginUserName = ''
        this.loginPassword = ''
        this.loginShow = true
        this.$emit('dialogShow', true)
      },
      // 发送邮箱验证码
      sendCode () {
        if (this.sendBtnValue === this.$t('presellOne.text45')) {
          this.isDisabled = true
          this.$http.post(this.$api + '/user/sendEmailCode', {
            email: this.userInfo.userEmail,
            sendType: 2
          }).then(res => {
            if (res.success === true) {
              this.countDown()
              this.sendErrMsg = this.$t('presellOne.text46')
            } else {
              this.isDisabled = false
              this.sendErrMsg = res.msg
            }
            setTimeout(() => {
              this.sendErrMsg = ''
            }, 1500)
          })
        }
      },
      // 短信倒计时
      countDown () {
        if (this.sendBtnTimes === 0) {
          this.sendBtnValue = this.$t('presellOne.text45')
          this.sendBtnTimes = 60
          this.isDisabled = false
          clearTimeout(this.timer)
        } else {
          this.sendBtnTimes--
          this.sendBtnValue = this.sendBtnTimes
          this.isDisabled = true
          this.timer = setTimeout(() => this.countDown(), 1000)
        }
      },
      checkInput (field) {
        let val = this[field]
        if (!/^\d*\.{0,1}\d{0,4}$/.test(val)) { // 不能输入特殊符号+-等,不能输入多个小数点，不能小数点后面超过4位小数
          this[field] = val.substring(0, val.length - 1)
        }
        if (/^\./.test(this[field])) { // 如果是"."
          this[field] = ''
        }
        this[field] = this[field].replace(/[^0-9/.]/g, '') // 只能是数字或者.
      }
    },
    components: {
      vLogin: resolve => require(['@/components/login.vue'], resolve)
    },
    computed: {
      ...mapGetters([
        'loginFlag',
        'userInfo',
        'account',
        'language'
      ]),
      orederMoney () {
        if (this.price !== '' && this.amount !== '') {
          return (parseFloat(this.price) * parseFloat(this.amount)).toFixed(4)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @titColor: #fff; // 字体
  @yellow: #f9b72b;
  @inputColor: #4d4c51; // input边框
.presell-one{
  .web{
    .one-c{
      padding-top: 150px;
      text-align: center;
      @media screen and (max-width: 1500px) {
        padding-top: 200px;
      }
      @media screen and (max-width: 1366px) {
        padding-top: 150px;
      }
      @media screen and (max-width: 1200px) {
        padding-top: 250px;
      }
      .c-title{
        @media screen and (max-width: 1250px) {
        }
      }
      h3{
        font-size: 60px;
        color: @titColor;
        margin-bottom: 40px;
        @media screen and (max-width: 1500px) {
          font-size: 38px;
          margin-bottom: 20px;
        }
        @media screen and (max-width: 1250px) {
          font-size: 28px;
          margin-bottom: 20px;
        }
        span{
          color: @yellow;
        }
      }
      .time-box{
        font-size: 20px;
        color: @titColor;
        margin-bottom: 50px;
        @media screen and (max-width: 1500px) {
          margin-bottom: 30px;
        }
        @media screen and (max-width: 1250px) {
          margin-bottom: 20px;
        }
        @media screen and (max-width:768px) {
          font-size: 14px;
        }
        span{
          color: @yellow;
        }
      }
      p{
        font-size: 24px;
        color: @titColor;
        @media screen and (max-width: 1500px) {
          font-size: 18px;
        }
      }
      .price-box{
        font-size: 80px;
        color: @titColor;
        margin: 30px 0;
        @media screen and (max-width: 1500px) {
          font-size: 40px;
          margin: 20px 0;
        }
        @media screen and (max-width: 1250px) {
          font-size: 30px;
        }
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
      .amount{
        font-size: 20px;
        color: @titColor;
        @media screen and (max-width: 1200px) {
          font-size: 14px;
        }
        span{
          color: @yellow;
        }
      }
      .info{
        font-size: 20px;
        color: #c5c2cc;
        width: 1200px;
        margin: 60px auto 40px;
        @media screen and (max-width: 1500px) {
          margin: 40px auto 40px;
        }
        @media screen and (max-width: 1200px) {
          width: 80%;
          font-size: 14px;
        }
      }
      .buy-btn{
        font-size: 24px;
        color: @titColor;
        width: 374px;
        height: 106px;
        background-image: url("../../../assets/img/presell/buy-bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0 auto;
        line-height: 106px;
        cursor: pointer;
        user-select: none;
        @media screen and (max-width: 1200px) {
          width: 300px;
          height: 88px;
          line-height: 88px;
        }
      }
      .islogin{
        font-size: 20px;
        color: #fff;
        .user-box{
          cursor: pointer;
          user-select: none;
          color: #0f89f5;
        }
      }
    }
  }
  .appointment-popup{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    &.loginOutFlag{
      top: -15%;
    }
    .myPopup-box{
      width: 600px;
      padding: 60px 200px;
      //color: #1a1a1a;
      position: relative;
      border: 1px solid #201F26;
      background-color: #201F26;
      @media screen and (max-width: 1200px) {
        width: 80%;
        padding: 30px;
      }
      .icon_false{
        position: absolute;
        right: 30px;
        top: 30px;
        display: inline-block;
        width: 20px;
        height: 5px;
        background: #999;
        line-height: 0;
        font-size: 0;
        vertical-align: middle;
        -webkit-transform: rotate(45deg);
        cursor: pointer;
        user-select: none;
        @media screen and (max-width: 768px) {
         top: 20px;
        }
      }
      .icon_false:after {
        content: '/';
        display: block;
        width: 20px;
        height: 5px;
        background: #999;
        -webkit-transform: rotate(-90deg);
      }
      .close-icon{
        top: 30px;
        @media screen and (max-width: 768px) {
          top: 20px;
        }
      }
      .left-top{
        .heng{
          position: absolute;
          left: 0;
          top: 5px;
          width: 9px;
          height: 1px;
          background-color: #3E3D43;
        }
        .shu{
          position: absolute;
          left: 4px;
          top: 0;
          width: 1px;
          height: 10px;
          background-color: #3E3D43;
        }
      }
      .right-top{
        .heng{
          position: absolute;
          right: 0;
          top: 5px;
          width: 9px;
          height: 1px;
          background-color: #3E3D43;
        }
        .shu{
          position: absolute;
          right: 4px;
          top: 0;
          width: 1px;
          height: 10px;
          background-color: #3E3D43;
        }
      }
      .left-bottom{
        .heng{
          position: absolute;
          left: 0;
          bottom: 5px;
          width: 9px;
          height: 1px;
          background-color: #3E3D43;
        }
        .shu{
          position: absolute;
          left: 4px;
          bottom: 0;
          width: 1px;
          height: 10px;
          background-color: #3E3D43;
        }
      }
      .right-bottom{
        .heng{
          position: absolute;
          right: 0;
          bottom: 5px;
          width: 9px;
          height: 1px;
          background-color: #3E3D43;
        }
        .shu{
          position: absolute;
          right: 4px;
          bottom: 0;
          width: 1px;
          height: 10px;
          background-color: #3E3D43;
        }
      }
      .buy-title{
        font-size: 24px;
        color: @titColor;
        text-align: center;
        margin-bottom: 60px;
      }
      .order-money{
        margin-top: 100px;
        @media screen and (max-width: 768px) {
          margin-top: 70px;
        }
      }
      .price-input{
        position: relative;
        box-sizing: border-box;
        border: 1px solid @inputColor;
        height: 62px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 768px) {
          height: 40px;
        }
        p{
          font-size: 18px;
          right: 10px;
          position: absolute;
          color: #999;
        }
        .error-tip{
          position: absolute;
          top: 80px;
          font-size: 18px;
          color: #ff4e47;
        }
        .send{
          padding: 0 10px;
          font-size: 18px;
          color: #f9b72b;
          position: absolute;
          right: 0;
          cursor: pointer;
          user-select: none;
          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
          &.disable-send{
            pointer-events: none;
            cursor: auto;
          }
        }
        span{
          font-size: 18px;
          color: @titColor;
          margin: 0 60px;
          @media screen and (max-width: 1200px) {
            margin: 0 20px;
            white-space: nowrap;
            font-size: 14px;
          }
        }
        .pay-input{
          white-space: nowrap;
          width: 100px;
          @media screen and (max-width: 768px) {
            width: 60px;
          }
        }
        .buy-input{
          height: 100%;
          font-size: 18px;
          color: #999;
          padding: 0 40px;
          flex: 1;
          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
        .email-input{
          flex: 0;
        }
        input::-webkit-input-placeholder {
          opacity: 0.6;
          color: #999;
        }
      }
      .money-input{
        margin-top: 60px;
      }
      .price-range{
        font-size: 18px;
        color: #999;
        margin: 30px 0 40px;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
      .account{
        margin-top: 30px;
        font-size: 18px;
        color: #999;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
      .submit-btn{
        text-align: center;
        font-size: 24px;
        color: @titColor;
        width: 340px;
        height: 72px;
        background-image: url("../../../assets/img/presell/buy-bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin: 60px auto 0;
        line-height: 72px;
        cursor: pointer;
        user-select: none;
        @media screen and (max-width: 1200px) {
          width: 300px;
          height: 88px;
          line-height: 88px;
        }
        @media screen and (max-width: 500px) {
          width: 200px;
          height: 60px;
          line-height: 60px;
        }
      }
    }
    .loginOut{
      box-sizing: border-box;
      width: 480px;
      padding: 60px 50px;
      @media screen and (max-width: 768px) {
        width: 80%;
        padding: 30px;
      }
      .btn-box{
        display: flex;
        font-size: 24px;
        .cancel-btn{
          width: 200px;
          height: 60px;
          border-radius: 6px;
          background-color: #1692ff;
          color: @titColor;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
        }
        .sure-btn{
          cursor: pointer;
          user-select: none;
          margin-left: 20px;
          width: 200px;
          height: 60px;
          border-radius: 6px;
          background-color: #ff5151;
          color: @titColor;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
