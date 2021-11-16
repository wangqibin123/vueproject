<template>
    <div>
        <Lun/>
        <Pages/>
        <Down/>
        <Up/>
    </div>
</template>

<script>
import Lun from '@/views/hangkongs/student/Thschool/yks_lun.vue'
import Pages from '@/views/hangkongs/student/Thschool/pages.vue'
import Up from '@/views/hangkongs/student/Thschool/ches.vue'
import Down from '@/views/hangkongs/student/Thschool/yks.vue'
export default {
   components:{
       Lun,
       Pages,
       Up,
       Down
   }
}
</script>