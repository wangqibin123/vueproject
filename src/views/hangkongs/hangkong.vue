<template>
    <div>
        <Lun  v-if="boo2"/>
        <headerlun v-if="boo"/>
        <page />
        <router-view></router-view>
    </div>
</template>
<script>
import Lun from '@/views/hangkongs/lun.vue'
import page from "@/components/page/index.vue";
import Headerlun from '@/components/header-lun/header_lun.vue';
export default {
    components:{
        Lun,
        page,
        Headerlun,
    },
    data(){
        return{
            boo:false,
            boo2:true
        }
    },
    watch:{
        $route:{
            handler(value){
                if(value.name=='三校生'){
                    this.boo=true
                    this.boo2=false
                }else{
                    this.boo=false
                    this.boo2=true
                }
            },
            immediate:true
        }
    }
}
</script>

<style lang='scss' scoped>


</style>