<template>
    <div>
        <HeaderLun/>
        <page />
        <major />
        <aviation />
        <HotTopics />
        <Information />
        <Career />
        <Five />
        <foot />
    </div>
</template>
<script>
import HeaderLun from "@/components/header-lun/header_lun.vue";

import page from '@/components/page/index.vue'
import major from '@/views/homes/major/major.vue'
import aviation from '@/views/homes/major/aviation.vue'

import HotTopics from '@/views/homes/hottopics/HotTopics.vue'
import Information from '@/views/homes/hottopics/Information.vue'
import Career from '@/views/homes/StudentCareer/Career.vue'
import Five from '@/views/homes/Five/index.vue'

import foot from '@/views/homes/foot/index.vue'


export default {
    components:{
        HeaderLun,
        page,
        major,
        aviation,
        HotTopics,
        Information,
        Career,
        Five,
        foot,
    }
}
</script>

<style lang='scss' scoped>

</style>
