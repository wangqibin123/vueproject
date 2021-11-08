<template>
  <div>
    <div class="school">
      <div class="sch-header">
        <img src="@/assets/images/首页改1_107.gif" alt="" />
      </div>
      <div class="sch-content">
        <div class="sch-colleage">
          <img src="@/assets/images/首页改1_110.gif" alt="" />
          <span>北京市航空中学</span>
        </div>
        <div class="sch-colleage">
          <img src="@/assets/images/首页改1_113.gif" alt="" />
          <span>吉林大学</span>
        </div>
        <div class="sch-colleage" style="margin: 0.08rem 0">
          <img src="@/assets/images/首页改1_118.gif" alt="" />
          <span>大连海事大学</span>
        </div>
        <div class="sch-colleage" style="margin: 0.08rem 0">
          <img src="@/assets/images/首页改1_120.gif" alt="" />
          <span>渤海大学</span>
        </div>
        <div class="sch-colleage">
          <img src="@/assets/images/首页改1_125.gif" alt="" />
          <span>山东杏林航空大学</span>
        </div>
        <div class="sch-colleage">
          <img src="@/assets/images/首页改1_127.gif" alt="" />
          <span>南京市航空大学</span>
        </div>
      </div>
      <div class="sch-btn">
        <img src="@/assets/images/首页改1_131.gif" alt="" />
      </div>
    </div>
    <footer>
        <div>
            <img src="@/assets/images/首页改1_123.gif" alt="">
        </div>
        <div>
            <img src="@/assets/images/首页改1_12007 (2).gif" alt="">
        </div>
        <div>
            <img src="@/assets/images/首页改1_12007 (3).gif" alt="">
        </div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
   
  },
};
</script>
<style lang='scss' scoped>
.school {
  width: 3.54rem;
  min-height: 1rem;
  background: #fff;
  margin: 0.15rem auto 0;
  padding-bottom: 0.05rem;
  .sch-header {
    width: 100%;
    height: 0.55rem;
    img {
      width: 100%;
    }
  }
  .sch-content {
    width: 100%;
    min-height: 1rem;
    background: #fff;
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .sch-colleage {
      width: 1.65rem;
      height: 0.55rem;
      border-radius: 0.06rem;
      padding: 0.05rem 0 0.05rem 0.05rem;
      display: flex;
      align-items: center;
      border: 0.01rem solid #ccc;
      border-radius: 0.06rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
      span {
        font-size: 0.14rem;
        flex: 1;
        text-align: center;
        line-height: 0.5rem;
        white-space: nowrap;
        color: rgb(102, 102, 102);
      }
    }
  }
  .sch-btn {
    width: 3.31rem;
    height: 0.44rem;
    // background: red;
    margin: 0.2rem auto;
    img {
      width: 100%;
    }
  }
}
footer{
    width: 100%;
    height: .42rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    div{
        width: 33.2%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
