<template>
  <div>
    <ul class="aside_list" :class="{'fixLeft' : !fixDecorationRight, 'fixRight' : fixDecorationRight}">
      <li class="aside_item"
          v-for="(item, index) in num"
          @click="sentToParent(index)">
        <i :class="{'active' : index === activeitem, 'iRight' : fixDecorationRight, 'iLeft' : !fixDecorationRight}"></i>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['num', 'activeitem'],
    data () {
      return {
        fixDecorationRight: true
      }
    },
    methods: {
      sentToParent (index) {
        this.$emit('changeActiveitem', index)
      }
    },
    mounted () {
      if (this.$route.path === '/') {
        this.fixDecorationRight = false
      } else {
        this.fixDecorationRight = true
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../assets/css/bcss/comment';
  @import '../../assets/css/reset.css';
  .aside_list {
    .fix;
    top:50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    z-index: 100;
    .aside_item {
      .rel;
      height: 20px;
      width: 30px;
      &:hover {
        .cur;
      }
      &:hover i{
        width: 66px;
      }
      i {
        .abs;
        .vc;
        width: 100%;
        height: 1px;
        border-bottom:1px solid @default;
        transition: width linear .2s;
      }
      .iRight{
        right:0;
      }
      .iLeft{
        left:0;
      }
      .active {
        width: 66px;
      }
    }
  }
  .fixLeft{
    left:0;
  }
  .fixRight{
    right: 0;
  }
</style>
