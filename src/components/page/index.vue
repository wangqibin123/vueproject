<template>
    <div class="title_warp">
      <p>
        <router-link to="/" tag="span">当前位置：首页 </router-link>
        <router-link v-for="(item,index) in matched" :key="index" :to="{path:item.path}" tag="span">
            <span  v-if="item.name!='/'">>{{item.name}}</span>
        </router-link>
      </p >
    </div>
</template>
<script>
export default {
    data(){
        return{
            matched:[]
        }
    },
    watch:{
        $route:{
            handler(value){
                this.matched=value.matched
            },
            immediate:true
        }
    }
}
</script>

<style lang="scss" scoped>
.title_warp{
width:100%;
padding:0 .2rem;
margin: .15rem 0;
box-sizing:border-box;
  p{
    width: 3.75rem;
    margin: 0 auto;
    span {
        margin-left: 0.2rem;
        font-size: .14rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: .07rem;
        letter-spacing: 0px;
        color: #888888;
    }
    .hang {
        margin-left: 0.05rem;
        font-family: PingFang-SC-Medium;
        font-size: .14rem;
        font-weight: normal;
        letter-spacing: 0px;
        color: #b0b0b0;
        }
    }
}
</style>