<template>
  <div class="myCenter">
    <div class="center_top">
      <h5>个人中心:</h5>
      <el-link type="info" @click="handleLogout()">退出登录</el-link>
    </div>
    <div class="center_msg">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
    <div>
      {{ $store.state.user.user }}
    </div>
    <div class="center_get">
      <span>您的观影记录</span>
      <span>您的观影评价</span>
    </div>
    <div class="center_carousel">
      <el-carousel
        class="carousel"
        :interval="4000"
        type="card"
        indicator-position="none"
      >
        <el-carousel-item
          style="height: 10rem; width: 5.4rem"
          v-for="item in movies.slice(4, 12)"
          :key="item.name"
        >
          <img :src="item.msg" style="height: 8rem; width: 5.4rem" />
          <h3 class="medium">{{ item.name }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "center",
  data() {
    return {
      movies: [
        // {
        // "actors": "马虎 / 梁正双 / 张锦新",
        // "director": "许慧晶",
        // "msg": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2627027305.jpg",
        // "name": "棒！少年",
        // "rate": "8.7",
        // "rater": "16705",
        // "sroce": "8.7",
        // "time": "2020"
        // }
      ],
    };
  },
  mounted() {
    this.axios.get("../Nowshow.json").then((res) => {
      if (res.data) {
        this.allmovies(res.data.movies);
      }
    });
  },
  methods: {
    allmovies(e) {
      for (let i = 0; i < e.length; i++) {
        this.movies.push(e[i]);
      }
    },
    handleLogout() {
      this.axios.get("/api2/users/logout").then((res) => {
        var status = res.data.status;
        if (status === -1) {
          this.$store.commit("user/USER_INFO", { user: "" });
          this.$router.push("/login/logining");
        }
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    axios.get("/api2/users/getUser").then((res) => {
      var status = res.data.status;
      if (status === 0) {
        next((vm) => {
          vm.$store.commit("user/USER_INFO", { user: res.data.data.username });
        });
      } else {
        next("/login/logining");
      }
    });
  },
};
</script>

<style lang='scss' scoped>
.myCenter {
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .center_top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1rem;
    .el-link {
      font-size: 0.7rem;
    }
  }
  .center_msg {
    .el-avatar {
      height: 4rem;
      width: 4rem;
    }
  }
  .center_get {
    margin: 1rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
.center_carousel {
  width: 100%;
}
.carousel {
  height: 10rem;
  width: 100%;
 ::v-deep  .el-carousel__container{
    height: 10rem;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 0.7rem;
  opacity: 0.75;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
