<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男"
    };
  },
  mounted() {
    // console.log('student',this.x)
  },
  methods: {
    sendStudentName(){
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',123)
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