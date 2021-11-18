<template>
    <div>
        <lun/>
        <Pages/>
        
        <All/>
        <!-- <indexT/> -->
        
    </div>
</template>
<script>
import lun from '@/components/header-lun/header_lun.vue'
import Pages from "@/components/page/index.vue";
import All from '@/views/sichuan/fours/fourall.vue'
// import indexT from '@/views/sichuan/index1.vue'
export default {
    components:{
        lun,
        Pages,
        All,
        // indexT
    }
}
</script>
<style lang="scss" scoped>

</style>