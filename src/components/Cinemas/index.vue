<template>
  <div class="wrapper" ref="wrapper">
    <Scroller>
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
    </Scroller>
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
        },
        {
          name: '弟弟影院（弟弟）',
          money: '239.2',
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
        },
        {
          name: '弟弟影院（弟弟）',
          money: '239.2',
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
        },
        {
          name: '弟弟影院（弟弟）',
          money: '239.2',
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
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  height: 100%;
  overflow: hidden;

}
.czl_li{
  display: flex;
  padding: 0.5rem;
  position: relative;
  align-items: center;
  border-bottom: 0.05rem solid #ebe8e3;
  img{
    width: 3rem;
    height: 4rem;
    margin-right: 0.5rem;
  }
  .cal_msg{
    display: flex;
    height: 4rem;
    flex-direction: column;
    justify-content: space-around;
    h5{
    font-size: 0.8rem;
    span{
      margin-left: 0.25rem;
      font-size: 0.8rem;
      color: red;
      }
    }
    p{
      font-size: 0.6rem;
    }
    .czl_cool{
      font-size: 0.6rem;
      border: 0.05rem solid rgb(236, 169, 81);
      margin-right: 0.5rem;
      display: flex;
      padding: 0 0.25rem;
      justify-content: center;
      align-items: center;
      color: rgb(236, 169, 81);
    }
  }
  .czl_address{
     margin-left:auto;
     font-size: 0.6rem;
     color: rgb(141, 134, 134);
  }
  
}
</style>
