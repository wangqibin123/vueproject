<template>
  <div class="age">
    <div class="age-header">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" alt="" />
    </div>
    <div class="age-text">
      <ul>
        <router-link to="/chuzhongsheng">
        <li>
          <div class="age-img">
            <img src="@/assets/images2/国际航空服务与管理_64.jpg" alt="" />
          </div>
          <div class="age-title">
            <p class="junior">初中生15岁+</p>
          </div>
        </li>
        </router-link>
        <router-link to="/gaozhongsheng">
        <li>
          <div class="age-img">
            <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
          </div>
          <div class="age-title">
            <p class="senior">高中生18岁+</p>
          </div>
        </li>
        </router-link>
      </ul>
      <ul>
        <router-link to="/sanxiaosheng">
        <li>
          <div class="age-img">
            <img src="@/assets/images2/国际航空服务与管理_69.jpg" alt="" />
          </div>
          <div class="age-title">
            <p class="cube">三校生18岁+</p>
          </div>
        </li>
        </router-link>
        <router-link to="/yishusheng">
        <li>
          <div class="age-img">
            <img src="@/assets/images2/国际航空服务与管理_68.jpg" alt="" />
          </div>
          <div class="age-title">
            <p class="art">艺考生18岁+</p>
          </div>
        </li>
        </router-link>
      </ul>
    </div>
    <div class="information_con_btm">
      <div class="btm_border">
        <span>查看更多资讯</span>
        <img src="@/assets/images/sou.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.age {
  height: 3.8rem;
  width: 3.55rem;
  background: #f9fafb;
  border-radius: 0.05rem;
  overflow: hidden;
  margin: auto;
  .age-header {
    height: 0.54rem;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .age-text {
    height: 2.7rem;
    padding: 0.1rem 0.42rem 0.1rem 0.42rem;
    box-sizing: border-box;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      li {
        height: 1.3rem;
        width: 1.1rem;
        .age-img {
          width: 1rem;
          height: 1.1rem;
          margin: auto;
          img {
            width: 100%;
          }
        }
        .age-title {
          p {
            font-family: MicrosoftYaHei-Bold;
            font-size: 0.17rem;
            font-weight: 700;
            line-height: 0.07rem;
            text-align: center;
          }
          .junior {
            color: #33cc99;
          }
          .senior {
            color: #0099ff;
          }
          .cube {
            color: #ff6666;
          }
          .art {
            color: #3399cc;
          }
        }
      }
    }
  }
  .information_con_btm {
      height: .44rem;
      width: 3.32rem;
      margin: auto;
    .btm_border {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: solid 1px #1776af;
      text-align: center;
      line-height: 0.44rem;
      span {
        font-size: 0.16rem;
        color: #1776af;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
      }
      img {
        width: 0.16rem;
        height: 0.16rem;
        margin-left: 0.04rem;
        vertical-align: middle;
        margin-bottom: 0.02rem;
      }
    }
    :hover {
      background: #3f555f;
    }
    :hover > span {
      color: #ffffff;
      font-size: 0.16rem;
      font-family: PingFang-SC-Medium;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
    }
  }
}
</style>