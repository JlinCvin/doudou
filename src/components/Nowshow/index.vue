<template>
  <div class="wrapper" ref="wrapper">
    <Scroller>
    <ul>
      <li v-for="item in movies" :key="item.message" class="czl_li">
        <img :src="item.msg" />
        <div class="cal_msg">
          <h5>{{ item.name }}</h5>
          <p>
            观众评：<span>{{ item.pingfen }}</span>
          </p>
          <p>主演：{{ item.actors }}</p>
          <p>今天放映{{ item.changci }}场</p>
        </div>
        <button type="button" class="czl_button">购票</button>
      </li>
    </ul>
    </Scroller>
  </div>
</template>

<script>

export default {
  name: "Nowshow",
  data() {
    return {
      movies: [
        {
          msg: require("@/assets/1.jpg"),
          name: "无名之辈",
          pingfen: "9.2",
          actors: "陈振霖",
          changci: "555",
        },
        {
          msg: require("@/assets/1.jpg"),
          name: "无名之辈",
          pingfen: "9.2",
          actors: "陈振霖",
          changci: "555",
        },
        {
          msg: require("@/assets/1.jpg"),
          name: "无名之辈",
          pingfen: "9.2",
          actors: "陈振霖",
          changci: "555",
        },
        {
          msg: require("@/assets/2.jpg"),
          name: "无名之辈",
          pingfen: "9.2",
          actors: "陈振霖",
          changci: "555",
        },
        {
          msg: require("@/assets/3.jpg"),
          name: "无名之辈",
          pingfen: "9.2",
          actors: "陈振霖",
          changci: "555",
        },
        {
          msg: require("@/assets/3.jpg"),
          name: "无名之辈",
          pingfen: "9.2",
          actors: "陈振霖",
          changci: "555",
        },
        {
          msg: require("@/assets/3.jpg"),
          name: "无名之辈",
          pingfen: "9.2",
          actors: "陈振霖",
          changci: "555",
        },
        {
          msg: require("@/assets/3.jpg"),
          name: "无名之辈",
          pingfen: "9.2",
          actors: "陈振霖",
          changci: "555",
        },
      ],
    };
  },
  mounted() {

  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
  ul{
    padding: 4.5rem 0 2.5rem 0;
  }
}
.czl_li {
  display: flex;
  padding: 0.5rem;
  position: relative;
  align-items: center;
  border-bottom: 0.05rem solid #ebe8e3;
  img {
    width: 3rem;
    height: 4rem;
    margin-right: 0.5rem;
  }
  .cal_msg {
    display: flex;
    height: 4rem;
    flex-direction: column;
    justify-content: space-around;
    h5 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.6rem;
      span {
        font-size: 0.6rem;
        color: goldenrod;
      }
    }
  }
  .czl_button {
    margin-left: auto;
    font-size: 0.6rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: #e54847;
    border: 0;
    color: #fff;
  }
}
</style>
