<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Главная страница</el-menu-item>
      <el-menu-item index="2">Авторизация</el-menu-item>
      <el-menu-item index="3">Магазин</el-menu-item>
    </el-menu>
  </div>
  <div>
    <div class="image-phone"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",

  data() {
    return {
      activeIndex: ref("3"),
    };
  },

  methods: {
    handleSelect(key) {
      if (key === "1") this.$router.push("/");
      if (key === "2") this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.image-phone {
  background: #2a2e48
    url(https://c.dns-shop.ru/thumb/st4/fit/500/500/8248a5761c93c07f653d676707eb895b/e6e42d51ad32dcbce3ee53178ec7d5f7325ebd915038a4ba09d27e85bcd21378.jpg.webp)
    center;
  width: 474px;
  height: 500px;
}
</style>
