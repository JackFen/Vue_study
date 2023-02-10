<template>
  <div class="container">
    <MyCategory title="美食" >
      <img src="./assets/food.jpg" />
    </MyCategory>
    <MyCategory title="游戏" >
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </MyCategory>
    <MyCategory title="电影" >
      <img src="./assets/film.jpg" />
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from "./components/Category.vue";

export default {
  name: "App",
  components: { MyCategory },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾"],
      games: ["红色警戒", "穿越火线", "CSGO"],
      films: ["《教父》", "《速度与激情》", "《哈利波特》"],
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>