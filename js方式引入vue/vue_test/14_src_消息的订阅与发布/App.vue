<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
//引入组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  data() {
    return {
      msg:'你好啊！'
    }
  },
  components: {Student,School},
};
</script>
<style scoped>
  .app{
    background-color: grey;
    padding: 5px;
  }
</style>