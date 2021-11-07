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
//李宗旋
import Header from '@/views/header/header.vue'
//李艺圆
import page from '@/views/page/page.vue'
import major from '@/views/major/major.vue'
import aviation from '@/views/major/aviation.vue'
//赵黎明
import HotTopics from '@/views/hottopics/HotTopics.vue'
import Information from '@/views/hottopics/Information.vue'
import Career from '@/views/StudentCareer/Career.vue'
import Five from '@/views/Five/index.vue'



//王棋彬
import footere from '@/views/footer/index.vue'

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
