<template>
  <div class="container">
    <MySearch />
    <MyList />
  </div>
</template>

<script>
import MySearch from "./components/Search.vue";
import MyList from "./components/List.vue";

export default {
  name: "App",
  components: { MySearch, MyList },
};
</script>
