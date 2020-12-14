<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <i class="iconfont icon-shouye"></i>
        <p>电影</p>
      </router-link>
      <router-link tag="li" to="/cinema">
        <i class="iconfont icon-dianyingbofangqi"></i>
        <p>影院</p>
      </router-link>
      <router-link tag="li" to="/login">
        <i class="iconfont icon-chengyuan"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: 2.5rem;

  ul {
    display: flex;
    text-align: center;
    height: 2.5rem;
    font-weight: normal;

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-top: 2px solid #ebe8e3;
    }
    p {
      font-size: 0.8rem;
      line-height: 0.8rem;
    }
    i {
      font-size: 1rem;
    }
    .router-link-active {
      color: #ef4239;
      border-top: 2px solid #ef4239;
    }
  }
}
</style>
