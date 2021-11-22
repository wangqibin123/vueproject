<template>
  <div class="major">
    <div class="major-header">
      <img src="@/assets/img/shouye/首页改1_18.gif" alt="" />
    </div>
    <div class="major-content">
      <ul>
        <li>
          <router-link to="/hangkong">
            <img src="@/assets/img/shouye/国际航空服务与管理.png" alt="" />
            </router-link>
        </li>
        <li>
          <img src="@/assets/img/shouye/互联网金融与管理.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/shouye/人工智能与机器人.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/shouye/网络新媒体运营.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/shouye/新能源汽车.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.major {
  width: 3.55rem;
  height: 6.4rem;
  background: #fff;
  border-radius: 0.1rem;
  overflow: hidden;
  margin: auto;
  box-shadow: 1px 2px 2px 1px rgba(228, 228, 228, 0.76);
  .major-header {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
    }
  }
  .major-content {
    ul {
      li {
        height: 1.05rem;
        width: 3.35rem;
        margin: auto;
        border-radius: 0.1rem;
        overflow: hidden;
        margin-top: 0.1rem;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>