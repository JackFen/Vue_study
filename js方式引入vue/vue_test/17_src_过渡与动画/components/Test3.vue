<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <h2>第三方库效果实现</h2>
    <!-- css中的过渡标签 -->
    <!-- transition-group用于多个标签使用同一个效果
        transition用于一个标签使用一个效果
     -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <!-- apper作用：初始化时播放进场动画 -->
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="!isShow" key="2">jack</h1>
    </transition-group>
  </div>
</template>

<script>
// 引入第三方样式库
import "animate.css";

export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 进入的起点、离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

/* 进入的终点、离开的起点*/
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>