<template>
    <div>
        <Lun/>
        <Pages/>
        <Down/>
        <Up/>
    </div>
</template>

<script>
import Lun from '@/views/Thschool/yks_lun.vue'
import Pages from '@/views/Thschool/pages.vue'
import Up from '@/views/Thschool/ches.vue'
import Down from '@/views/Thschool/yks.vue'
export default {
   components:{
       Lun,
       Pages,
       Up,
       Down
   }
}
</script>