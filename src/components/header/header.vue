<template>
  <div class="wrap">
    <div class="inp">
      <span class="spn">欢迎来到紧缺应用技术技能型人才职业教育报考平台</span>
    </div>
    <div class="logo_body">
      <div class="logo">
        <img src="@/assets/images/首页改1_03.gif" alt="" />
      </div>
      <div class="menu">
        <img @click="btn()" src="@/assets/images/首页改1_05.gif" alt="" />
        <div class="txt" v-show="isloading">
          <router-link to="/Service" tag="p">VIP地勤专业</router-link>
          <router-link to="/hangkong" tag="p">航空学院</router-link>
          <router-link to="" tag="p">游龙海城专业</router-link>
          <router-link to="" tag="p">空乘专业</router-link>
          <router-link to="" tag="p">艺考生</router-link>
          <router-link to="" tag="p">招生要求</router-link>
          <router-link to="" tag="p">高铁乘务专业</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 data(){
     return {
         isloading:false
     }
 },
 methods:{
     btn(){
         if(this.isloading==true){
             this.isloading=false
         }else{
             this.isloading=true
         }
         
     }
 }
};
</script>

<style lang="scss" scoped>
.inp {
  width: 3.75rem;
  margin: 0 auto;
  height: 0.3rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
}
.spn {
  // width: 2.76rem;
  height: 0.12rem;
  
  font-family: PingFang-SC-Medium;
  font-size: 0.12rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0rem;
  color: #777777;
  padding-left: 0.13rem;
}
.logo_body {
  width: 3.75rem;
  height: 0.49rem;
  margin: 0 auto;

  background: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      width: 1.03rem;
      height: 0.29rem;
      padding: 0.1rem 0.1rem;
    }
  }
  .menu {
    position: relative;
    img {
      width: 0.3rem;
      height: 0.22rem;
      padding: 0.15rem;
    }
    .txt{
        // display: block;
        width: 1.5rem;
        height: 3.0rem;
        background:#eeeeee;
        z-index: 2;
        position: absolute;
        right: 0;
        top: .38rem;
    }
  }
}


</style>