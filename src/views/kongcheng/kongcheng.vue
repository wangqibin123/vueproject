<template>
  <div class="int">
    <div class="int_con">
      <img src="@/assets/images/首页改1_27.gif" />
    </div>
    <div class="page">
      <p>
        当前位置：
        <router-link to="/">
          <span class="shouye">首页</span>
        </router-link>>空乘专业
      </p>
    </div>
    <!-- 专业介绍 -->
    <div class="Introduction">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="Introduction_con">
        <img src="@/assets/images/首页改1_31.gif" />
        -->
        <div class="number">
          <div class="left">
            <img src="@/assets/images2/航空专业详情页_03.png" alt />
          </div>
          <div class="right">
            <span class="orange">自我分析：</span>
            <span>本人的个性比较随和乐观，和同事相处和睦，与他人能较</span>
            <span>
              本人的个性比较随和乐观，和同事相处和睦，与他人能较
              好地进行沟通交流与合作。在工作中能认认真真积极参与。
            </span>
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/images2/航空专业详情页_06.png" alt />
          </div>
          <div class="right">
            <span class="blue">发展方向：</span>
            <span>
              努力做学生学_的合作者、参与者和引导者，做学生的知心
              努力做学生学_的合作者、参与者和引导者，做学生的知心
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 专业优势 -->
    <div class="Introduction">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="Introduction_con">
        <img src="@/assets/images/首页改1_31.gif" />
        <div class="number">
          <div class="left">
            <img src="@/assets/images2/航空专业详情页_03.png" alt />
          </div>
          <div class="right">
            <span class="orange">自我分析：</span>
            <span>本人的个性比较随和乐观，和同事相处和睦，与他人能较</span>
            <span>
              本人的个性比较随和乐观，和同事相处和睦，与他人能较
              好地进行沟通交流与合作。在工作中能认认真真积极参与。
            </span>
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/images2/航空专业详情页_06.png" alt />
          </div>
          <div class="right">
            <span class="blue">发展方向：</span>
            <span>
              努力做学生学_的合作者、参与者和引导者，做学生的知心
              努力做学生学_的合作者、参与者和引导者，做学生的知心
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 职业规划 -->
    <div class="Introduction">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="Introduction_con">
        <img src="@/assets/images/首页改1_31.gif" />
        <div class="number">
          <div class="left">
            <img src="@/assets/images2/航空专业详情页_03.png" alt />
          </div>
          <div class="right">
            <span class="orange">自我分析：</span>
            <span>本人的个性比较随和乐观，和同事相处和睦，与他人能较</span>
            <span>
              本人的个性比较随和乐观，和同事相处和睦，与他人能较
              好地进行沟通交流与合作。在工作中能认认真真积极参与。
            </span>
          </div>
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/images2/航空专业详情页_06.png" alt />
          </div>
          <div class="right">
            <span class="blue">发展方向：</span>
            <span>
              努力做学生学_的合作者、参与者和引导者，做学生的知心
              努力做学生学_的合作者、参与者和引导者，做学生的知心
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作单位 -->
    <div class="hezuo">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="hezuo_con">
        <div class="hezuo_img">
          <img src="@/assets/images2/国际航空服务与管理_79.jpg" />
          <img src="@/assets/images2/国际航空服务与管理_79.jpg" />
        </div>
        <div class="hezuo_img">
          <img src="@/assets/images2/国际航空服务与管理_79.jpg" />
          <img src="@/assets/images2/国际航空服务与管理_79.jpg" />
        </div>
        <div class="hezuo_img">
          <img src="@/assets/images2/国际航空服务与管理_79.jpg" />
          <img src="@/assets/images2/国际航空服务与管理_79.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.int {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .int_con {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    img {
      width: 3.75rem;
      height: 1.5rem;
    }
  }
  .page {
    height: 0.53rem;
    width: 3.75rem;
    margin: auto;
    padding: 0.15rem 0.2rem;
    color: #888888;
    font-size: 0.14rem;
    box-sizing: border-box;
    .shouye {
      color: #888888;
    }
  }
  .Introduction {
    width: 3.55rem;
    border-radius: 0.05rem;
    margin-bottom: 0.15rem;
    background: white;
    img {
      width: 3.35rem;
      height: 0.54rem;
      margin-bottom: 0.1rem;
    }
    .Introduction_con {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        width: 3.35rem;
        height: 1.2rem;
        margin-bottom: 0.1rem;
      }
      .number {
        width: 3.14rem;
        margin: 0.15rem 0.1rem;
        padding-bottom: 0.15rem;
        border-bottom: 1px dotted rgb(153, 153, 153);
        overflow: hidden;
        .left {
          float: left;
          width: 0.51rem;
          img {
            width: 0.68rem;
            height: 0.68rem;
          }
        }
        .right {
          width: 2.53rem;
          float: left;
          padding-left: 0.1rem;
          font-size: 0.12rem;
          .orange {
            color: rgb(255, 51, 0);
          }
          .blue {
            color: rgb(0, 102, 153);
          }
          .green {
            color: rgb(0, 136, 24);
          }
          .pink {
            color: rgb(126, 0, 146);
          }
        }
      }
    }
  }
  .hezuo {
    width: 3.55rem;
    border-radius: 0.05rem;
    margin-bottom: 0.15rem;
    background: white;
    img {
      width: 100%;
      margin-bottom: 0.01rem;
    }
    .hezuo_con {
      width: 95%;
      margin: 0.1rem 0.1rem 0 0.1rem;
      .hezuo_img {
        display: flex;
        justify-content: space-between;
        img {
          width: 1.62rem;
          height: 1.05rem;
          margin-bottom: 0.12rem;
        }
      }
    }
  }
}
</style>