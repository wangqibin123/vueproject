<template>
    <div>
        
        <Lun />
        <Title />
        <Video/>
        <Show/>
        <swiperBanner/>
        <Age/>



        <Prospects/>
        <foot />



        
    </div>
</template>
<script>
import Show from '@/views/Aviation/show.vue'
import Age from '@/views/Aviation/age.vue'

import Lun from '@/views/hangkongs/lun.vue'
import Title from '@/views/hangkongs/title.vue'
import Video from '@/views/hangkongs/video_lun.vue'

import swiperBanner from '@/views/Aviation/swiperbanner.vue'


import Prospects from '../views/homes/Five/prospects.vue'
import foot from '@/views/homes/foot/index.vue'


export default {
    components:{
        Show,
        Age,
        Lun,
        Title,
        Video,
        swiperBanner,
        Prospects,
        foot
    }
}
</script>
<style lang='scss' scoped>


</style>