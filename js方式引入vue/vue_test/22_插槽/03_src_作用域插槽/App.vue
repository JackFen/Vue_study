<template>
  <div class="container">
    <MyCategory title="游戏">
      <template scope="jack">
        <ul>
          <li v-for="(item, index) in jack.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </MyCategory>
    <MyCategory title="游戏">
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </MyCategory>
    <MyCategory title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from "./components/Category.vue";

export default {
  name: "App",
  components: { MyCategory },
};
</script>
<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>