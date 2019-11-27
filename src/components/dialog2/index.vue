<template>
  <transition name="dialog">
    <div class="g-dialog" v-if="visible">
      <div class="g-dialog-mask"></div>
      <div class="g-dialog-wrap">
        <i class="g-dialog-close" @click="visible = false"></i>
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
        <div class="g-dialog-title">{{title}}</div>
        <div class="g-dialog-content" :style="{textAlign: align}">{{msg}}</div>
        <div class="g-dialog-btn-wrap">
          <button v-if="type !== 'alert'" class="g-dialog-btn g-dialog-cancel" @click="cancelCallback">{{cancelText}}</button>
          <div class="g-dialog-btn" @click="okCallback">{{$t('presellOne.text31')}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    },
    props: {
      type: String,
      title: String,
      msg: String,
      okFn: Function,
      okText: String,
      cancelFn: Function,
      cancelText: String,
      align: String
    },
    methods: {
      okCallback () {
        this.visible = false
        this.okFn && this.okFn()
      },
      cancelCallback () {
        this.visible = false
        this.cancelFn && this.cancelFn()
      }
    }
  }
</script>

<style lang="less">
  @btnColor: #fc534c;
  @titColor: #fff; // 字体
  @yellow: #f9b72b;
  @inputColor: #4d4c51; // input边框
  .full () {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .g-dialog{
    .full();
    position: fixed;
    color: #333333;
    z-index: 999;
    &-mask{
      .full();
      position: absolute;
      background: rgba(0,0,0,.5)
    }
    &-wrap{
      transform: translate(-50%,-50%);
      left: 50%;
      top: 50%;
      //color: #1a1a1a;
      position: relative;
      border: 1px solid #201F26;
      background-color: #201F26;
      box-sizing: border-box;
      width: 480px;
      padding: 60px 50px;
      @media screen and (max-width: 1200px) {
        width: 80%;
        padding: 30px;
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
    &-close{
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
    &-close:after {
      content: '/';
      display: block;
      width: 20px;
      height: 5px;
      background: #999;
      -webkit-transform: rotate(-90deg);
    }
    &-title{
      font-size: 24px;
      line-height: 1;
      margin-bottom: 20px;
      text-align: center;
      color: @titColor;
    }
    &-content{
      font-size: 24px;
      color: #f75050;
    }
    &-btn-wrap{
      padding-top: 20px;
      text-align: center;
      display: flex;
      justify-content: space-between;
    }
    &-btn{
      text-align: center;
      font-size: 24px;
      color: @titColor;
      width: 340px;
      height: 72px;
      background-image: url("../../assets/img/presell/buy-bg.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      margin: 20px auto 0;
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
    &-ok{
      width: 100%;
      background: @btnColor;
      transition: .4s;
      &:hover{
        background: darken(@btnColor, 10%);
      }
    }
    &-cancel{
      width: 45%;
      color: @btnColor;
      & + button{
        width: 100%;
        width: 45%;
      }
    }
  }
  .dialog-enter,.dialog-leave-to{
    opacity: 0;
    .g-dialog-wrap{
      transform: translate(-50%, -55%)
    }
  }
  .dialog-enter-active{
    transition: .3s;
    .g-dialog-wrap{
      transition: .3s
    }
  }
  .dialog-leave-active{
    transition: .1s;
    .g-dialog-wrap{
      transition: .1s
    }
  }
</style>
