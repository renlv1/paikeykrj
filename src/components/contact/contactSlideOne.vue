<template>
  <div class="mainBox">
    <div>
      <div class="contact-left">
        <div class="content">
          <h1 class="content-title">{{$t('contact.subtitle')}}</h1>
          <div class="form">
            <input class="name" type="text" :placeholder="$t('contact.name')" v-model="name" ref="name">
            <input class="phone" type="text" :placeholder="$t('contact.phone')" v-model="phone" ref="phone">
            <input class="email" type="text" :placeholder="$t('contact.email')" v-model="email" ref="email">
            <input class="company" type="text" :placeholder="$t('contact.company')" v-model="company" ref="company">
            <p class="textareaTitle">{{$t('contact.Details')}}</p>
            <textarea v-model="message" ref="message"></textarea>
          </div>
          <a class="learnMore" @click="sendMessage"><button class="content-btn">{{$t('contact.btn')}}</button></a>
        </div>
      </div>
      <h1 class="contact-right" v-html="$t('contact.title')"></h1>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/css/lin-common.css'
  .swiper-container
    .mainBox
      .contact-left
        display inline-block
        margin-right .76rem
        .content
          box-sizing border-box
          .content-title
            font-size .48rem
          .form
            width 7rem
            overflow hidden
            font-size 0
            input
              width 3rem
              padding .2rem 0
              margin-bottom .4rem
              background transparent
              outline none
              border none
              border-bottom 1px solid #fff
              font-size .18rem
              color #fff
              &:nth-child(1), &:nth-child(3)
                margin-right .83rem
            .textareaTitle
              color #909199
              font-size .18rem
              font-weight bold
              margin-top .1rem
            textarea
              width 100%
              height 100px
              margin-top .2rem
              margin-bottom .55rem
              padding .1rem 0.05rem
              box-sizing border-box
              font-size .18rem
              color #fff
              background transparent
              outline none
              border none
              border-top 1px solid #fff
              border-bottom 1px solid #fff
              resize none
          .learnMore
            .content-btn
              border 1px solid #fff!important
      .contact-right
        display inline-block
        vertical-align top
        font-size 1rem
        font-weight normal
        font-family font1
        color #fff
  input::-webkit-input-placeholder
    font-size .18rem
    color #909199!important
  input:-moz-placeholder
    font-size .18rem
    color #909199!important
  input::-moz-placeholder
    font-size .18rem
    color #909199!important
  input:-ms-input-placeholder
    font-size .18rem
    color #909199!important
</style>
<script>
    export default{
      data () {
        return {
          name: '',
          phone: '',
          email: '',
          company: '',
          message: ''
        }
      },
      methods: {
        sendMessage () {
          console.log('name:' + this.name, 'phone：' + this.phone, 'email:' + this.email, 'company:' + this.company, 'message:' + this.message)
          let phoneNum = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/         //     判断手机号
          /* eslint-disable */
          let emailNum = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/     //  判断email
          /* eslint-disable */
          if (this.name === '') {
            alert('请输入姓名')
            this.$refs.name.focus()
          }else if (this.phone === '') {
            alert('请输入手机号')
            this.$refs.phone.focus()
          } else if (this.phone.length !== 11 || !phoneNum.test(this.phone)) {
            alert('请输入正确的手机号')
            this.$refs.phone.focus()
          } else if (this.email === '') {
            alert('请输入E-mail')
            this.$refs.email.focus()
          } else if (!emailNum.test(this.email)) {
            alert('请输入正确的E-mail')
            this.$refs.email.focus()
          } else if (this.company === '') {
            alert('公司名不能为空')
            this.$refs.company.focus()
          } else if (this.company === '') {
            alert('留言不能为空')
            this.$refs.company.focus()
          }
        }
      }
    }
</script>
