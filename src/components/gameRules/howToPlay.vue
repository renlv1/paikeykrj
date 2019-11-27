<template>
  <div class="instructions-wrap">
    <div class="main">
      <div class="title">{{$t('knowBountyHunter.howToPlay.text1')}}</div>
      <div class="tit">{{$t('knowBountyHunter.howToPlay.text2')}}</div>
      <ul>
        <li v-for="(item, index) in $t('knowBountyHunter.howToPlay.instructionsDatas')" :key="index">
          {{item.text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        instructionsDatas: [
          {
            text: '1、用户在Pi付商家消费后，如果对商家产品或服务感到满意，可以进行对商家进行”打赏“，金额不限；'
          },
          {
            text: '2、”打赏“用TIP支付，商家可立即获得打赏金额的5%，剩余95%的打赏金额将成为发行建设金；'
          },
          {
            text: '3、TIP的发行模式和比例都于Pi相同；'
          },
          {
            text: '4、用户打赏后，每周将可以获得一张商家消费提示（类似Pi的藏宝图），但需要使用相同数量的Pi购买该商家消费提示，否则无法解锁，根据此提示到指定商家消费并领取打赏金额，直到50周后额度领取完成（目前的发行率为135%）。'
          },
          {
            text: '5、与Pi的加速一样，小派别打赏金额将为用户产生消费提示的加速生成。'
          },
          {
            text: 'PS：想要参加赏金猎人版的派付商家，需要重新在赏金版中注册，以便用户消费和打赏。'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .instructions-wrap{
    width: 100%;
    height: 100vh;
    background: url("../../assets/img/productCenter/how-to-Play-Bg.jpg") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .main{
      width: 100vw;
      padding-left: 15%;
      color: #fff;
      text-align: left;
      .title{
        font-size: 1rem;
      }
      .tit{
        font-size: .4rem;
        padding: 50px 0;
      }
      ul{
        li{
          width: 1232px;
          font-size: .18rem;
          color: #c5c2cc;
          padding-bottom: 10px;
          line-height: 2;
          @media screen and (max-width: 1550px) {
            width: 90%;
          }
        }
      }
    }
  }
</style>
