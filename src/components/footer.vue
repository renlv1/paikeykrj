<template>
    <div class="footer">
      <div class="footerLeft">
        <a class="fb" href="https://www.facebook.com" target="_blank">FACEBOOK</a>
        <a href="https://twitter.com/intent/tweet?text=www.pktgi.com" target="_blank">TWITTER</a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=http://pi-group.biz&title=π Group Inc.&summary=All Spirits,One Goal.&source=LinkedIn" target="_blank">LINKEDIN</a>
      </div>
      <div class="footerRight">
        COPYRIGHT © 2015-2019 &nbsp;&nbsp;GROUP INC
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
      }
    }
  }
</script>

<style lang="css" scoped>
  @font-face {
    font-family: 'font1';   /*字体名称*/
    src: url('../assets/fonts/HeroicCondensed-Medium.ttf');       /*字体源文件*/
  }
  .footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 50;
    color: #fff;
    padding-bottom: 20px;
  }
  .footerLeft{
    float: left;
    font-size: 20px;
  }
  .footerRight{
    font-size:0.16rem;
    position: absolute;
    right: -85px;
    top:-50px;
    transform: rotate(90deg)!important;
    -ms-transform: rotate(90deg)!important;		/* IE 9 */
    -webkit-transform: rotate(90deg)!important;	/* Safari and Chrome */
    -o-transform: rotate(90deg)!important;		/* Opera */
    -moz-transform: rotate(90deg)!important;
    opacity: 0.4;
  }
  .footerLeft a{
    color: #fff!important;
    background: none;
    border: none;
    font-family: font1;
    cursor: pointer;
    font-size: 0.2rem;
    margin-left: 50px;
    height: 66px;
    outline: none;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    width: 80px;
    text-decoration: none;
  }
  .footerLeft a:hover{
    font-size: 0.24rem;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
</style>

