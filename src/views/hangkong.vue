<template>
    <div class="warp">
        <Header />
        <swiperBanner/>
        <footere />
    </div>
</template>
<script>
import Header from '@/components/header/header.vue'
import swiperBanner from '@/views/Aviation/swiperbanner.vue'



import footere from '@/components/footer/index.vue'

export default {
    components:{
        Header,
        swiperBanner,
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