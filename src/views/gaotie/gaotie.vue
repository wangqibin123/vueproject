<template>
    <div class="high_speed">
        <Lun />
        <page/>
        <High/>
        <Major/>
        <Plan/>
        <Unit/>
    </div>
</template>

<script>
import Lun from '@/views/hangkongs/lun.vue'

import High from "@/views/gaotie/Rail/High.vue"
import Major from "@/views/gaotie/Rail/major.vue"
import Plan from "@/views/gaotie/Rail/plan.vue"
import Unit from "@/views/gaotie/Rail/unit.vue"

import page from "@/components/page/index.vue";


export default{
    components:{
        Lun,
        High,
        Major,
        Plan,
        Unit,
        page
    }
}
</script>

<style lang="scss" scoped>
    .high_speed{
        background: #eaeaea;
        width: 100%;
        // padding: 0 0 .42rem 0;
    }
</style>