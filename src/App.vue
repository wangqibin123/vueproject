<template>
  <div id="app" class="app" :class="{'act':boo}">
    <Header  v-if="boo2" />
    <Header2  v-if="boo"/>
    <router-view class="a"></router-view>
    <footere />
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import Header2 from "@/components/header/header2.vue";

import footere from '@/components/footer/footer.vue'

export default {
    components:{
        Header,
        Header2,
        footere,
    },
    data(){
        return{
            boo:false,
            boo2:true
        }
    },
    watch:{
        $route:{
            handler(value){
                if(value.name=='四川外国语大学简介'){
                    this.boo=true
                    this.boo2=false
                }else{
                    this.boo=false
                    this.boo2=true
                }
            },
            immediate:true
        }
    },
    created() {
    document.documentElement.addEventListener(
      "touchstart",
      function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
    // 禁止双击放大
    let lastTouchEnd = 0;
    document.documentElement.addEventListener(
      "touchend",
      function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      { passive: false }
    );
  },
}
</script>

<style lang="scss" scoped>
.app{
    background: #eaeaea;
    width: 3.75rem;
    margin: 0 auto;
    padding: .8rem 0 .42rem 0;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    // .a{
    //     flex: 1;
    // }
}
.act{
    padding: .53rem 0 .42rem 0;
}
</style>