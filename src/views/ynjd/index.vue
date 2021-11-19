<template>
    <div class="signup_warp">
        <div class="avi_nav">
            <p>
                <span>当前位置：</span>
                <router-link to='/'>  <span id="shou">首页 > </span></router-link>
                <span>在线报名</span>
            </p>
        </div>
        <Information />
    </div>
</template>
<script>
import Information from '@/views/homes/hottopics/Information.vue'

export default {
    components:{
        Information
    }
}
</script>
<style lang="scss" scoped>
.signup_warp {
  width: 3.75rem;
  background: #eaeaea;
  .avi_nav {
    width: 3.75rem;
    height: 0.44rem;
    background: #fff;
    margin-bottom:.1rem ;
    p {
      line-height: 0.44rem;
      margin-left: 0.2rem;
      color: #888;
      font-size: 0.14rem;
      span:nth-child(3) {
        margin: 0 0.03rem;
      }
      #shou{
          color: #888;
      }
    }
  }
}
</style>
