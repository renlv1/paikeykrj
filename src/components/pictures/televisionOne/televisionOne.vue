<template>
  <div class="television_one_wrapper" :style="{backgroundImage:'url(' + bgOne + ')'}">
    <div class="television_one_doct" :style="{backgroundImage:'url(' + bgDoct + ')'}">
      <div class="television_one_mark comment_mark" id="comment_mark">
        <div class="television_one_content_wrapper content_wrapper">
          <div class="television_one_title_wrapper title_wrapper">
              <span class="pai" v-if="$t('television.televisionOne.pai') !== ''">{{$t('television.televisionOne.pai')}}</span><span class="television_one_title">{{$t('television.televisionOne.title')}}</span>
          </div>
          <p class="television_one_descripe">{{$t('television.televisionOne.descripe')}}</p>
          <div class="television_one_text_wrapper">
            <p class="television_one_topic" v-for="(item, index) in $t('television.televisionOne.topic')" :key="index" v-html="item">
            </p>
          </div>
          <!--<vbtn>-->
            <!--<a class="btn" slot="button" href="http://pictures.pi-group.biz/html/index.html" target="_blank">{{$t('television.televisionOne.btn')}}</a>-->
          <!--</vbtn>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vbtn from '../../btnComponents/commentBtn.vue'
  export default {
    data () {
      return {
        bgOne: require('../../../assets/img/imagesb/television/television1.jpg'),
        bgDoct: require('../../../assets/img/imagesb/sports/bg_doct.png')
      }
    },
    components: {
      vbtn
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../assets/css/bcss/components_children';
  .television_one_wrapper{
    height:100%;
    width:100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .television_one_doct{
    height:100%;
    width:100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .television_one_content_wrapper {
    .television_one_title_wrapper {
      font-size:1rem;
      color: @default;
      line-height: .6rem;
      .pai {
        .mr(.5rem);
      }
      .television_one_title {
        font-family: font1;
      }
    }
    .television_one_descripe {
      font-family: font2;
      font-size:.16rem;
      color: @f6f7ff;
      .pt(.24rem);
      .pb(.36rem);
    }
    .television_one_text_wrapper {
      font-family: font2;
      width: 9.4rem;
      color: @f6f7ff;
      .mb(2.1rem);
      .television_one_topic {
        font-size:.16rem;
        line-height: .32rem;
      }
    }
  }
</style>
