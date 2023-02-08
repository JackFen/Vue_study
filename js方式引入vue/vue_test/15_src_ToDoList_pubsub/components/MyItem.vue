<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 如下代码也能实现功能，但不太推荐，因为有点违法原则，修改了prorps -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="HandleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
// 引入第三方库
import pubsub from 'pubsub-js'

export default {
  name: "MyItem",
  // 声明接受todo对象
  props:['todo'],
  methods: {
    // 勾选or取消勾选
    handleCheck(id){
      // 通知App组件将对应的todo对象的done值取反
      this.$bus.$emit('checkTodo',id)
    },
    // 删除
    HandleDelete(id){
      if (confirm('确定删除吗?')) {
        pubsub.publish('deleteTodo',id)
      }
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: lightgray;
}

li:hover button{
  display: block;
}
</style>