<template>
    <div class="signup_warp">
        <div class="avi_nav">
            <p>
                <span>当前位置：</span>
                <router-link to='/'>  <span id="shou">首页 > </span></router-link>
                <span>在线报名</span>
            </p>
        </div>
         <div class="information_warp">
        <div class="information_con">
            <div class="information_con_top">
                <img src="@/assets/img/公共/疑难解答_03.jpg" alt="">
            </div>
            <div class="information_con_cen">
                <ul class="btm_list">
                    <li>
                        <a href="#">1、39岁的小伙子,就发生了发颤,怎...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">2、市北市民留言咨询这些问题,官...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">3、美供应链受阻问题雪上加霜</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">4、篮网有能力解决他们的问题度...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">5、记者实测快递企业智能客服:回...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">6、养老金有哪些渠道可以获得?有...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">7、怎么样买保险才是最合理的?咱...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">8、全面建成小康社会的重要举措...</a>
                        <p>2021.10.15</p>
                    </li>
                    <li>
                        <a href="#">9、摩根士丹利重磅报告:中国经济...</a>
                        <p>2021.10.15</p>
                    </li>
                </ul>
            </div>
            <div class="information_con_btm">
                <div class="btm_border">
                    <span>查看更多资讯</span>
                    <img src="@/assets/img/公共/sou.png" alt="">
                </div>
            </div>
        </div>
    </div>
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
