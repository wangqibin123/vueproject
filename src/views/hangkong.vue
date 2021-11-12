<template>
    <div class="warp">
        <Header />
        <Prospects/>
        <footere />
    </div>
</template>
<script>
import Header from '@/components/header/header.vue'



import Prospects from '../views/homes/Five/prospects.vue'

import footere from '@/components/footer/index.vue'

export default {
    components:{
        Header,
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