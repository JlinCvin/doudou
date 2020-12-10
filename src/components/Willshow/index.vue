<template>
  <div>
    <ul>
      <li v-for="item in movies" :key="item.message" class="czl_li">
        <img :src="item.msg">
        <div class="cal_msg">
          <h5>{{item.name}}</h5>
          <p>观众评：<span>{{item.pingfen}}</span></p>
          <p>主演：{{item.actors}}</p>
          <p>今天放映{{item.changci}}场</p>
        </div>
        <button type="button" class="czl_button">预定</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Willshow', 
  data () {
    return {
      movies:[
        {
          msg: require('@/assets/1.jpg'),
          name: '无名之辈',
          pingfen: '9.2',
          actors: '陈振霖',
          changci: '555'
        },
        {
          msg: require('@/assets/2.jpg'),
          name: '无名之辈',
          pingfen: '9.2',
          actors: '陈振霖',
          changci: '555'
        },
        {
          msg: require('@/assets/3.jpg'),
          name: '无名之辈',
          pingfen: '9.2',
          actors: '陈振霖',
          changci: '555'
        },
        {
          msg: require('@/assets/3.jpg'),
          name: '无名之辈',
          pingfen: '9.2',
          actors: '陈振霖',
          changci: '555'
        },
        {
          msg: require('@/assets/3.jpg'),
          name: '无名之辈',
          pingfen: '9.2',
          actors: '陈振霖',
          changci: '555'
        },
        {
          msg: require('@/assets/3.jpg'),
          name: '无名之辈',
          pingfen: '9.2',
          actors: '陈振霖',
          changci: '555'
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
    }
    p{
      font-size: 12px;
      span{
        font-size: 12px;
        color: goldenrod;
      }
    }
  }
  .czl_button{
     margin-left:auto;
     font-size: 12px;
     padding: 5px 10px;
     border-radius: 5px;
     background: blue;
     border: 0;
     color: #fff;
  }
  
}
</style>
