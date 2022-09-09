<template>
  <div id="app">
    <custom-citys></custom-citys>
    <Huakuai></Huakuai>
  </div>
</template>

<script>
import CustomCitys from './components/custom-citys.vue';
import Huakuai from './components/huakuai.vue';

export default {
  components: {
    CustomCitys,
    Huakuai
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
