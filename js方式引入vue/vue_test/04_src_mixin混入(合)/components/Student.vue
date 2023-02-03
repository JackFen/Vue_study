<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
//引入一个局部混合配置
// import { mixin,mixin2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name:'张三',
      sex:'男'
    };
  },
  // mixins:[mixin,mixin2] //配置混合
};
</script>