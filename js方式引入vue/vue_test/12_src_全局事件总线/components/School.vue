<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "石家庄铁道大学",
      address: "河北",
    };
  },
  mounted() {
    //当前this是vm
    // 绑定hello点击事件
    this.$bus.$on('hello',(data)=>{
      console.log('我是School组件，收到了数据',data)
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')
  }
};
</script>

<style scoped>
  .demo {
    background-color: skyblue;
  }
</style>