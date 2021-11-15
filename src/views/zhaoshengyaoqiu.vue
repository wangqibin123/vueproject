<template>
  <div>
    <div class="title_warp">
      <p>
        <router-link to="/" tag="span">当前位置：首页 ></router-link>
        <router-link to="/zhaoshengyaoqiu" tag="span" class="hang">招生要求</router-link>
      </p >
    </div>
    <Information style="padding-top:0.15rem" />
  </div>
</template>

<script>
import Information from "@/views/homes/hottopics/Information.vue";
export default {
  components: {
    Information,
  },
};
</script>
<style lang="scss" scoped>
.title_warp{width:100%;padding:0.15rem 0;background:#fff;
  p{width: 3.75rem;margin: 0 auto;
    span {margin-left: 0.2rem;font-size: .14rem;font-weight: normal;font-stretch: normal;line-height: .07rem;letter-spacing: 0px;color: #888888;}
    .hang {margin-left: 0.05rem;font-family: PingFang-SC-Medium;font-size: .14rem;font-weight: normal;letter-spacing: 0px;color: #b0b0b0;}
    }
}
</style>