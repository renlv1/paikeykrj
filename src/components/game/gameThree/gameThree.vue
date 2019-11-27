<template>
  <div class="game_three_mark comment_mark" id="comment_mark">
    <div class="game_three_content_wrapper content_wrapper">
      <div class="game_three_title_wrapper title_wrapper">
        <p class="game_three_title">{{$t('games.gamesThree.title')}}</p>
      </div>
      <ul class="game_three_list_group">
        <li class="game_three_item" v-for="(item, index) in $t('games.gamesThree.list')">
          <div class="game_three_mg_wrapper">
            <img :src="gamesicon1" v-if="index === 0">
            <img :src="gamesicon2" v-else-if="index === 1">
            <img :src="gamesicon3" v-else-if="index === 2">
            <img :src="gamesicon4" v-else>
          </div>
          <p class="game_three_topic">
            {{item.topic}}
            </p>
          <p class="game_three_content_one content_style">
            {{item.descripe}}
           </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        gamesicon1: require('../../../assets/img/imagesb/games/gameicon1.png'),
        gamesicon2: require('../../../assets/img/imagesb/games/gameicon2.png'),
        gamesicon3: require('../../../assets/img/imagesb/games/gameicon3.png'),
        gamesicon4: require('../../../assets/img/imagesb/games/gameicon4.png')
      }
    },
    components: {}
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';

  .game_three_content_wrapper {
    width:16.4rem;
    .game_three_title_wrapper {
      font-size: 1rem;
      line-height:.6rem;
      color: @default;
      .game_three_title {
        font-family: font1;
      }
    }
    .game_three_list_group{
      width:100%;
      color:@f6f7ff;
      .mt(1rem);
      .flex;
      .game_three_item{
        flex:1;
        .game_three_mg_wrapper{
          width:1.5rem;
          img{
            width:100%;
          }
        }
        .game_three_topic{
          font-size:.48rem;
          font-family: font1;
          .pt(.5rem);
          .pb(.1rem);
        }
        .content_style{
          line-height:.25rem;
          font-family:font2;
        }
        .game_three_content_one{
          width:2.9rem;
          font-size:.16rem;
        }
      }
    }
  }
</style>
