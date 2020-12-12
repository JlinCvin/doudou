<template>
  <div class="content_city">
    <Loading v-if="isloading" />
    <Scroller v-else ref="city_list">
      <div class="czlCity">
        <div class="hot_city">
          <p class="czl_title" style="margin-top: 0">热门城市</p>
          <ul class="city_li">
            <li v-for="(item,index) in city" @click="handToCity(item,index)" :key="item.index" class="czl_city">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="city_sort" ref="city_sort">
          <div v-for="item in allCity" :key="item.index" class="czl_all">
            <h2 class="czl_title">{{ item.title }}</h2>

            <ul class="all_city">
              <li v-for="(item,index) in item.lists" @click="handToCity(item,index)" :key="item.index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Scroller>
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
export default {
  name: "City",
  data() {
    return {
      city: ["广州", "深圳", "北京", "佛山", "厦门", "北京", "上海"],
      allCity: [],
      rollshow: true,
      isloading: true,
    };
  },
  mounted() {
    var allCitys = window.localStorage.getItem("allCitys");
    if (allCitys) {
      this.allCity = JSON.parse(allCitys);
      this.isloading = false;
    } else {
      this.axios.get("../City.json").then((res) => {
        if (res.data) {
          var allCitys = this.allcitys(res.data.city);
          setTimeout(() => {
            this.isloading = false;
          }, 500);
          window.localStorage.setItem("allCitys", JSON.stringify(allCitys));
        }
      });
    }

    // window.addEventListener("scroll", this.btn_pos);
  },
  methods: {
    allcitys(e) {
      for (let i = 0; i < e.length; i++) {
        this.allCity.push(e[i]);
      }
      return this.allCity;
    },
    handToCity(nm,id){
      this.$store.commit('city/CITY_INFO',{ nm ,id});
      window.localStorage.setItem('nowNm',nm);
      window.localStorage.setItem('nowId',id);
      this.$router.push('./movie/nowshow');
    },
    // btn_pos: function () {
    //   var scrollTop =
    //     document.body.scrollTop || document.documentElement.scrollTop;
    //   if (scrollTop > 250) {
    //     this.rollshow = true;
    //   } else {
    //     this.rollshow = false;
    //   }
    // },
    handleTOindex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      this.$refs.city_list.toScrollTop(-h2[index].offsetTop);
    },
  },
};
</script>

<style lang='scss' scoped>
.content_city {
  height: 100%;
  background: rgb(247, 241, 235);
  .czlCity {
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
    li {
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
