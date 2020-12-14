<template>
  <div>
    <div>个人中心:</div>
    <div>当前用户:{{ $store.state.user.user}}
      <a href="javascript:;" @click="handleLogout()">退出</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "center",
  data() {
    return {};
  },
  methods: {
    handleLogout() {
      this.axios.get("/api2/users/logout").then((res) => {
        var status = res.data.status;
        if (status === -1) {
          this.$store.commit('user/USER_INFO',{user: ''})
          this.$router.push("/login/logining");
        }
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    axios.get("/api2/users/getUser").then((res) => {
      var status = res.data.status;
      if (status === 0) {
        next(vm => {
          vm.$store.commit('user/USER_INFO',{user: res.data.data.username})
        });
      } else {
        next("/login/logining");
      }
    });
  },
};
</script>

<style scoped>
</style>
