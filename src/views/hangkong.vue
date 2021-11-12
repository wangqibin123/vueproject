<template>
    <div class="warp">
        <Header />
        <Lun />
        <Title />
        <Video/>
        <footere />
    </div>
</template>
<script>
import Header from '@/components/header/header.vue'
import Lun from '@/views/hangkongs/lun.vue'
import Title from '@/views/hangkongs/title.vue'
import Video from '@/views/hangkongs/video_lun.vue'
import footere from '@/components/footer/index.vue'
export default {
    components:{
        Header,
        Lun,
        Title,
        Video,
        footere,
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