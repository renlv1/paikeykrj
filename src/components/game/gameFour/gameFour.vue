<template>
  <div class="games_four_mark comment_mark" id="comment_mark">
    <div class="games_four_content_wrapper content_wrapper">
      <div class="games_four_title_wrapper title_wrapper">
        <p class="games_four_title">{{$t('games.gamesFour.title')}}</p>
      </div>
      <p class="game_four_descripe">{{$t('games.gamesFour.descripe')}}</p>
      <table class="games_four_table">
        <thead>
        <tr>
          <th v-for="(item,index) in $t('games.gamesFour.topic')">{{item}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in $t('games.gamesFour.content')">
          <td>{{item.topic}}</td>
          <td>{{item.style}}</td>
          <td v-html="item.groups"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';

  .games_four_content_wrapper {
    .games_four_title_wrapper {
      font-size: 1rem;
      line-height:.6rem;
      color: @default;
      .games_four_title {
        font-family: font1;
      }
    }
    .game_four_descripe{
      font-size:.16rem;
      font-family: font2;
      color:@f6f7ff;
      width:9.36rem;
      line-height:.32rem;
      .pt(.24rem);
      .pb(.14rem);
    }
    .games_four_table{
      color:@f6f7ff;
      background:rgba(255,255,255,.05);
      width:10rem;
      thead,tbody{
        tr{
          line-height:.7rem;
          .tc;
        }
      }
      tbody{
        tr:not(:last-child){
          border-bottom:1px solid @default;
        }
        td{
          font-size:.16rem;
        }
      }
      thead{
        tr{
          border-bottom:1px solid @default;
        }
        th{
          font-family: font1;
          font-size:.28rem;
        }
      }
    }
  }
  .comment_mark {
    background: rgba(0, 0, 0, .5)
  }
</style>
