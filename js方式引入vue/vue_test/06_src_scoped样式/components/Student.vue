<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名:{{ name }}</h2>
    <h2 class="qwe">学生性别:{{ sex }}</h2>
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
};
</script>
// 不写lang默认就是css
<style lang="less" scoped>
  .demo {
    background-color: pink;
    .qwe{
      font-size: 40px;
    }
  }
</style>