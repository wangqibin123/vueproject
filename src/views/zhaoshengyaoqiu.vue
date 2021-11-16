<template>
  <div>
    <HeaderLun/>
    <div class="title_warp">
      <p>
        <router-link to="/" tag="span">当前位置：首页 ></router-link>
        <router-link to="/zhaoshengyaoqiu" tag="span" class="hang">招生要求</router-link>
      </p >
    </div>
    <div class="people">
        <div v-for='item in 9' :key="item"><img src="@/assets/images2/国际航空服务与管理_46.jpg" alt=""></div>
    </div>
    <Major/>
    <Enroll/>
    <Environment/>
  </div>
</template>

<script>
import HeaderLun from "@/views/homes/header-lun/header_lun.vue";
import Major from '@/views/requirement/major.vue';
import Enroll from '@/views/requirement/enroll.vue';
import Environment from '@/views/requirement/environment.vue';
export default {
  components: {
    HeaderLun,
    Major,
    Enroll,
    Environment
  },
};


</script>
<style lang="scss" scoped>
.title_warp{width:100%;padding:0 .2rem;margin: .15rem 0;box-sizing:border-box;
  p{width: 3.75rem;margin: 0 auto;
    span {margin-left: 0.2rem;font-size: .14rem;font-weight: normal;font-stretch: normal;line-height: .07rem;letter-spacing: 0px;color: #888888;}
    .hang {margin-left: 0.05rem;font-family: PingFang-SC-Medium;font-size: .14rem;font-weight: normal;letter-spacing: 0px;color: #b0b0b0;}
    }
}
.people{
    width: 3.55rem;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    justify-content: space-around;
    padding-bottom: .02rem;
    margin: 0 auto;
    div{
        width: 1rem;
        height: .85rem;
        background: red;
        float: left;
        img{
            width: 100%;
            height: 100%;
        }
        margin: .1rem 0 .08rem;
    }
}
</style>