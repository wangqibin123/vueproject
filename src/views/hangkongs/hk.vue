<template>
    <div>
       
    <div class="lun_warp">
        <div class="lun_con">
            <img src="@/assets/images2/banner/航空专业.jpg" alt="">
        </div>
    </div>
    <page />
        <Video/>
        <Show/>
        <swiperBanner/>
        <Age/>
        <Prospects/>
        <foot />
    </div>
</template>
<script>
import Show from '@/views/hangkongs/Aviation/show.vue'
import Age from '@/views/hangkongs/Aviation/age.vue'
import page from "@/components/page/index.vue";


import Video from '@/views/hangkongs/video_lun.vue'

import swiperBanner from '@/views/hangkongs/Aviation/swiperbanner.vue'


import Prospects from '@/views/hangkongs/prospects.vue'
import foot from '@/views/homes/foot/index.vue'


export default {
    components:{
        Show,
        Age,
        Video,
        swiperBanner,
        Prospects,
        foot,
        page
    }
}
</script>
<style lang="scss" scoped>
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