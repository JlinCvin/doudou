<template>
  <div class="wrapper" ref="wrapper">
    <Loading v-if="isloading" />
    <Scroller v-else>
      <ul>
        <li v-for="item in movies" :key="item.message" class="czl_li">
          <img :src="item.msg" />
          <div class="cal_msg">
            <h5>{{ item.name }}</h5>
            <p>
              观众评：<span>{{ item.rate }}</span>
            </p>
            <p class="li_actors">主演：{{ item.actors }}</p>
            <p>今天放映{{ item.rater }}场</p>
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
        // {
        //     "actors": "马虎 / 梁正双 / 张锦新",
        // "director": "许慧晶",
        // "link": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2627027305.jpg",
        // "name": "棒！少年",
        // "rate": "8.7",
        // "rater": "16705",
        // "sroce": "8.7",
        // "time": "2020"
        // }
      ],
      isloading: true,
    };
  },
  mounted() {
    this.axios.get("../Nowshow.json").then((res) => {
      if (res.data) {
        this.allmovies(res.data.movies);
        this.isloading = false;
      }
    });
  },
  methods: {
    allmovies(e) {
      for (let i = 0; i < e.length; i++) {
        this.movies.push(e[i]);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
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
    overflow: hidden;
      width: 50%;
    flex-direction: column;
    justify-content: space-around;
    h5 {
      font-size: 0.7rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .li_actors{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
