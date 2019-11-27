<template>
  <div class="entertainment_three_mark comment_mark">
    <div class="entertainment_three_content_wrapper content_wrapper">
      <div class="entertainment_three_title_wrapper title_wrapper">
        <span class="entertainment_three_title">{{$t('entertainment.entertainmentTwo.title')}}</span>
      </div>
      <ul class="entertainment_three_list_wrapper">
        <li class="entertainment_three_item" v-for="(item, index) in $t('entertainment.entertainmentTwo.content')">
          <div class="entertainment_three_img_wrapper">
            <img :src="entertainmentpic1" v-if="index === 0">
            <img :src="entertainmentpic2" v-else-if="index === 1">
            <img :src="entertainmentpic3" v-else-if="index === 2">
            <img :src="entertainmentpic4" v-else-if="index === 3">
            <img :src="entertainmentpic5" v-else-if="index === 4">
            <img :src="entertainmentpic6" v-else>
            <p>{{item}}</p>
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
        entertainmentpic1: require('../../../assets/img/imagesb/entretainment/entertainmentpic1.png'),
        entertainmentpic2: require('../../../assets/img/imagesb/entretainment/entertainmentpic2.png'),
        entertainmentpic3: require('../../../assets/img/imagesb/entretainment/entertainmentpic3.png'),
        entertainmentpic4: require('../../../assets/img/imagesb/entretainment/entertainmentpic4.png'),
        entertainmentpic5: require('../../../assets/img/imagesb/entretainment/entertainmentpic5.png'),
        entertainmentpic6: require('../../../assets/img/imagesb/entretainment/entertainmentpic6.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .entertainment_three_content_wrapper {
    color: @default;
    .entertainment_three_title_wrapper {
      font-size: 1rem;
      line-height: .6rem;
      .entertainment_three_title {
        font-family: font1;
      }
    }
    .entertainment_three_list_wrapper{
      .flex;
      width:13.5rem;
      .mt(.68rem);
      .entertainment_three_item{
        font-family: font2;
        flex:1;
        .entertainment_three_img_wrapper{
          .mr(.3rem);
          width:2rem;
          height:2.2rem;
          .rel;
          img{
            width:100%;
            height:100%;
          }
          p{
            .abs;
            top:1.7rem;
            font-size:.12rem;
            .ic;
            .tc;
            width:90%;
            color:@default;
          }
        }
      }
    }
  }
</style>
