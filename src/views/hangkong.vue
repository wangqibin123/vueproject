<template>
    <div class="warp">
        <Header />
        <footere />
    </div>
</template>
<script>
import Header from '@/components/header/header.vue'




import footere from '@/components/footer/index.vue'

export default {
    components:{
        Header,
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