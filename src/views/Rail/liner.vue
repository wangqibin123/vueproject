<template>
    <div class="title_warp">
      <p>
        <router-link to="/" tag="span">当前位置：首页 ></router-link>
        <router-link to="/gaotie" tag="span" class="hang"
          >高铁乘务专业</router-link
        >
      </p>
    </div>
</template>
<style lang="scss" scoped>
.title_warp {
    width: 100%;
    padding: 0.15rem 0;
    p {
      width: 3.75rem;
      margin: 0 auto;
      span {
        margin-left: 0.2rem;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 7px;
        letter-spacing: 0px;
        color: #888888;
      }
      .hang {
        margin-left: 0.05rem;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #b0b0b0;
      }
    }
  }
</style>