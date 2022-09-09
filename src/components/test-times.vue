<template>
    <div>
        {{dataTime}}
    </div>
</template>

<script>
import moment from 'moment'
export default {
    // name:'test-times',
    data(){
        return{
            dataTime:''
        }
    },
    created(){
        this.geTime()
    },
    methods:{
        geTime(){
            setInterval(() => {
                this.dataTime = moment().format("yyyy-MM-DD HH:mm:ss");
            }, 1000);
        }
    }
}
</script>