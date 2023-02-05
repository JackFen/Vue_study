<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName(){
      // 触发Student组件实例的jack事件
      this.$emit('jack',this.name,1,2,3)
    }
  },
};
</script>
// 不写lang默认就是css
<style lang="less" scoped>
  .student {
    background-color: pink;
    padding: 5px;
    margin-top: 5px;
  }
</style>