<template>
    <div class="high_speed">
        <Lun />
        <Liner/>
        <High/>
        <Major/>
        <Plan/>
        <Unit/>
    </div>
</template>

<script>
import Lun from '@/views/hangkongs/lun.vue'
import Liner from "@/views/gaotie/Rail/liner.vue"
import High from "@/views/gaotie/Rail/High.vue"
import Major from "@/views/gaotie/Rail/major.vue"
import Plan from "@/views/gaotie/Rail/plan.vue"
import Unit from "@/views/gaotie/Rail/unit.vue"

export default{
    components:{
        Lun,
        Liner,
        High,
        Major,
        Plan,
        Unit,
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