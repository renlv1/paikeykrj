<template>
  <div class="button_wrapper">
    <slot name="button"></slot>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
  .button_wrapper{
    font-size:0;
  }
  .btn{
    color:#fff;
    display:inline-block;
    width:2.6rem;
    height:.6rem;
    line-height:.6rem;
    text-align: center;
    font-size: .18rem;
    border:1px solid rgba(255,255,255,.2);
    -o-transition: border .2s linear;
    -moz-transition: border .2s linear;
    -webkit-transition: border .2s linear;
    transition: border .2s linear;
    &:hover{
      cursor: pointer;
      border: 1px solid #fff;
      color:#fff;
      text-decoration: none;
    }
  }
</style>
