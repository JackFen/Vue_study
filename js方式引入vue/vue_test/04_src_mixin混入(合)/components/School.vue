<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
//引入一个局部混合配置
// import { mixin,mixin2 } from "../mixin";

export default {
  name: "School",
  data() {
    return {
      name: "石家庄铁道大学",
      address: "河北",
    };
  },
  // mixins:[mixin,mixin2] //配置混合
};
</script>