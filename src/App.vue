<template>
  <div id="app">
    <custom-citys></custom-citys>
    <HuaKuai></HuaKuai>
    <test-times></test-times>
  </div>
</template>

<script>
import CustomCitys from './components/custom-citys.vue';
import testTimes from './components/test-times.vue';
import HuaKuai from './components/hua-kuai.vue';

export default {
  components: {
    CustomCitys,
    testTimes,
    HuaKuai
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
