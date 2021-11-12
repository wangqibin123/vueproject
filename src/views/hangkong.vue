<template>
    <div class="warp">
        <Header />
        <Show/>
        <Age/>
        <footere />
    </div>
</template>
<script>
import Header from '@/components/header/header.vue'
import Show from '@/views/aviation/show.vue'
import Age from '@/views/aviation/age.vue'




import footere from '@/components/footer/index.vue'

export default {
    components:{
        Header,
        Show,
        Age,
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