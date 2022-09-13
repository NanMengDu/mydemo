<template>
  <div id="app">
    <custom-citys></custom-citys>
    <HuaKuai></HuaKuai>
    <!-- moment时间 -->
    <test-times></test-times>
    <!-- 面包屑 -->
    <Bread></Bread>
  </div>
</template>

<script>
import CustomCitys from './components/custom-citys.vue';
import testTimes from './components/test-times.vue';
import HuaKuai from './components/hua-kuai.vue';
import Bread from './components/bread.vue';

export default {
  components: {
    CustomCitys,
    testTimes,
    HuaKuai,
    Bread
},
  data() {
    return {
    }
  },
  created(){
    this.$bus.$on('send',data=>{
      console.log(data);
    })
  }
}
</script>

<style>
</style>
