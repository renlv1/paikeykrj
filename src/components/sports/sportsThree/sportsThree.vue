<template>
      <div class="sports_three_mark comment_mark">
        <div class="sports_three_content_wrapper content_wrapper" id="sports_three_content_wrapper">
          <div class="sports_three_title_wrapper">
            <p class="sports_three_descripe" v-html="$t('sports.sportsThree.descripe')"></p>
          </div>
          <p class="sports_three_text">{{$t('sports.sportsThree.text')}}</p>
          <ul class="sports_three_list_wrapper">
            <li class="sports_three_item" v-for="(item, index) in $t('sports.sportsThree.content')">
              <div class="sports_three_img_wrapper">
                <img :src="grouppic1" v-if="index === 0">
                <img :src="grouppic2" v-else-if="index === 1">
                <img :src="grouppic3" v-else-if="index === 2">
                <img :src="grouppic4" v-else>
              </div>
              <span class="sports_three_topic">
               {{item.topic}}
              </span>
              <p class="sports_three_content_one content_style">
                {{item.text}}
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
        grouppic1: require('../../../assets/img/imagesb/sports/grouppic1.png'),
        grouppic2: require('../../../assets/img/imagesb/sports/grouppic2.png'),
        grouppic3: require('../../../assets/img/imagesb/sports/grouppic3.png'),
        grouppic4: require('../../../assets/img/imagesb/sports/grouppic4.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .sports_three_content_wrapper {
    color: @default;
    font-size:0;
    .sports_three_title_wrapper {
      font-size: 1rem;
      .sports_three_descripe{
        color:@f6f7ff;
        font-family: font1;
      }
    }
    .sports_three_text {
      font-family: font2;
      font-size:.16rem;
      .pt(-0.1rem);
      .pb(.4rem);
    }
    .sports_three_list_wrapper {
      width:12.1rem;
      .flex;
      .sports_three_item:not(:last-child){
        .mr(.3rem);
      }
      .sports_three_item {
        flex: 1;
        .sports_three_img_wrapper {
          width: 2.8rem;
          height: 1.8rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .sports_three_topic {
          font-size:.12rem;
          .pt(.2rem);
          .pb(.22rem);
          .inb;
        }
        .content_style {
          font-family: font2;
          line-height:.25rem;
          font-size:.12rem;
        }
        .sports_three_content_one {
          width: 2.78rem;
        }
        .sports_three_content_two {
          width: 2.42rem;
        }
        .sports_three_content_three {
          width: 2.74rem;
        }
        .sports_three_content_four {
          width: 2.8rem;
        }
      }
    }
  }
  .comment_mark{
    background:rgba(0,0,0,.3);
  }
  @media screen and (max-width:1440px) {
    #sports_three_content_wrapper{
      .pt(1rem);
    }
  }
</style>
