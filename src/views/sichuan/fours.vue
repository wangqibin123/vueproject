<template>
    <div>
        <!-- <Hea/> -->
        <Ban/>
        <Pages/>
        <All/>
    </div>
</template>
<script>
// import Hea from './fours/fours-header.vue'
import Ban from '@/views/sichuan/fours/four-lun.vue'
import Pages from "@/components/page/index.vue";
import All from '@/views/sichuan/fours/fourall.vue'
export default {
    components:{
        // Hea,
        Ban,
        Pages,
        All,
    }
}
</script>
<style lang="scss" scoped>

</style>