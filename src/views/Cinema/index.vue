<template>
  <div>
    <Header  msg='喵喵最新'/>
    			<div class="content">
				<div class="movie_menu">
					<router-link tag='div' class="city_name" to="/cinema/cinemas"> 
						<span>全城</span><i class="iconfont icon-xiaoxi"></i>
					</router-link>
          <router-link tag='div' class="city_name" to="/cinema/cinemas"> 
						<span>品牌</span><i class="iconfont icon-xiaoxi"></i>
					</router-link>
          <router-link tag='div' class="city_name" to="/cinema/cinemas"> 
						<span>特色</span><i class="iconfont icon-xiaoxi"></i>
					</router-link>
				</div>
				<keep-alive>
					<router-view>
					</router-view>
				</keep-alive>
			</div>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name : 'Cinema',
  components : {
    Header,
    TabBar
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.content{

	.movie_menu{
		display: flex;
		text-align: center;
		line-height: 2rem;
		height: 2rem;
		.router-link-active{
      color: #ef4239; border-bottom: 2px solid #ef4239;
    }
		div{
			border-bottom: 2px solid #ebe8e3;
			flex: 1;
			font-size: 0.75rem;
			span{
				font-size: 0.75rem;
			}
			i{
				font-size: 0.75rem;
			}
		}
		.search_i{
			flex: 0.5;
		}
		// .search_i.router-link-active{	
    //   color: #ef4239;border-bottom: 2px solid #ebe8e3;
		// }
	}
}
</style>
