<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <!--  tag属性：<router-link>渲染成某种标签 -->
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
 export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 // scoped 属性是一个布尔属性。
 // scoped属性可以让CSS样式只对局部元素生效，具体说，就是存放这段style样式的元素的子元素生效
  @import "~common/stylus/variable" // ~common 表示相对 common
  @import "~common/stylus/mixin"

  .m-header
    positon: relative
    text-align: center
    color: $color-theme
    font-size: 0
    height: 44px
    .icon
      display: inline-block
      vertical-align: top // 设置元素的垂直对齐方式
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .text
      display: inline-block
      line-height: 44px
      font-size: $font-size-large
      vertical-align: top
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme

</style>

<!-- display: none: 此元素不会被显示
              block: 此元素将显示为块级元素，此元素前后会带有换行符
              inline: 默认,此元素会被显示为内联元素，元素前后没有换行符
              inline-block: 行内块元素
     block与inline-block区别:
        block元素可以设置width,height属性;  inline元素设置width,height属性无效
        block元素可以设置margin和padding属性; inline元素的margin和padding属性，水平方向的都产生边距效果,竖直方向不会
-->
