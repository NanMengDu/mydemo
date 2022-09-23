<template>
  <div id="app">
    <custom-citys></custom-citys>
    <HuaKuai></HuaKuai>
    <!-- moment时间 -->
    <test-times></test-times>
    <!-- 面包屑 -->
    <Bread></Bread>
    {{flag}}

    <!-- 滑动 -->
    <Transition></Transition>
    <!-- 动态背景图 -->
    <!-- <Mycanvas></Mycanvas> -->
    <!-- 地球 -->
    <!-- <Earth></Earth> -->
    <Tuozhuai></Tuozhuai>
  </div>
</template>

<script>
import CustomCitys from './components/custom-citys.vue';
import testTimes from './components/test-times.vue';
import HuaKuai from './components/hua-kuai.vue';
import Bread from './components/bread.vue';
import Transition from './components/transition.vue';
import Tuozhuai from './components/tuozhuai.vue';
// import Mycanvas from './components/mycanvas.vue';
// import Earth from './components/earth.vue';
export default {
  components: {
    CustomCitys,
    testTimes,
    HuaKuai,
    Bread,
    Transition,
    Tuozhuai
},
  data() {
    return {
      flag:false
    }
  },
  mounted(){
    this.$bus.$on('send',data=>{
      console.log(data);
    })
    this.$bus.$on('see',data=>{
      this.flag = data
    })
  }
}
</script>

