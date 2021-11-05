<template>
    <div>
        <Career/>
        <router-view></router-view>
    </div>
    
</template>
<script>
import Career from '../views/StudentCareer/Career.vue'
export default {
    components:{
        Career
    }
}
</script>

<style lang='scss' scoped>

</style>
