<template>
  <div class="login-page">
    <div class="form">
      <h1>Авторизация</h1>

      <div class="form-inner">
        <div class="prompt"><span>*</span> Электронная почта</div>
        <el-input
          v-model="inputLogin"
          @input="errLogin = false"
          @keydown.enter="checkForm"
          placeholder="Please input"
          clearable
        />
        <div class="err" v-if="errLogin">Некорректный адресс почты</div>
      </div>

      <div class="form-inner">
        <div class="prompt"><span>*</span> Пароль</div>
        <el-input
          v-model="inputPass"
          @input="errPass = false"
          @keydown.enter="checkForm"
          type="password"
          placeholder="Please input password"
          show-password
        />
        <div class="err" v-if="errPass">
          Пароль должен содержать не менее 8 символов и иметь заглавные буквы
        </div>
      </div>
      <div class="btn">
        <el-button @click="checkForm" type="primary">Авторизация</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { ElLoading } from "element-plus";
export default {
  name: "App",

  data() {
    return {
      inputLogin: ref(""),
      inputPass: ref(""),
      errLogin: false,
      errPass: false,
    };
  },

  methods: {
    checkForm() {
      if (!this.validLogin(this.inputLogin)) {
        this.errLogin = true;
      }
      if (!this.validPass(this.inputPass)) {
        this.errPass = true;
      }
      if (!this.errLogin && !this.errPass) {
        const load = this.loading();
        setTimeout(() => {
          load.close();
          this.$router.push("/");
        }, 2000);
      }
    },

    validLogin(login) {
      let re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(login);
    },

    validPass(p) {
      let pass = p.trim();

      return pass.length >= 8 && p.match(/[A-Z]/g)?.join("") ? true : false;
    },

    loading() {
      const load = ElLoading.service({
        lock: true,
        text: "Загрузка",
        background: "rgba(0, 0, 0, 0.7)",
      });
      return load;
    },
  },
};
</script>

<style scoped>
.login-page {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-color: rgb(39, 34, 58);
  display: flex;
}

.form {
  width: 33%;
  min-width: 200px;
  margin: auto;
}

h1 {
  padding-bottom: 40px;
  text-align: center;
  font-size: 25px;
}

.form-inner {
  position: relative;
  padding-bottom: 20px;
}

.prompt {
  padding-bottom: 3px;
}

.prompt::first-letter {
  color: tomato;
}

.err {
  position: absolute;
  color: tomato;
  transform: translateY(3px);
}

.btn {
  padding-top: 20px;
  text-align: center;
}
</style>
