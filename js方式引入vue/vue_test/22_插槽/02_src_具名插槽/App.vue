<template>
  <div class="container">
    <MyCategory title="美食">
      <img slot="center" src="./assets/food.jpg" />
      <div class="foot" slot="footer">
        <a slot="footer" href="https://cn.bing.com">更多美食</a>
      </div>
    </MyCategory>
    <MyCategory title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://cn.bing.com">单机游戏</a>
        <a href="http://cn.bing.com">网络游戏</a>
      </div>
    </MyCategory>
    <MyCategory title="电影">
      <img slot="center" src="./assets/film.jpg" />
      <template v-slot:footer>
        <div class="foot">
          <a href="http://cn.bing.com">经典</a>
          <a href="http://cn.bing.com">热门</a>
          <a href="http://cn.bing.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>