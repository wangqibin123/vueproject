<template>
    <div class="warp">
        <Header />

        <page />
        <major />
        <aviation />

        <HotTopics />
        <Information />

        <Career />

        <Five />

        <footere />
        
    </div>
    
</template>
<script>
import Header from '@/components/header/header.vue'


import page from '@/views/homes/page/page.vue'
import major from '@/views/homes/major/major.vue'
import aviation from '@/views/homes/major/aviation.vue'


import HotTopics from '@/views/homes/hottopics/HotTopics.vue'
import Information from '@/views/homes/hottopics/Information.vue'
import Career from '@/views/homes/StudentCareer/Career.vue'
import Five from '@/views/homes/Five/index.vue'


import footere from '@/components/footer/index.vue'

export default {
    components:{
        Header,
        page,
        major,
        aviation,
        HotTopics,
        Information,
        Career,
        Five,
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
