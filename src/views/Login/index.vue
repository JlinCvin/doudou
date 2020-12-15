<template>
  <div>
    <Header msg="我的逗逗" />
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Login",
  components: {
    Header,
    TabBar,
  },
  data() {
    return {
      
    };
  },
  
};
</script>

<style lang='scss' scoped>
</style>
