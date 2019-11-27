<template>
  <div class="presell">
    <div class="home" v-if="pcShow">
      <swiper class="swiper_container" :options="swiperOption" ref="mySwiper" :class="{'notransition': dialog, 'swiper-no-swiping': noSwiping, 'notransition2': dialog2}">
        <swiper-slide class="swiper-slide">
          <presellOne @dialogShow="dialogShow"></presellOne>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <presellTwo @dialogShow2="dialogShow2"></presellTwo>
        </swiper-slide>
      </swiper>
      <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
    </div>
    <div class="app">
      <div class="app-header">
        <div class="header-title">{{$t('presell.text5')}}</div>
      </div>
      <div class="one-c">
        <div class="c-title">
          <h3><span>TIP</span> {{$t('presellOne.text1')}}</h3>
          <div class="time-box">
            <span>{{days}}</span> {{$t('presellOne.text2')}} <span>{{hours}}</span> {{$t('presellOne.text3')}} <span>{{minutes}}</span> {{$t('presellOne.text4')}} <span>{{seconds}}</span> {{$t('presellOne.text5')}}
          </div>
          <div class="islogin" v-if="loginFlag">{{$t('presellOne.text10')}},  <span v-if="userInfo.nickname">{{userInfo.nickname}}</span><span v-else>{{userInfo.username}}</span><span @click="loginOut" class="user-box"> {{$t('presellOne.text11')}}</span></div>
          <div class="islogin" v-else>{{$t('presellOne.text10')}}, {{$t('presellOne.text12')}}<span @click="loginBtn" class="user-box"> {{$t('presellOne.text13')}}</span></div>
          <div class="price-box">
            <div class="plan-box">
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
              <div class="amount">{{$t('presellOne.text7')}}：<span>{{issueTotal | fourNumber}}</span> TIP</div>
              <div class="price-c">
                <div class="price-b">{{canBidMinPrice | fourNumber}}~{{canBidMaxPrice | fourNumber}}</div>
                <p>{{$t('presellOne.text6')}}(π)</p>
              </div>
            </div>
          </div>
          <!--<div class="islogin" v-else>{{$t('presellOne.text10')}}, {{$t('presellOne.text12')}}<span @click="loginBtn"> {{$t('presellOne.text13')}}</span></div>-->
          <div class="table-box">
            <div class="deal-table">
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
              <div class="tabs-box">
                <div class="tabs-one" @click="changeTab()" v-show="orderTab === 2 || orderTab === 0"><span>{{tabOne}}</span> <i class="icon" :class="{changeIcon: isIcon}"></i></div>
                <div class="tabs-one" @click="changeTab()" v-show="orderTab === 1 && loginFlag">{{tabOne}}({{totalCount}}) <i class="icon" :class="{changeIcon: isIcon}"></i></div>
                <ul class="tabs" :class="{changeHeight: isIcon}">
                  <li :class="{tabActive: orderTab === 2 }" @click="toChoose(2)" >{{$t('presellTwo.text37')}} </li>
                  <li :class="{tabActive: orderTab === 0 }" @click="toChoose(0)" >{{$t('presellTwo.text1')}} </li>
                  <li :class="{tabActive: orderTab === 1}" @click="toChoose(1)" v-show="loginFlag">{{$t('presellTwo.text2')}}</li>
                </ul>
              </div>
              <!--        预计成交统计-->
              <ul class="ul-list" v-show="orderTab === 2">
                <li v-for="(item,index) in detailList" :key="index">
                  <div class="up">
                    <div class="left">{{$t('presellTwo.text38')}}：</div>
                    <div class="right">{{item.bidPrice | fourNumber}}  π</div>
                  </div>
                  <div class="up">
                    <div class="left">{{$t('presellTwo.text25')}}：</div>
                    <div class="right">{{item.tipAmount | fourNumber}} TIP</div>
                  </div>
                  <div class="down">
                    <div class="left">{{$t('presellTwo.text39')}}：</div>
                    <div class="right">{{item.leiJiTotal | fourNumber}}  π</div>
                  </div>
                </li>
                <div class="empty-result" v-show="emptyDetail">
                  <div class="noData"><img src="../../assets/img/presell/box.png"></div>
                  <p class="text">{{$t('presellTwo.text8')}}</p>
                </div>
                <v-turnPage v-show="detailList.length !== 0" :propsPage="detailTotal" @detailTrun="detailTurnPage" ref="turnPage3"></v-turnPage>
                <div class="tips" v-show="orderTab === 2">{{$t('presellTwo.text40')}}</div>
              </ul>
              <!--        预计成交明细-->
              <ul class="ul-list" v-show="orderTab === 0">
                <li v-for="(item,index) in dealList" :key="index">
                  <div class="up">
                    <div class="left">{{$t('presell.text6')}}{{item.id}}</div>
                    <div class="right">{{$changeDate(item.createAt, '.', 8)}}</div>
                  </div>
                  <div class="up">
                    <div class="left">{{item.userName}}</div>
                    <div class="right">{{$t('presellTwo.text26')}}: {{item.bidPrice | fourNumber}}  π</div>
                  </div>
                  <div class="down">
                    <div class="left">{{$t('presellTwo.text25')}}</div>
                    <div class="right">{{item.willBidAmount | fourNumber}}  Tip</div>
                  </div>
                </li>
                <div class="empty-result" v-show="emptyData">
                  <div class="noData"><img src="../../assets/img/presell/box.png"></div>
                  <p class="text">{{$t('presellTwo.text8')}}</p>
                </div>
                <v-turnPage v-show="dealList.length !== 0" :propsPage="planTotal" @agentTrun="infinitePanicTurnPage" ref="turnPage1"></v-turnPage>
              </ul>
              <!--        我的预约-->
              <ul class="ul-list" v-show="orderTab === 1 && loginFlag">
                <li v-for="(item,index) in myList" :key="index" class="lis" :class="{showH: lastBidTime <= 0}">
                  <div class="one-t common-li">
                    <div class="left">{{$t('presell.text6')}}{{item.id}}</div>
                    <div class="right">{{$changeDate(item.createAt, '.', 8)}}</div>
                  </div>
                  <div class="two-c common-li">
                    <div class="left">{{$t('presellTwo.text27')}}</div>
                    <div class="right">{{item.bidPrice | fourNumber}}/{{item.bidAmount | fourNumber}}  π</div>
                  </div>
                  <div class="three-c common-li" v-if="item.bidFlag === 1 || item.bidFlag === 2">
                    <div class="left">{{$t('presellTwo.text28')}}/{{$t('presellTwo.text24')}}：</div>
                    <div class="right">{{item.willBidAmount | fourNumber}}/{{item.tipAmount | fourNumber}}</div>
                  </div>
                  <div class="three-c common-li" v-else>
                    <div class="left">{{$t('presellTwo.text28')}}/{{$t('presellTwo.text24')}}：</div>
                    <div class="right">{{item.tradeTipAmount | fourNumber}}/{{item.tipAmount | fourNumber}}</div>
                  </div>
                  <div class="four-c common-li" v-if="lastBidTime !==0">
                    <div class="left"></div>
                    <div class="right blue" @click="cancelBtn(item.id)" v-if="item.bidFlag !== 6">{{$t('presellTwo.text12')}}</div>
                    <div class="right" v-else>{{$t('presellTwo.text13')}}</div>
                  </div>
                  <div class="four-c common-li" v-else>
                    <div class="left"></div>
                    <div class="right grey" >
                      {{$t('presellTwo.text29')}}
                    </div>
                  </div>
                </li>
                <div class="empty-result" v-show="emptyMyList">
                  <div class="noData"><img src="../../assets/img/presell/box.png"></div>
                  <p class="text">{{$t('presellTwo.text8')}}</p>
                </div>
                <v-turnPage v-show="totalCount" :propsPage="myTotal" @roundTrun="treeTurnPage" ref="turnPage2"></v-turnPage>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="buy-btn" @click="bookingBuy" v-if="loginFlag">{{$t('presellOne.text9')}}</div>
        <div class="buy-btn" @click="loginBtn" v-else>{{$t('presellOne.text12')}}{{$t('presellOne.text13')}}</div>
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
            <span>{{$t('presellOne.text19')}}</span> <input class="buy-input" v-model.trim="orederMoney" readonly>
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
            <span class="pay-input">{{$t('presellOne.text25')}}</span>
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
<!--    取消弹窗-->
    <div class="appointment-popup" v-show="cancelShow">
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
          <div class="buy-title">{{$t('presellTwo.text14')}}</div>
          <div class="submit-btn" @click="submitBtn">{{$t('presellOne.text31')}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import presellOne from './presellOne/presellOne.vue'
  import presellTwo from './presellTwo/presellTwo.vue'
  import vline from '../lineComponents/lineComponents.vue'
  import Bus from '@/assets/js/bus'
  export default{
    data () {
      return {
        flagTab: 1,
        tabOne: this.$t('presellTwo.text37'),
        isIcon: false,
        pcShow: true,
        headerShow: false,
        footerShow: false,
        dialog: false,
        dialog2: false,
        noSwiping: '',
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
        cancelFlag: true,
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
        nickName: '',
        userEmail: '', // 用户邮箱
        islogin: false,
        bountyTipBidRecordId: '',
        cancelShow: false,
        orderTab: 2,
        planTotal: 1, // 预计成交翻页
        planPage: '',
        myTotal: 1, // 我的预约翻页
        myPage: '',
        detailTotal: 1, // 预计成交明细
        detailPage: '',
        pageSize: 5,
        totalCount: '',
        detailCount: '',
        emptyData: false,
        emptyMyList: false,
        emptyDetail: false,
        detailList: [],
        dealList: [],
        myList: [],
        swiperOption: {
          activeitem: 0,
          notNextTick: true,
          direction: 'vertical',
          speed: 500,
          setWrapperSize: true,
          autoHeight: true,
          autoplay: false,
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          touchMoveStopPropagation: false,
          debugger: true,
          onTransitionStart (swiper) {
            this.activeitem = swiper.activeIndex
          }
        },
        num: 2
      }
    },
    components: {
      swiper,
      swiperSlide,
      presellOne,
      presellTwo,
      vline,
      vTurnPage: resolve => require(['@/components/turnPage.vue'], resolve)
    },
    created () {
      // this.getCheckAccount()
      this.getBountyData(1)
      this.getDealList(1)
      this.getMyList(1)
      this.getDetailList(1)
      // document.ready = function () {
      //   this.getPath()
      // }
      Bus.$on('setLang', (str) => {
        if (str === 'en') {
          this.tabOne = 'Expected transaction statistics'
        } else {
          this.tabOne = '预计成交统计'
        }
      })
    },
    computed: {
      ...mapGetters([
        'loginFlag',
        'userInfo',
        'account'
      ]),
      swiper () {
        return this.$refs.mySwiper.swiper
      },
      orederMoney () {
        if (this.price !== '' && this.amount !== '') {
          return (parseFloat(this.price) * parseFloat(this.amount)).toFixed(4)
        }
      }
    },
    mounted () {
      this.swiper.slideTo(0, 1000, false)
      let _this = this
      window.onresize = function () {
        if (window.innerWidth > 1200) {
          _this.pcShow = true
        } else {
          _this.pcShow = false
        }
      }
      // if (Vue.config.lang === 'cn') {
      //   this.tabOne = '预计成交统计'
      // } else {
      //   this.tabOne = 'Expected transaction statistics'
      // }
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
        this.cancelShow = false
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
              if (this.lastBidTime <= 0) {
                this.days = '00'
                this.hours = '00'
                this.minutes = '00'
                this.seconds = '00'
                clearInterval(this.countdownTime)
              } else {
                this.lastBidTime--
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
      // 点击支付
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
      // 点击提交购买
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
      // 点击预约购买
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
        this.$emit('dialogShow', true)
        if (this.loginFlag) {
          if (this.userInfo.openTradePassword !== 2) {
            this.failedShow = true
            this.codeMsg = this.$t('presellOne.text42')
          } else if (this.userInfo.openGoogleCode !== 2 && this.userInfo.openMobileCode !== 2) {
            this.failedShow = true
            this.codeMsg = this.$t('presellOne.text43')
          } else if (this.userInfo.openTradePassword === 2 && this.userInfo.openGoogleCode === 2 || this.userInfo.openMobileCode === 2) {
            this.appointmentShow = true
          }
        } else {
          this.loginShow = true
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
      // 登录
      login () {
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
            this.orderTab = 2
            this.tabOne = this.$t('presellTwo.text37')
          }
        }).catch(err => {
          console.log(err)
        })
      },
      loginOut () {
        this.loginOutShow = true
      },
      loginBtn () {
        this.loginUserName = ''
        this.loginPassword = ''
        this.loginShow = true
        this.loginTip = ''
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
      },
      changeStatus (willBidSuccess, bidFlag) {
        if (willBidSuccess === 2) {  // willBidSuccess是否可以成交 1是 2否     "bidFlag":"1",//1待处理 2处理中 3已处理 4部分成交 5售完系统取消 6用户取消
          return this.$t('presell.text2')
        } else if (willBidSuccess === 1) {
          if (bidFlag === 1 || bidFlag === 2) { // 预计可成交
            return this.$t('presell.text8')
          } else if (bidFlag === 3) { // 全部成交
            return this.$t('presell.text4')
          } else if (bidFlag === 4) { // 部分成交
            return this.$t('presell.text3')
          }
        }
      },
      toChoose (index) {
        this.isIcon = false
        this.orderTab = index
        if (index === 0) {
          if (this.$refs.turnPage1) {
            this.$refs.turnPage1.resetPage(1)
          }
          this.tabOne = this.$t('presellTwo.text1')
          this.getDealList(1)
        } else if (index === 1) {
          if (this.$refs.turnPage2) {
            this.$refs.turnPage2.resetPage(1)
          }
          this.tabOne = this.$t('presellTwo.text2')
          this.getMyList(1)
        } else if (index === 2) {
          if (this.$refs.turnPage3) {
            this.$refs.turnPage3.resetPage(1)
          }
          this.tabOne = this.$t('presellTwo.text37')
          this.getDetailList(1)
        }
      },
      changeTab () {
        this.isIcon = !this.isIcon
      },
      getDetailList (page) {
        this.$http.post(this.$api + '/tipbid/bountyTipBidIndexOfTotal', {
          pageIndex: page,
          pageSize: this.pageSize
        }).then(res => {
          if (res.success === true) {
            if (res.data.bidRecordTotalList.length === 0) {
              this.detailCount = 0
              this.emptyDetail = true
            } else {
              this.emptyDetail = false
              this.detailList = res.data.bidRecordTotalList
              this.detailTotal = res.mapData.totalPage
              this.detailCount = res.mapData.totalCount
            }
          } else {
            this.detailCount = 0
            this.emptyDetail = true
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 预计成交
      getDealList (page) {
        this.$http.post(this.$api + '/tipbid/bountyTipBidIndex', {
          pageIndex: page,
          pageSize: this.pageSize
        }).then(res => {
          if (res.success === true) {
            if (res.data.bidRecordList.length === 0) {
              this.emptyData = true
            } else {
              this.emptyData = false
              this.dealList = res.data.bidRecordList
              this.planTotal = res.mapData.totalPage
            }
          } else {
            this.emptyData = true
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 我的预约
      getMyList (page) {
        this.$http.post(this.$api + '/tipbid/myBountyTipBidList', {
          pageIndex: page,
          pageSize: this.pageSize
        }).then(res => {
          if (res.success === true) {
            if (res.data.bidRecordList.length === 0) {
              this.totalCount = 0
              this.emptyMyList = true
            } else {
              this.emptyMyList = false
              this.myList = res.data.bidRecordList
              this.myTotal = res.mapData.totalPage
              this.totalCount = res.mapData.totalCount
            }
          } else {
            this.totalCount = 0
            this.islogin = true
            this.emptyMyList = true
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 取消预约
      submitBtn () {
        this.cancelShow = false
        this.$http.post(this.$api + '/tipbid/cancelBountyTipBid', {
          bountyTipBidRecordId: this.bountyTipBidRecordId
        }).then(res => {
          if (res.success === true) {
            if (this.$refs.turnPage2) {
              this.$refs.turnPage2.resetPage(1)
            }
            this.getMyList(1)
            this.successfulShow = true
            this.result = this.$t('presellTwo.text22')
          } else {
            this.successfulShow = true
            this.result = res.msg
          }
        })
      },
      cancelBtn (id) {
        this.bountyTipBidRecordId = id
        this.cancelShow = true
      },
      infinitePanicTurnPage (page) {
        this.planPage = page
        this.getDealList(page)
      },
      treeTurnPage (page) {
        this.myPage = page
        this.getMyList(page)
      },
      detailTurnPage (page) {
        this.detailPage = page
        this.getDetailList(page)
      },
      dialogShow (flag) {
        this.dialog = flag
        this.swiperOption.touchMoveStopPropagation = flag
        if (this.swiperOption.activeitem === 0) {
          this.noSwiping = flag
        }
      },
      dialogShow2 (flag, flag2) {
        this.dialog = flag
        this.dialog2 = flag2
        this.swiperOption.touchMoveStopPropagation = flag
        if (this.swiperOption.activeitem === 1) {
          this.noSwiping = flag
        }
      },
      sealed (index) {
        this.swiper.slideTo(index, 1000, false)
        this.swiperOption.activeitem = index
      }
    }
  }
</script>

<style lang="less" scoped>
  @titColor: #fff; // 字体
  @yellow: #f9b72b;
  @inputColor: #4d4c51; // input边框
  @import '../../assets/css/bcss/components_style';
  .notransition /deep/ .swiper-wrapper{
    transform: none !important;
  }
  .notransition2 /deep/ .swiper-wrapper{
    transform: translateY(-100%) !important;
  }
  .home{
    background-image: url("../../assets/img/presell/BG.jpg");
    height:100%;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  .app{
    background-image: url("../../assets/img/presell/app-bg.jpg");
    height: 1725px;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: none;
    @media screen and (max-width: 1200px) {
      display: block;
    }
    .app-header{
      position: fixed;
      left: 0;
      top: 0;
      height: 60px;
      width: 100%;
      background-color: #1C1B21;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 200;
      border-bottom: 1px solid #3E3D43;
      .header-title{
        font-size: 24px;
        color: #fff;
      }
    }
    .one-c{
      padding-top: 150px;
      text-align: center;
      h3{
        font-size: 60px;
        color: @titColor;
        margin-bottom: 30px;
        @media screen and (max-width: 768px) {
          font-size: 40px;
        }
        span{
          color: @yellow;
        }
      }
      .time-box{
        font-size: 20px;
        color: @titColor;
        margin-bottom: 40px;
        @media screen and (max-width:768px) {
          font-size: 16px;
        }
        @media screen and (max-width: 320px) {
          font-size: 14px;
        }
        span{
          color: @yellow;
        }
      }
      p{
        font-size: 20px;
        color: @titColor;
      }
      .price-box{
        font-size: 80px;
        color: @titColor;
        padding: 0 15px;
        margin-bottom: 40px;
        @media screen and (max-width: 1200px) {
          font-size: 30px;
        }
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
        .plan-box{
          position: relative;
          height: 250px;
          background-color: #201F26;
          width: 100%;
          @media screen and (max-width: 1200px) {
            font-size: 16px;
            height: 200px;
          }
        }
        .price-c{
          color: @titColor;
          font-size: 30px;
          margin-top: 24px;
          @media screen and (max-width: 1200px) {
            font-size: 24px;
          }
          @media screen and (max-width: 320px) {
            font-size: 16px;
          }
          .price-b{
            word-break: break-word;
          }
          p{
            margin-top: 20px;
            color: #919199;
            font-size: 24px;
            @media screen and (max-width: 1200px) {
              font-size: 16px;
            }
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
      }
      .tips{
        padding: 0 10px;
        text-align: left;
        margin-bottom: 20px;
        font-size: 16px;
        color: #fff;
      }
      .table-box{
        padding: 0 15px;
        .deal-table{
          position: relative;
          background-color: #201F26;
          width: 100%;
          .tabs-box{
            padding: 0 10px;
            height: 60px;
            border-bottom: 1px solid #3E3D43;
            position: relative;
            &.isHeight{
              height: 100px;
            }
            .tabs-one{
              display: flex;
              align-items: center;
              line-height: 60px;
              text-align: left;
              font-size: 16px;
              color: #fff;
            }
            .icon{
              margin-left: 10px;
              background-image: url("../../assets/img/presell/01.png");
              width: 24px;
              height: 24px;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              &.changeIcon{
                background-image: url("../../assets/img/presell/02.png");
              }
            }
            .tabs{
              width: 97%;
              position: absolute;
              top: 60px;
              height: 0;
              overflow-y: hidden;
              z-index: 99;
              transition: all .3s linear;
              &.changeHeight{
                height: 180px;
              }
              li{
                line-height: 60px;
                text-align: center;
                height: 60px;
                font-size: 16px;
                color: #fff;
                background: #33313b;
                border-bottom: 1px solid #42404c;
                cursor: pointer;
                user-select: none;
                @media screen and (max-width: 320px) {
                  font-size: 14px;
                }
              }
            }
          }
          .ul-list{
            padding-bottom: 10px;
            margin-bottom: 130px;
            .empty-result{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .noData{
                width: 100px;
                height: 100px;
               margin: 30px 0 20px 0;
                img{
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
              .islogin{
                font-size: 20px;
                color: #fff;
                span{
                  cursor: pointer;
                  user-select: none;
                  color: #0f89f5;
                }
              }
              .text{
                font-size: 24px;
                color: #999;
                margin-bottom: 30px;
                @media screen and (max-width: 768px) {
                  font-size: 14px;
                }
              }
            }
            li{
              display: flex;
              flex-direction: column;
              justify-content: center;
              font-size: 14px;
              color: #fff;
              padding: 15px 10px;
              height: 100px;
              background-color: #201F26;
              border-bottom: 1px solid #3E3D43;
              @media screen and (max-width: 320px) {
                font-size: 12px;
              }
              &.lis{
                height: 140px;
              }
              &.showH{
                height: 140px;
              }
              .up{
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
              }
              .down{
                display: flex;
                justify-content: space-between;
              }
              .common-li{
                cursor: pointer;
                user-select: none;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
              }
              .blue{
                color: #0f89f5;
              }
              .grey{
                color: #999;
              }
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
        }
      }
      .amount{
        font-size: 24px;
        color: #919199;
        text-align: center;
        padding-top: 30px;
        @media screen and (max-width: 1200px) {
          font-size: 16px;
        }
        @media screen and (max-width: 320px) {
          font-size: 14px;
        }
      }
      .info{
        font-size: 20px;
        color: #c5c2cc;
        width: 1200px;
        margin: 60px auto 40px;
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
        background-image: url("../../assets/img/presell/buy-bg.png");
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
        font-size: 24px;
        color: #fff;
        margin-bottom: 70px;
        @media screen and (max-width: 1200px) {
          font-size: 20px;
        }
        .user-box{
          cursor: pointer;
          user-select: none;
          color: #0f89f5;
        }
      }
    }
    .footer{
      width: 100%;
      position: relative;
      .buy-btn{
        width: 100%;
        height: 60px;
        background-image: url("../../assets/img/presell/bottom.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        bottom: 0;
        position: fixed;
        color: #fff;
        font-size: 24px;
        text-align: center;
        line-height: 60px;
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
      @media screen and (max-width: 320px) {
        width: 80%;
        padding: 15px;
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
        @media screen and (max-width: 768px) {
          margin-bottom: 40px;
          margin-top: 20px;
        }
      }
      .order-money{
        margin-top: 100px;
        @media screen and (max-width: 768px) {
          margin-top: 30px;
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
          font-size: 14px;
          right: 5px;
          position: absolute;
          color: #999;
        }
        .error-tip{
          position: absolute;
          top: 80px;
          font-size: 18px;
          color: #ff4e47;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            top: 46px;
          }
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
            font-size: 12px;
            padding: 0 2px;
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
            margin: 0 10px;
            white-space: nowrap;
            font-size: 14px;
          }
          @media screen and (max-width: 320px) {
            margin: 0 5px;
            font-size: 12px;
          }
        }
        .pay-input{
          white-space: nowrap;
          width: 100px;
          @media screen and (max-width: 768px) {
            width: 108px;
          }
        }
        .buy-input{
          height: 100%;
          font-size: 18px;
          color: #999;
          padding: 0 25px 0 10px;
          flex: 1;
          @media screen and (max-width: 768px) {
            padding: 0 25px 0 30px;
            font-size: 14px;
          }
          @media screen and (max-width: 320px) {
            padding: 0 5px 0 15px;
          }
        }
        .email-input{
          flex: 0;
          @media screen and (max-width: 768px) {
            padding: 0 60px 0 10px;
            width: 180px;
          }
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
        background-image: url("../../assets/img/presell/buy-bg.png");
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
          margin: 30px auto 0;
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
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
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
</style>

