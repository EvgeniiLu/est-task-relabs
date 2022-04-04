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
    <div class="main-page">
      <div class="table">
        <div class="title">Список пользователей</div>
        <el-table v-loading="loading" :data="userList" style="width: 100%">
          <el-table-column prop="id" label="ID" width="100" />
          <el-table-column prop="name" label="Имя" width="200" />
          <el-table-column prop="role" label="Роль" width="200" />
          <el-table-column prop="ctime" label="Дата создания" width="200" />
          <el-table-column fixed="right" label="Действия" width="120">
            <template #default="scope">
              <el-button
                type="danger"
                size="small"
                @click.prevent="deleteUser(scope.$index)"
              >
                Удалить
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            @current-change="setPage"
            background
            layout="prev, pager, next"
            :total="pageSize"
          />
        </div>
      </div>

      <div class="table">
        <div class="title">События</div>
        <el-table :data="eventsList" style="width: 100%">
          <el-table-column prop="ctime" label="Дата" />
          <el-table-column prop="event" label="Событие" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { loadUsers } from "./api";
import { ref } from "vue";
import dayjs from "dayjs";

export default {
  name: "App",

  data() {
    return {
      activeIndex: ref("1"),
      dataWithUserList: undefined,
      pageSize: 0,
      page: 1,
      loading: ref(true),
      userList: [],
      eventsList: [],
      now: new Date(),
    };
  },

  created: async function () {
    this.$options.sockets.onmessage = (event) => {
      let e = JSON.parse(event.data);
      e.ctime = dayjs(this.now - e.ctime).format("DD.MM.YYYY HH:mm");
      this.eventsList.unshift(e);
    };

    this.dataWithUserList = await loadUsers();

    this.pageSize =
      (this.dataWithUserList.total / this.dataWithUserList.limit) * 10;

    localStorage.clear();
    this.pushUsers();
  },

  watch: {
    dataWithUserList() {
      this.loading = false;
    },

    page() {
      this.loading = true;
      let offset =
        this.dataWithUserList.limit * this.page - this.dataWithUserList.limit;
      const newData = async () => await loadUsers(offset);
      newData().then((data) => {
        this.dataWithUserList = data;
        this.pushUsers();
        this.loading = false;
      });
    },
  },

  methods: {
    handleSelect(key) {
      if (key === "2") this.$router.push("/login");
      if (key === "3") this.$router.push("/shop");
    },

    setPage(val) {
      this.page = val;
    },

    pushUsers() {
      this.userList = [];
      this.dataWithUserList.items.forEach((element) => {
        let obj = localStorage.getItem(`id:${element.id}`);
        if (!obj) {
          element.ctime = dayjs(this.now - element.ctime).format(
            "DD.MM.YYYY HH:mm"
          );
          this.userList.push(element);
        }
      });
    },

    deleteUser(index) {
      localStorage.setItem(
        `id:${this.userList[index].id}`,
        JSON.stringify(this.userList[index])
      );
      this.userList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 15px;
}

.main-page {
  width: 100%;
  display: flex;
}
.table {
  width: 50%;
}

.title {
  text-align: center;
  font-size: 20px;
  color: rgb(94, 94, 94);
  font-weight: 600;
  margin: 20px;
}

.pagination {
  position: absolute;
  top: 45%;
  left: 25%;
  transform: translate(-25%, -45%);
}
</style>
