<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroller",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      new BScroll(this.$refs.wrapper, {
          scrollY: true, // 因为scrollY默认为true，其实可以省略
          click: true,
          tap: true,
          pullDownRefresh: {
            threshold: 50,
            probeType: 3,
          },
          pullUpLoad: {
            threshold: 744,
          },
          probeType: 1,
        });
    });
  },
  methods: {},
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
