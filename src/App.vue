<template>
  <div id="app">
    <custom-citys></custom-citys>
  </div>
</template>

<script>
import CustomCitys from './components/custom-citys.vue';

export default {
  components: {
    CustomCitys
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
