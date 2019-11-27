<template>
  <div class="game_five_mark comment_mark" id="comment_mark">
    <div class="game_five_content_wrapper content_wrapper">
      <!--<div class="game_five_title_wrapper title_wrapper">-->
        <!--<p class="game_five_title"><span class="title">{{$t('games.gamesFive.title')}}</span> <span class="biz">{{$t('games.gamesFive.biz')}}</span></p>-->
      <!--</div>-->
      <!--<p class="game_five_descripe" v-html="$t('games.gamesFive.descripe')"></p>-->
      <ul class="game_five_list_group">
        <li class="game_five_item" v-for="(item,index) in picNum">
          <div class="game_five_mg_wrapper">
            <img :src="gamespic1" v-if="index === 0">
            <img :src="gamespic2" v-else-if="index === 1">
            <img :src="gamespic3" v-else-if="index === 2">
            <img :src="gamespic4" v-else>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        picNum: 4,
        gamespic1: require('../../../assets/img/imagesb/games/gamespic1.png'),
        gamespic2: require('../../../assets/img/imagesb/games/gamespic2.png'),
        gamespic3: require('../../../assets/img/imagesb/games/gamespic3.png'),
        gamespic4: require('../../../assets/img/imagesb/games/gamespic4.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .game_five_content_wrapper {
    .game_five_title_wrapper {
      line-height:.6rem;
      color: @default;
      .game_five_title {
        font-family: font1;
        .title{
          font-size: 1rem;
          .mr(.2rem);
        }
        .biz{
          font-size:.16rem;
          color:@f6f7ff;
          font-family: font2;
        }
      }
    }
    .game_five_descripe{
      font-family: font2;
      font-size:.16rem;
      color:@f6f7ff;
      .pt(.24rem);
      .pb(.08rem);
      line-height:.32rem;
    }
    .game_five_list_group{
      font-family: font2;
      width:11.40rem;
      color:@f6f7ff;
      .flex;
      .game_five_item{
        height:2.76rem;
        line-height:2.76rem;
        background:rgba(255,255,255,.05);
        flex:1;
        .game_five_mg_wrapper{
          width:2.85rem;
          img{
            width:100%;
          }
        }
      }
    }
  }
  .comment_mark {
    background: rgba(0, 0, 0, .5);
  }
</style>
