<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAllToDo"/> -->
      <!-- 使用v-model更加方便 -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  methods: {
    /*checkAllToDo(e){
       this.checkAll(e.target.checked)
    },*/
    clearAll(){
      if (confirm('确定清除吗?')) {
        // this.clearAllToDo()
        this.$emit('clearAllToDo')
      }    
    }
  },
  computed: {
    total(){
      return this.todos.length
    },
    doneTotal() {
      // 完整写法
      /*const x = this.todos.reduce((pre, current) => {
        console.log("@", pre, current);
        return pre + (current.done ? 1 : 0);
      }, 0);*/

      //简写
      return this.todos.reduce((pre, todo) =>pre + (todo.done ? 1 : 0) , 0 )
    },
    // 控制全选框
    isAll:{
      // 全选框是否被勾选
      get(){
        return this.doneTotal===this.total && this.total>0
      },
      // isAll被修改时set被调用
      set(value){
        // this.checkAll(value)
        this.$emit('checkAll',value )
      }
      
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>