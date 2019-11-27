<template>
  <div class="game_one_mark comment_mark" id="comment_mark">
    <div class="game_one_content_wrapper content_wrapper">
      <div class="game_one_title_wrapper title_wrapper">
        <span class="pai" v-if="$t('games.gamesOne.pai') !== ''">{{$t('games.gamesOne.pai')}}</span><span class="game_one_title">{{$t('games.gamesOne.title')}}</span>
      </div>
      <p class="game_one_descripe">{{$t('games.gamesOne.descripe')}}</p>
      <div class="game_one_text_wrapper">
        <p class="game_one_topic" v-html="$t('games.gamesOne.topic')"></p>
      </div>
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

  .game_one_content_wrapper {
    .game_one_title_wrapper {
      font-size: 1rem;
      color: @default;
      line-height: .6rem;
      .pai {
        .mr(.5rem);
      }
      .game_one_title {
        font-family: font1;
      }
    }
    .game_one_descripe {
      font-family:font2 ;
      font-size:.16rem;
      color: @f6f7ff;
      .pt(.24rem);
      .pb(.36rem);
    }
    .game_one_text_wrapper {
      width: 9.1rem;
      color: @f6f7ff;
      .game_one_topic {
        font-size:.16rem;
        line-height: .32rem;
      }
    }
  }
</style>
