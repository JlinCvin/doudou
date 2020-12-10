<template>
  <div>
    <ul>
      <li v-for="item in cinemas" :key="item.message" class="czl_li">
        <div class="cal_msg">
          <h5>{{item.name}}<span>{{item.money}}元起</span></h5>
          <p>地址：{{item.actors}}</p>
          <div style="display:flex">
            <span v-for="item in item.changci" :key="item.message" class="czl_cool">
              {{item}}</span>
          </div>
        </div>
        <p class="czl_address">{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cinemas', 
  data () {
    return {
      cinemas:[
        {
          name: '大地影院',
          money: '29.2',
          actors: '广州市番禺区大学城',
          changci: ['小吃','会员卡'],
          address: '1575km'
        },
        {
          name: '弟弟影院（弟弟）',
          money: '239.2',
          actors: '广州市番禺区大学城',
          changci: ['小吃','会员卡'],
          address: '1575km'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.czl_li{
  display: flex;
  padding: 10px;
  position: relative;
  align-items: center;
  border-bottom: 1px solid #ebe8e3;
  img{
    width: 60px;
    height: 80px;
    margin-right: 10px;
  }
  .cal_msg{
    display: flex;
    height: 80px;
    flex-direction: column;
    justify-content: space-around;
    h5{
    font-size: 16px;
    span{
      margin-left: 5px;
      font-size: 16px;
      color: red;
      }
    }
    p{
      font-size: 12px;
    }
    .czl_cool{
      font-size: 12px;
      border: 1px solid rgb(236, 169, 81);
      margin-right: 10px;
      display: flex;
      padding: 0 5px;
      justify-content: center;
      align-items: center;
      color: rgb(236, 169, 81);
    }
  }
  .czl_address{
     margin-left:auto;
     font-size: 12px;
     color: rgb(141, 134, 134);
  }
  
}
</style>
