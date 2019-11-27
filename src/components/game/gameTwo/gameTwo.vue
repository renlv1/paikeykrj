<template>
  <div class="game_two_mark comment_mark" id="comment_mark">
    <div class="game_two_content_wrapper content_wrapper">
      <div class="game_two_title_wrapper title_wrapper">
        <p class="game_two_title" v-html="$t('games.gamesTwo.title')"></p>
      </div>
      <div class="game_two_text_wrapper">
        <p class="game_two_topic" v-html="$t('games.gamesTwo.topic')"></p>
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
  .game_two_content_wrapper {
    .game_two_title_wrapper {
      font-size: 1rem;
      color: @default;
      .game_two_title {
        font-family: font1;
      }
    }
    .game_two_descripe {
      font-family: font1;
      font-size:.16rem;
      color: @f6f7ff;
      .pt(.24rem);
      .pb(.36rem);
    }
    .game_two_text_wrapper {
      font-family: font2;
      width:9.1rem;
      color: @f6f7ff;
      .game_two_topic {
        font-size:.16rem;
        line-height: .32rem;
      }
    }
  }
</style>
