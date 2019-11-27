<template>
  <div class="sports_two_mark comment_mark">
    <div class="sports_two_content_wrapper content_wrapper" id="sports_two_content_wrapper">
      <div class="sports_two_title_wrapper" id="sports_two_title_wrapper">
        <span class="sports_two_title">{{$t('sports.sportsTwo.title')}}</span>
        <p class="sports_two_descripe">{{$t('sports.sportsTwo.descripe')}}</p>
      </div>
      <ul class="sports_two_list_wrapper">
        <li class="sports_two_item" v-for="(item, index) in $t('sports.sportsTwo.content')">
          <div class="sports_two_mg_wrapper">
            <img :src="sportsicon1" v-if="index === 0">
            <img :src="sportsicon2" v-else-if="index === 1">
            <img :src="sportsicon3" v-else>
          </div>
          <p class="sports_two_topic">{{item.topic}}</p>
          <p class="sports_two_content_one content_style">{{item.text}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        sportsicon1: require('../../../assets/img/imagesb/sports/sportsicon1.png'),
        sportsicon2: require('../../../assets/img/imagesb/sports/sportsicon2.png'),
        sportsicon3: require('../../../assets/img/imagesb/sports/sportsicon3.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';

  .sports_two_content_wrapper {
    width: 12.30rem;
    color: @default;
    .sports_two_title_wrapper {
      color: @default;
      .flex;
      .mb(1rem);
      .sports_two_title {
        flex: 1;
        white-space: nowrap;
        line-height: .5rem;
        .mr(.4rem);
        font-size: 1rem;
        color: @default;
        font-family: font1;
      }
      .sports_two_descripe {
        font-family: font2;
        font-size: .18rem;
        color: @f6f7ff;
        vertical-align: bottom;
      }
    }
    .sports_two_list_wrapper {
      width: 100%;
      .flex;
      .sports_two_item {
        flex: 1;
        .sports_two_mg_wrapper {
          width: 1.5rem;
          img {
            width: 100%;
          }
        }
        .sports_two_topic {
          font-size: .48rem;
          font-family: font1;
          .pt(.5rem);
          .pb(0.1rem);
        }
        .content_style {
          line-height: .25rem;
          font-family: font2;
          font-size: .16rem;
        }
        .sports_two_content_one {
          width: 2.4rem;
        }
        .sports_two_content_two {
          width: 2.6rem;
        }
        .sports_two_content_three {
          width: 2.48rem;
        }
      }
    }
  }

  .comment_mark {
    background: rgba(0, 0, 0, .3);
  }
  @media screen and(max-width: 1440px) {
    #sports_two_title_wrapper {
      .mb(.5rem);
    }
    #sports_two_content_wrapper{
      .pt(.8rem);
    }
  }
</style>
