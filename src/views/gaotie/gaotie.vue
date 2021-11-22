<template>
    <div class="high_speed">
         <div class="lun_warp">
        <div class="lun_con">
            <img src="@/assets/img/高铁乘务专业/高铁乘务专业.png" alt="">
        </div>
    </div>
       
        <page/>
        <High/>
        <Major/>
        <Plan/>
        <Unit/>
    </div>
</template>

<script>
import High from "@/views/gaotie/Rail/High.vue"
import Major from "@/views/gaotie/Rail/major.vue"
import Plan from "@/views/gaotie/Rail/plan.vue"
import Unit from "@/views/gaotie/Rail/unit.vue"

import page from "@/components/page/index.vue";


export default{
    components:{
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
    .lun_warp{
        width: 100%;
        height: 1.50rem;
        .lun_con{
            width: 3.75rem;
            height: 1.50rem;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

</style>