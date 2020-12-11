<template>
  <div class="content_city" ref="movie_body">

    <div class="czlCity">
      <div class="hot_city">
        <p class="czl_title" style="margin-top: 0">热门城市</p>
        <div class="city_li">
          <li v-for="item in city" :key="item.index" class="czl_city">
            <span>{{ item }}</span>
          </li>
        </div>
      </div>
      <div class="city_sort" ref="city_sort">
        <div v-for="item in allCity" :key="item.index" class="czl_all">
          <h2 class="czl_title">{{ item.title }}</h2>

          <div class="all_city">
            <p v-for="item in item.lists" :key="item.index">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="rollshow" class="ttttt">
      <p
        v-for="(item, index) in allCity"
        :key="item.index"
        @touchstart="handleTOindex(index)"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "City",
  data() {
    return {
      city: ["广州", "深圳", "北京", "佛山", "厦门", "北京", "上海"],
      allCity: [],
      rollshow: true,
    };
  },
  mounted() {
    this.axios.get("../../City.json").then((res) => {
      this.allcitys(res.data.city);
      this.$nextTick(() => {
        var options = {
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
        };
        new BScroll(this.$refs.movie_body, options);
      });
    });
    // window.addEventListener("scroll", this.btn_pos);
  },
  methods: {
    allcitys(e) {
      for (let i = 0; i < e.length; i++) {
        this.allCity.push(e[i]);
      }
    },
    btn_pos: function () {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 250) {
        this.rollshow = true;
      } else {
        this.rollshow = false;
      }
    },
    handleTOindex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      document.body.scrollTop = h2[index].offsetTop;
      document.documentElement.scrollTop = h2[index].offsetTop;
    },
  },
};
</script>

<style lang='scss' scoped>
.content_city {
  overflow: hidden;
  height: 100%;
  background: rgb(247, 241, 235);
  .czlCity {
    padding: 4.5rem 0 2.5rem 0;
    background: rgb(247, 241, 235);
  }
  .czl_title {
    padding: 0 0.5rem;
    margin: 1rem 0;
    background: rgb(226, 231, 231);
    font-size: 0.8rem;
    height: 1rem;
    line-height: 1rem;
  }
  .hot_city {
    padding: 1rem 0;
    .city_li {
      display: flex;
      flex-wrap: wrap;

      li {
        background: #fff;
        padding: 0.2rem 1.2rem;
        margin: 0.5rem;
        display: flex;
        align-items: center;
        border: 1px solid #ebe8e3;
        span {
          font-size: 0.7rem;
        }
      }
    }
  }
  .all_city {
    p {
      font-size: 0.7rem;
      padding: 0.1rem 0.5rem;
    }
  }
}
.ttttt {
  position: fixed;
  display: flex;
  right: 0;
  top: 5rem;
  flex-direction: column;
  p {
    flex: 1;
    font-size: 0.6rem;
    color: #000;
  }
}
</style>
