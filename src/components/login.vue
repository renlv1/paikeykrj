<template>
  <div class="appointment-popup" :class="{'isTop': presellTwo}">
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
</template>

<script>
    export default {
      data () {
        return {
          result: '',
          successfulShow: false,
          loginShow: true,
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
          sendBtnValue: '获取验证码',
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
          pageSize: 10,
          nickName: '',
          userEmail: '' // 用户邮箱
        }
      },
      props: {
        presellTwo: {
          type: Boolean,
          default: false
        }
      },
      methods: {
        // 登录
        login () {
          if (this.loginUserName && this.loginPassword) {
            this.$http.post(this.$api + '/user/weblogin', {
              userName: this.loginUserName,
              password: this.loginPassword
            }).then(res => {
              if (res.success === true) {
                this.$emit('successDialog')
                // this.getBountyData(1)
              } else {
                this.loginTip = res.msg
              }
            })
          } else {
            this.loginTip = this.$t('presellOne.text44')
          }
        },
        closePayShow () {
          this.$emit('cancelDialog')
        }
      }
    }
</script>

<style lang ="less" scoped>
  @titColor: #fff; // 字体
  @yellow: #f9b72b;
  @inputColor: #4d4c51; // input边框
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
    &.isTop{
      top: 100%;
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
    width: 100px;
  @media screen and (max-width: 768px) {
    width: 45px;
  }
  }
  .buy-input{
    font-size: 18px;
    color: #999;
    padding: 0 20px;
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
    background-image: url("../assets/img/presell/buy-bg.png");
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
   }
  }
</style>
