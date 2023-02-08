<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <h2>动画效果实现</h2>
    <!-- css中的过渡标签 -->
    <transition name="hello" appear>
      <!-- apper作用：初始化时播放进场动画 -->
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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

/* 
        进入的时候要激活的样式 
        名字必须是v-enter-active和v-leave-active(当transition没有name时)
        如果有name的话，要命名为“名字-enter-active和名字-leave-active”
        不然vue无法识别
    */
.hello-enter-active {
  animation: jack 1s;
}

.hello-leave-active {
  animation: jack 1s reverse;
}

/* 定义动画 */
@keyframes jack {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>