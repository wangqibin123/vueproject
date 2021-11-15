<template>
    <div>
        <footer>
            <div>
                <a :href="'tel:'+'17513541518'">
                    <img src="@/assets/images/首页改1_123.gif" alt="">
                </a>
            </div>
            <div @click="hand">
                <img src="@/assets/images/首页改1_12007 (2).gif" alt="">
            </div>
            <router-link tag="div" to="/zaixianbaoming">
                <img src="@/assets/images/首页改1_12007 (3).gif" alt="">
            </router-link>
        </footer>
        <div v-if="boo" class="footer-conter">在线咨询</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            boo:false,
        }
    },  
    methods:{
        hand(){
            this.boo=!this.boo
        }
    }
}
</script>
<style lang="scss" scoped>
footer{
    width: 3.75rem;
    height: .42rem;
    background: #EAEAEA;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,0);
    display: flex;
    z-index: 9999999;
    justify-content: space-between;
    div{
        width: 33%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    
}
.footer-conter{
    width: 3.75rem;
    height: 50%;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: .42rem;
    z-index: 9999999999;
}
</style>