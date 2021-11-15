<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <footere />
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";

import footere from '@/components/footer/footer.vue'

export default {
    components:{
        Header,
        footere,
    }
}
</script>

<style lang="scss" scoped>
#app{
    background: #eaeaea;
    width: 3.75rem;
    margin: 0 auto;
    padding: 0 0 .42rem 0;
}
</style>