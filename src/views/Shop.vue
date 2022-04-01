<template>
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

  <div class="container">
    <div class="ticker" v-for="(item, idx) in array" :key="idx">
      <div class="image-phone">
        <div class="quick-view">Быстрый просмотр</div>
      </div>
      <div class="description">
        <div class="prices">
          <div class="price1"><span>86968 ₽</span><span>99990 ₽</span></div>
          <span class="price2">85251 ₽</span>
        </div>
        <div class="characteristics">
          Apple iPhone 13 Pro Max, 1 ТБ, «небесно-голубой»
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",

  data() {
    return {
      activeIndex: ref("3"),
      array: [1, 2, 3, 4, 5, 6, 7, 8],
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
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.description {
  margin-left: -15px;
}
.ticker {
  display: inline-block;
  margin: 20px;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgb(202, 202, 202);
  width: 230px;
  height: 500px;
  box-shadow: 5px 5px 5px rgb(202, 202, 202);
}

.image-phone {
  position: relative;
  height: 310px;
  width: 100%;
  display: inline-block;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url(https://static.re-store.ru/upload/resize_cache/iblock/cb1/1160_880_17f5c944b3b71591cc9304fac25365de2/cb1654c42ca5354a34e8c088a263a26b.jpg);
}

.image-phone::before {
  position: absolute;
  content: "-14%";
  font-size: 12px;
  color: rgb(143, 0, 107);
  width: 38px;
  height: 16px;
  border-radius: 4px;
  background-color: rgb(255, 205, 233);
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}

.quick-view {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 40px;
  border-radius: 25px;
  background-color: rgb(184, 184, 184);
  font-size: 12px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.1s linear;
}

.image-phone:hover .quick-view {
  opacity: 0.5;
}

.image-phone:hover .quick-view:hover {
  cursor: pointer;
  opacity: 0.8;
}

.prices {
  padding-top: 10px;
  padding-bottom: 5px;
  width: 60%;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.price1 span:first-child {
  display: inline-block;
  color: rgb(0, 0, 0);
}

.price1 span:last-child {
  display: inline-block;
  padding-left: 10px;
  color: rgb(165, 165, 165);
  text-decoration: line-through 1px;
}

.price2 {
  display: inline-block;
  color: rgb(255, 98, 203);
  font-size: 11px;
}

.characteristics {
  color: rgb(158, 158, 158);
  font-size: 12px;
  text-align: center;
}
</style>
