<template>
    <div>
        <div :to="{ path: '/' }" @click="foo('首页')">首页</div>
        <div>{{nameData}}</div>
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
        }
    }
}
</script>