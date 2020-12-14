<template>
  <header>
    <div class="header_height"></div>
    <div id="header">
      <h1>{{ msg }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: {
      type: String,
      default: "喵喵影院",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.header_height {
  height: 2.5rem;
  position: relative;
}
#header {
  width: 100%;
  height: 2.5rem;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
#header h1 {
  font-size: 0.9rem;
  text-align: center;
  line-height: 2.5rem;
  font-weight: normal;
}
#header i {
  position: absolute;
  left: 0.25rem;
  top: 50%;
  margin-top: -0.65rem;
  font-size: 1.3rem;
}
</style>
