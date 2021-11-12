<template>
    <div class="warp">
        <Header />
        <Lun />
        <Title />
        <Video/>

        <Prospects/>
        <swiperBanner/>

        <footere />
    </div>
</template>
<script>
import Header from '@/components/header/header.vue'

import Lun from '@/views/hangkongs/lun.vue'
import Title from '@/views/hangkongs/title.vue'
import Video from '@/views/hangkongs/video_lun.vue'

import swiperBanner from '@/views/Aviation/swiperbanner.vue'


import Prospects from '../views/homes/Five/prospects.vue'


import footere from '@/components/footer/index.vue'
export default {
    components:{
        Header,
        Lun,
        Title,
        Video,
        swiperBanner,
        footere,
        Prospects
    }
}
</script>
<style lang='scss' scoped>
.warp{
    background: #eaeaea;
    width: 100%;
    padding: 0 0 .42rem 0;
}

</style>