<template>
  <div>
    <h1 class="title">你好啊</h1>
    <School/>
    <hr>
    <Student/>    
  </div>
</template>

<script>
//引入组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {Student,School}
};
</script>
<style scoped>
 .title{
		color: red;
	}
</style>