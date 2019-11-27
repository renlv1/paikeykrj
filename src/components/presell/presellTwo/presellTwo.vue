<template>
  <div class="presell-two">
    <div class="web">
      <div class="two-c">
        <ul>
          <li :class="{tabActive: orderTab === 2 || loginFlag === false && flagTab === 1}" @click="toChoose(2)" >{{$t('presellTwo.text37')}} </li>
          <li :class="{tabActive: orderTab === 0 || loginFlag === false && flagTab === 2 }" @click="toChoose(0)" >{{$t('presellTwo.text1')}} </li>
          <li :class="{tabActive: orderTab === 1}" @click="toChoose(1)" v-show="loginFlag">{{$t('presellTwo.text2')}}<span>({{total}})</span></li>
        </ul>
        <div class="tips" v-show="orderTab === 2">{{$t('presellTwo.text40')}}</div>
<!--        预计成交统计-->
        <table class="deal-table" v-show="orderTab === 2 || loginFlag === false && flagTab === 1">
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
          <thead>
          <tr>
            <td>{{$t('presellTwo.text3')}}</td>
            <td>{{$t('presellTwo.text38')}}</td>
            <td>{{$t('presellTwo.text25')}}</td>
            <td>{{$t('presellTwo.text39')}}</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in detailList" :key="index">
            <td>{{orderId(index)}}</td>
            <td>{{item.bidPrice | fourNumber}}</td>
            <td>{{item.tipAmount | fourNumber}}</td>
            <td>{{item.leiJiTotal | fourNumber}}</td>
          </tr>
          </tbody>
          <div class="empty-result" v-show="emptyDetail">
            <div class="noData"><img src="../../../assets/img/presell/box.png"></div>
            <p class="text">{{$t('presellTwo.text8')}}</p>
          </div>
          <v-turnPage v-show="detailList.length !== 0" :propsPage="detailTotal" @detailTrun="detailTurnPage" ref="turnPage3"></v-turnPage>
        </table>
<!--        预计成交明细-->
        <table class="deal-table" v-show="orderTab === 0 || loginFlag === false && flagTab === 2">
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
          <thead>
          <tr>
            <td>{{$t('presellTwo.text3')}}</td>
            <td>{{$t('presellTwo.text4')}}</td>
            <td>{{$t('presellTwo.text5')}}</td>
            <td>{{$t('presellTwo.text6')}}</td>
            <td>{{$t('presellTwo.text7')}}</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in dealList" :key="index">
            <td>{{item.id}}</td>
            <td>{{$changeDate(item.createAt, '.', 8)}}</td>
            <td>{{item.userName}}</td>
            <td>{{item.bidPrice | fourNumber}}</td>
            <td>{{item.willBidAmount | fourNumber}}</td>
          </tr>
          </tbody>
          <div class="empty-result" v-show="emptyData">
            <div class="noData"><img src="../../../assets/img/presell/box.png"></div>
            <p class="text">{{$t('presellTwo.text8')}}</p>
          </div>
          <v-turnPage v-show="dealList.length !== 0" :propsPage="planTotal" @agentTrun="infinitePanicTurnPage" ref="turnPage1"></v-turnPage>
        </table>
<!--        我的预约-->
        <table class="deal-table" v-show="orderTab === 1 && loginFlag">
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
          <thead>
          <tr>
            <td>{{$t('presellTwo.text3')}}</td>
            <td>{{$t('presellTwo.text4')}}</td>
            <td>{{$t('presellTwo.text6')}}</td>
            <td>{{$t('presellOne.text19')}}(π)</td>
            <td class="amount">{{$t('presell.text1')}}{{$t('presellTwo.text9')}}</td>
            <td>{{$t('presellTwo.text10')}}</td>
            <td>{{$t('presellTwo.text11')}}</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in myList" :key="index">
            <td>{{item.id}}</td>
            <td>{{$changeDate(item.createAt, '.', 8)}}</td>
            <td>{{item.bidPrice | fourNumber}}</td>
            <td>{{item.bidAmount | fourNumber}}</td>
            <td class="amount" v-if="item.bidFlag === 1 || item.bidFlag === 2">{{item.willBidAmount | fourNumber}}/ {{item.tipAmount | fourNumber}}</td>
            <td class="amount" v-else>{{item.tradeTipAmount | fourNumber}}/ {{item.tipAmount | fourNumber}}</td>
<!--            <td>{{changeStatus(item.bidFlag, item.willBidAmount, item.tipAmount)}}</td>-->
            <td>{{$t('presell.text13')}}</td>
            <td class="cancel" v-if="lastBidTime !==0"><span v-if="item.bidFlag !== 6" @click="cancelBtn(item.id)">{{$t('presellTwo.text12')}}</span> <span v-else class="canceled">{{$t('presellTwo.text13')}}</span></td>
            <td v-else>{{$t('presellTwo.text29')}}</td>
          </tr>
          </tbody>
          <!--<div class="empty-result" v-show="islogin">-->
          <!--<p class="islogin">{{$t('presellOne.text10')}}, {{$t('presellOne.text12')}}<span @click="loginBtn"> {{$t('presellOne.text13')}}</span></p>-->
          <!--</div>-->
          <div class="empty-result" v-show="emptyMyList">
            <div class="noData"><img src="../../../assets/img/presell/box.png"></div>
            <p class="text">{{$t('presellTwo.text8')}}</p>
          </div>
          <v-turnPage v-show="totalCount" :propsPage="myTotal" @roundTrun="treeTurnPage" ref="turnPage2"></v-turnPage>
        </table>
      </div>
    </div>
    <!--<div class="appointment-popup" v-show="cancelShow">-->
      <!--<div class="myPopup-box loginOut">-->
        <!--<div class="left-top">-->
          <!--<div class="heng"></div>-->
          <!--<div class="shu"></div>-->
        <!--</div>-->
        <!--<div class="right-top">-->
          <!--<div class="heng"></div>-->
          <!--<div class="shu"></div>-->
        <!--</div>-->
        <!--<div class="left-bottom">-->
          <!--<div class="heng"></div>-->
          <!--<div class="shu"></div>-->
        <!--</div>-->
        <!--<div class="right-bottom">-->
          <!--<div class="heng"></div>-->
          <!--<div class="shu"></div>-->
        <!--</div>-->
        <!--<i class="icon_false" @click="closePayShow"></i>-->
        <!--<div class="formDiv">-->
          <!--<div class="buy-title">{{$t('presellTwo.text14')}}</div>-->
          <!--<div class="submit-btn" @click="submitBtn">{{$t('presellOne.text31')}}</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<v-login @cancelDialog="cancelDialog" :presellTwo="true" v-if="loginShow" @successDialog="successDialog"></v-login>-->
    <!--<div class="appointment-popup" v-show="successfulShow">-->
      <!--<div class="myPopup-box loginOut">-->
        <!--<div class="left-top">-->
          <!--<div class="heng"></div>-->
          <!--<div class="shu"></div>-->
        <!--</div>-->
        <!--<div class="right-top">-->
          <!--<div class="heng"></div>-->
          <!--<div class="shu"></div>-->
        <!--</div>-->
        <!--<div class="left-bottom">-->
          <!--<div class="heng"></div>-->
          <!--<div class="shu"></div>-->
        <!--</div>-->
        <!--<div class="right-bottom">-->
          <!--<div class="heng"></div>-->
          <!--<div class="shu"></div>-->
        <!--</div>-->
        <!--<i class="icon_false" @click="closePayShow"></i>-->
        <!--<div class="formDiv">-->
          <!--<div class="buy-title">{{result}}</div>-->
          <!--<div class="submit-btn" @click="sureBtn">{{$t('presellOne.text31')}}</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Dialog from '@/components/dialog2'
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        flagTab: 1,
        islogin: false,
        loginShow: false,
        successfulShow: false,
        result: '',
        bountyTipBidRecordId: '',
        cancelShow: false,
        orderTab: 2,
        planTotal: 1, // 预计成交翻页
        planPage: '',
        myTotal: 1, // 我的预约翻页
        myPage: '',
        detailTotal: 1, // 预计成交明细
        detailPage: 1,
        pageSize: 5,
        totalCount: '',
        emptyData: false,
        emptyMyList: false,
        emptyDetail: false,
        lastBidTime: '',
        dealList: [],
        myList2: [],
        cPage: 1,
        detailList: []
      }
    },
    created () {
      this.getDealList(1)
      this.getMyList(1)
      this.getDetailList(1)
      if (this.myList.length === 0) {
        this.emptyMyList = true
      } else {
        this.emptyMyList = false
      }
    },
    computed: {
      ...mapGetters([
        'loginFlag',
        'total',
        'myList'
      ])
    },
    methods: {
      cancelDialog () {
        this.$emit('dialogShow2', false)
        this.loginShow = false
      },
      successDialog () {
        this.getMyList(1)
        this.islogin = false
        this.loginShow = false
        this.$emit('dialogShow2', false)
      },
      changeNum (bidFlag, willBidAmount, tradeTipAmount) {
        if (bidFlag === 1 || bidFlag === 2) {
          return willBidAmount
        } else {
          return tradeTipAmount
        }
      },
      changeStatus (bidFlag, willBidAmount, tipAmount) {
        if (bidFlag === 1 || bidFlag === 2) {
          if (willBidAmount > 0 && willBidAmount < tipAmount) { //  预计部分成交
            return this.$t('presell.text3')
          } else if (willBidAmount === 0) { // 预计不可成交
            return this.$t('presellTwo.text30')
          } else if (willBidAmount === tipAmount) { // 预计全部成交
            return this.$t('presell.text4')
          }
        } else if (bidFlag === 3) { // 全部成交
          return this.$t('presell.text4')
        } else if (bidFlag === 4) { // 部分成交
          return this.$t('presell.text3')
        } else if (bidFlag === 5) { // 不可成交
          return this.$t('presellTwo.text30')
        } else if (bidFlag === 6) { // 已取消
          return this.$t('presellTwo.text13')
        }
      },
      // changeStatus (willBidSuccess, bidFlag) {
      //   if (willBidSuccess === 2) {  // willBidSuccess是否可以成交 1是 2否   "bidFlag":"1",//1待处理 2处理中 3已处理 4部分成交 5售完系统取消 6用户取消
      //     return this.$t('presell.text2')
      //   } else if (willBidSuccess === 1) {
      //     if (bidFlag === 1 || bidFlag === 2) {  // 预计可成交
      //       return this.$t('presell.text8')
      //     } else if (bidFlag === 3) {  // 全部成交
      //       return this.$t('presell.text4')
      //     } else if (bidFlag === 4) { // 部分成交
      //       return this.$t('presell.text3')
      //     }
      //   }
      // },
      toChoose (index) {
        this.orderTab = index
        if (index === 0) {
          if (this.$refs.turnPage1) {
            this.$refs.turnPage1.resetPage(1)
          }
          this.flagTab = 2
          this.getDealList(1)
        } else if (index === 1) {
          if (this.$refs.turnPage2) {
            this.$refs.turnPage2.resetPage(1)
          }
          this.getMyList(1)
        } else if (index === 2) {
          if (this.$refs.turnPage3) {
            this.$refs.turnPage3.resetPage(1)
          }
          this.flagTab = 1
          this.getDetailList(1)
        }
      },
      // 预计成交统计
      getDetailList (page) {
        this.$http.post(this.$api + '/tipbid/bountyTipBidIndexOfTotal', {
          pageIndex: page,
          pageSize: this.pageSize
        }).then(res => {
          if (res.success === true) {
            if (res.data.bidRecordTotalList.length === 0) {
              this.emptyDetail = true
            } else {
              this.emptyDetail = false
              this.detailList = res.data.bidRecordTotalList
              this.detailTotal = res.mapData.totalPage
            }
          } else {
            this.emptyDetail = true
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 预计成交统计编号
      orderId (index) {
        if (this.detailPage === 1) {
          return index + 1
        } else if (this.detailPage > 1) {
          let mPage = this.detailPage * 5 - 4
          return mPage + index
        }
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
              this.lastBidTime = res.data.lastBidTime
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
              this.emptyMyList = true
              this.totalCount = 0
              this.$store.dispatch('setTotal', 0)
              this.$store.dispatch('setMyList', '')
            } else {
              this.emptyMyList = false
              this.myList2 = res.data.bidRecordList
              this.myTotal = res.mapData.totalPage
              this.totalCount = res.mapData.totalCount
              this.$store.dispatch('setTotal', res.mapData.totalCount)
              this.$store.dispatch('setMyList', res.data.bidRecordList)
            }
          } else {
            this.islogin = true
            this.totalCount = 0
            this.$store.dispatch('setTotal', 0)
            this.$store.dispatch('setMyList', '')
            this.emptyMyList = true
          }
        }).catch(err => {
          console.log(err)
        })
      },
      closePayShow () {
        this.successfulShow = false
        this.cancelShow = false
        this.$emit('dialogShow2', false, false)
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
            Dialog({
              title: this.$t('presellTwo.text22')
            })
          } else {
            Dialog({
              title: res.msg
            })
          }
        })
      },
      cancelBtn (id) {
        Dialog({
          title: this.$t('presellTwo.text14'),
          okFn: () => {
            this.submitBtn()
          }
        })
        this.bountyTipBidRecordId = id
        // this.cancelShow = true
      },
      checkTime (i) {
        if (i < 10) {
          i = '0' + i
        }
        return i
      },
      sureBtn () {
        this.successfulShow = false
        this.$emit('dialogShow2', false, false)
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
      }
    },
    components: {
      vTurnPage: resolve => require(['@/components/turnPage.vue'], resolve),
      vLogin: resolve => require(['@/components/login.vue'], resolve)
    }
  }
</script>

<style lang="less" scoped>
  @titColor: #fff; // 字体
  @yellow: #f9b72b;
  @inputColor: #4d4c51; // input边框
  .appointment-popup{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 80%;
    z-index: 9999;
    display: flex;
    align-items: center;
    /*margin-top: 1300px;*/
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    .myPopup-box{
      width: 400px;
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
    .loginOut {
      box-sizing: border-box;
      width: 480px;
      padding: 60px 50px;
      @media screen and (max-width: 768px) {
        width: 80%;
        padding: 30px;
      }
    }
  }
  .presell-two{
    .web{
      font-size: 30px;
      padding-top: 200px;
      padding-bottom: 100px;
      @media screen and (max-width: 1500px) {
        padding-top: 180px;
      }
      .two-c{
        max-width: 1200px;
        margin: 0 auto;
        @media screen and (max-width: 1200px) {
          width: 80%;
        }
        ul{
          display: flex;
          width: 100%;
          text-align: left;
          margin: 0 auto 40px;
          li{
            font-size: 24px;
            color: #949199;
            cursor: pointer;
            user-select: none;
            margin-right: 60px;
            @media screen and (max-width: 768px) {
              font-size: 16px;
              margin-right: 30px;
            }
            &:last-child{
              margin-right: 0;
            }
            &.tabActive{
              color: @yellow;
            }
          }
        }
        .tips{
          margin-bottom: 20px;
          font-size: 20px;
          color: #918d99;
        }
        .deal-table{
          position: relative;
          max-width: 1200px;
          display: block;
          margin: 0 auto;
          padding: 10px 0 10px;
          background-color: #201F26;
          .empty-result{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .noData{
              width: 100px;
              height: 100px;
              margin-bottom: 20px;
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
              @media screen and (max-width: 768px) {
                font-size: 14px;
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
          thead{
            display: block;
            tr{
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 20px;
              color: @titColor;
              padding: 30px 0;
              @media screen and (max-width: 768px) {
                font-size: 16px;
                padding: 10px 0;
              }
              td{
                display: block;
                text-align: center;
                flex: 1;
                &.amount{
                  flex: 2;
                }
              }
            }
          }
          tbody{
            width: 100%;
            display: block;
            tr{
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 20px;
              color: #918d99;
              margin-bottom: 40px;
              @media screen and (max-width: 768px) {
                font-size: 14px;
                margin-bottom: 20px;
              }
              td{
                display: block;
                text-align: center;
                flex: 1;
                &.amount{
                  flex: 2;
                }
                &.cancel{
                  color: #0f89f5;
                  cursor: pointer;
                  user-select: none;
                  .canceled{
                    color: #918d99;
                    cursor: not-allowed;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
