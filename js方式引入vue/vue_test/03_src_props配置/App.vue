<template>
  <div>
    <Student name="李四" sex="女" :age="18"/>//加冒号才能将age识别为数字否则当做字符串处理
  </div>
</template>

<script>
//引入组件
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student
  }
};
</script>