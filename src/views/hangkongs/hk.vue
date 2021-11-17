<template>
    <div>
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
        foot
    }
}
</script>