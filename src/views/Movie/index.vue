<template>
  <div style="height: 100%">
    <Header msg="逗逗电影" />
    <div class="content">
      <div class="movie_menu_height"></div>
      <div class="movie_menu">
        <router-link tag="div" class="city_name" to="/movie/city">
          <span>{{ $store.state.city.nm}}</span><i class="iconfont icon-xia"></i>
        </router-link>

        <router-link tag="div" to="/movie/nowshow">正在热映</router-link>
        <router-link tag="div" to="/movie/willshow">即将上演</router-link>

        <router-link tag="div" to="/movie/search" class="search_i">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view> </router-view>
      </keep-alive>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>


<style lang='scss' scoped>
.content {
  height: 100%;
  .movie_menu_height {
    height: 2rem;
  }
  .movie_menu {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    margin-top: 2.5rem;
    background: #fff;
    text-align: center;
    line-height: 2rem;
    height: 2rem;
    .router-link-active {
      color: #ef4239;
      border-bottom: 2px solid #ef4239;
    }
      .city_name{
    i{
      font-size: 0.5rem;
      margin-left: 0.1rem;
    }
  }
    div {
      border-bottom: 2px solid #ebe8e3;
      flex: 1;
      font-size: 0.75rem;
      span {
        font-size: 0.75rem;
      }
      i {
        font-size: 0.75rem;
      }
    }
    .search_i {
      flex: 0.5;
    }
    // .search_i.router-link-active{
    //   color: #ef4239;border-bottom: 2px solid #ebe8e3;
    // }
  }
}
</style>
