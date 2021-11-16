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
import Liner from "@/views/Rail/liner.vue"
import High from "@/views/Rail/High.vue"
import Major from "@/views/Rail/major.vue"
import Plan from "@/views/Rail/plan.vue"
import Unit from "@/views/Rail/unit.vue"

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