<template>
  <div class="mainBox">
    <div class="content">
      <h1 class="content-title">{{$t('adult.slideFive.title')}}</h1>
      <p class="content-paragraph content-p">{{$t('adult.slideFive.content')}}</p>
      <p class="content-paragraph content-p2">{{$t('adult.slideFive.content2')}}</p>
      <ul class="adult-list">
        <li>
          <a>
            <img src="../../assets/img/adult/adult5.png" alt="">
            <p>Evelyn</p>
          </a>
        </li>
        <li>
          <a>
            <img src="../../assets/img/adult/adult6.png" alt="">
            <p>Punina</p>
          </a>
        </li>
        <li>
          <a>
            <img src="../../assets/img/adult/adult7.png" alt="">
            <p>Gill</p>
          </a>
        </li>
        <li>
          <a>
            <img src="../../assets/img/adult/adult8.png" alt="">
            <p>Naomi Mizuno</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/lin-common.css'
  .mainBox
    .content
      .content-paragraph
        width 9.38rem
        &.content-p
          font-size .2rem
</style>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
