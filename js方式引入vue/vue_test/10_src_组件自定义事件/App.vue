<template>
  <div class="app">
    <h1>{{msg}},学生姓名是{{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    <hr>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第一种写法，使用@或v-on)-->
    <Student v-on:jack="getStudentName" @demo="m1"/>    

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第二种写法，使用ref)-->
    <!-- <Student ref="student"/> -->
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
      msg:'你好啊！',
      studentName:''
    }
  },
  components: {Student,School},
  methods: {
    getSchoolName(name){
      console.log('App收到了学校名',name)
    },
    getStudentName(name,...params){
       console.log('App收到了学生名',name,params)
       this.studentName=name
    },
    m1(){
      console.log('demo事件被触发')
    }
  },
  mounted() {
    // this.$refs.student.$on("jack",this.getStudentName) //绑定自定义事件
    // this.$refs.student.$once("jack",this.getStudentName) //绑定自定义事件（只能用一次）
    setTimeout(() => {
      this.$destroy()
    }, 3000);
  },
};
</script>
<style scoped>
  .app{
    background-color: grey;
    padding: 5px;
  }
</style>