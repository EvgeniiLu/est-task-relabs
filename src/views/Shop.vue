<template>
  <svg style="display: none">
    <symbol id="heart" viewBox="0 0 32 32">
      <g>
        <path
          d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
        />
      </g>
    </symbol>
  </svg>

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
          <div class="price1"><span>86 968 ₽</span><span>99 990 ₽</span></div>
          <span class="price2">85 251 ₽</span>
        </div>
        <div class="characteristics">
          Apple iPhone 13 Pro Max, 1 ТБ, «небесно-голубой»
        </div>
        <div class="rate">
          <el-rate v-model="value[idx]" />
          <span>100</span>
        </div>
        <div class="sentence">Рассрочка 0-0-6</div>
        <div class="btn-block">
          <button class="btn">В корзину</button>
          <svg class="like">
            <use xlink:href="#heart"></use>
          </svg>
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
      value: [
        ref(null),
        ref(null),
        ref(null),
        ref(null),
        ref(null),
        ref(null),
        ref(null),
        ref(null),
        ref(null),
      ],
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
  background-color: rgb(212, 212, 212);
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

.rate {
  width: 60%;
  display: flex;
  align-items: center;
  margin: 5px 0;
}

.rate span {
  font-size: 15px;
  color: rgb(158, 158, 158);
}

.sentence {
  text-transform: uppercase;
  font-size: 15px;
  color: #000;
  background: linear-gradient(
    90deg,
    rgba(167, 255, 255, 1) 0%,
    rgba(222, 241, 32, 1) 79%
  );
  width: 60%;
  text-align: center;
  padding: 8px;
  border-radius: 30px;
}

.btn-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
}

.btn {
  padding: 12px;
  width: 100%;
  max-width: 140px;
  background: rgb(180, 20, 180);
  border-radius: 15px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  opacity: 1;
  transition: opacity 0.1s linear;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.7;
}

.like {
  width: 30px;
  height: 30px;
  fill: rgb(180, 20, 180);
  margin-left: 15px;
  transition: 0.1s linear;
}

.like:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
