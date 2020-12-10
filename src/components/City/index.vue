<template>
  <div class="content">
    <div class="hot_city">
      <p class="czl_title" style="margin-top:0">热门城市</p>
      <div class="city_li">
        <li v-for="item in city" :key="item.message" class="czl_city">
          <span>{{item}}</span>
        </li>
      </div>
    </div>
    <div v-for="item in allCity" :key="item.message" class="czl_all">
      <p class="czl_title">{{item.head}}</p>
      <div class="all_city">
        <p v-for="item in item.city" :key="item.message">
          {{item}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City', 
  data () {
    return {
      city: [
        '广州',
        '深圳',
        '北京',
        '佛山',
        '深圳',
        '北京',
        '上海'
      ],
      allCity: [
        {
          head: 'A',
          city: ['北京','北京','北京','北京']
        },
        {
          head: 'B',
          city: ['广州','广州','广州','广州']
        },
        {
          head: 'C',
          city: ['深圳','深圳','深圳','广州']
        },
        {
          head: 'D',
          city: ['上海','上海','广州','广州']
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.content{
  background: rgb(247, 241, 235);
    .czl_title{
    padding: 0 10px;
    margin: 20px 0;
    background: rgb(226, 231, 231);
    font-size: 16px;
    height: 20px;
    line-height: 20px;
    }
    .hot_city{
    padding: 20px 0;
    .city_li{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
      background: #fff;
      padding: 4px 24px;
      margin: 10px;
      display: flex;
      align-items: center;
      border: 1px solid #ebe8e3;
      span{
        font-size: 14px;
        }
      }
    }
  }
  .all_city{
    p{
      font-size: 14px;
      padding: 0 10px;
      margin-bottom: 4px;
    }
  }
}

</style>
