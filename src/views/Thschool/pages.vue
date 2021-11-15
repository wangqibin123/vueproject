<template>
  <div class="page">
    <p>
      <router-link to="/" tag="span">当前位置：首页 ></router-link>
      <router-link to="/hangkong" tag="span" class="hang">航空学院 ></router-link>
      <router-link to="/sanxiaosheng" tag="span" class="hang">艺考生</router-link>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.page {
  width: 100%;
  margin: auto;
  padding: .15rem 0;
  color: #888888;
  font-size: 0.14rem;
  box-sizing: border-box;
  p{
      padding: 0 .1rem;
  span {
    // margin-left: 0.2rem;
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