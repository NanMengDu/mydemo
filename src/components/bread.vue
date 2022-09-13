<template>
    <div>
        <div :to="{ path: '/' }" @click="foo('首页')">首页</div>
        <!-- <div>{{nameData}}</div> -->
{{num}}
    </div>
</template>

<script>
export default {
    name: 'bread-w',
    data() {
        return {
            nameData: ''
        }
    },
    methods: {
        foo(i) {
            console.log(i);
            this.nameData = i
            this.$bus.$emit('see',true)
        }
    },
    computed:{
        num(){
            return this.$store.state.number
        }
    }
}
</script>