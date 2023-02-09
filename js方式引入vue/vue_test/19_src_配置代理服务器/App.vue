<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  methods: {
    getStudents(){
      // 向代理服务器请求资源
      // 如果代理服务器中（即public文件夹下）有对应的资源，则不会请求真正的服务器,/jack为前缀,有此前缀会强制转发到真正的服务器
      axios.get('http://localhost:8080/jack/students').then(
        response=>{
          console.log('请求成功了',response.data)
        },
        error=>{
          console.log('请求失败了',error.message)
        }
      )
    },
    getCars(){
      // 向代理服务器请求资源
      // 如果代理服务器中（即public文件夹下）有对应的资源，则不会请求真正的服务器,/deno为前缀,有此前缀会强制转发到真正的服务器
      axios.get('http://localhost:8080/demo/cars').then(
        response=>{
          console.log('请求成功了',response.data)
        },
        error=>{
          console.log('请求失败了',error.message)
        }
      )
    }
  },
};
</script>