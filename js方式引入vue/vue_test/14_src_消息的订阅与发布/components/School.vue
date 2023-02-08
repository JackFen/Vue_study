<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
// 引入发布订阅的一个实现库
import pubsub from "pubsub-js";

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
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是School组件，收到了数据',data)
    // })

    // 第一种写法
    // this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
    //   // 如果不使用箭头函数，此处的this是未定义的，因为函数体内不归vue管理，是pubsub的this
    //   console.log(this)
    //   // console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    // })

    // 第二种写法
    this.pubId = pubsub.subscribe('hello',this.demo)
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId);
  },
  methods: {
    demo(msgName, data) {
      console.log("hello消息收到了", data, this);
    },
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>