<template>
  <div>
    <Header  msg='我的喵喵'/>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name : 'Login',
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

<style scoped>

</style>
