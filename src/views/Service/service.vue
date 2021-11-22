<template>
  <div class="aservice">
     <div class="int_con">
      <img src="@/assets/img/vip地勤/vip地勤专业.jpg" />
    </div>
    <!-- <div class="aservice_con">
          <img src="@/assets/images/首页改1_27.gif" />
    </div>-->
    <page />
    <!-- 专业介绍 -->
    <div class="Introduction">
      <img src="@/assets/img/公共/专业介绍_03.jpg" />
      <div class="Introduction_con">
        <img src="@/assets/img/vip地勤/vip地勤专业_03.png" />
        <div class="in_xuxian">
          <div class="xuxian_text">
            &nbsp;&nbsp;&nbsp;&nbsp; 地勤是航空服务专业，该专业主要课程民航概论、
            航空市场营销、机场服务概论、航空运输地理、航空服务礼仪概论、
            民航安全与应急处理、民航服务心理学、民航专业英语、航空服务技能培训等。
          </div>
        </div>
        <div class="in_img">
          <img src="@/assets/公共/航空专业详情页_04.png" />
        </div>
        <div class="number">
          <div class="left">
            <img src="@/assets/img/公共/航空专业详情页_03.png" alt />
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
          <img src="@/assets/img/公共/航空专业详情页_06.png" alt="" />
        </div>
        <div class="right">
          <span class="blue">发展方向：</span>
          <span>努力做学生学_的合作者、参与者和引导者，做学生的知心
努力做学生学_的合作者、参与者和引导者，做学生的知心</span>
          
          
        </div>
      </div>
      </div>
    </div>
    <!-- 专业优势 -->
    <div class="advantage">
      <img src="@/assets/img/公共/专业优势_03.jpg" />
      <div class="advantage_con">
        <img src="@/assets/img/vip地勤/vip地勤专业_06.png" />
        <Explain />
      </div>
    </div>
    <!-- 职业规划 -->
    <div class="Introduction">
      <img src="@/assets/img/公共/职业规划_03.jpg" />
      <div class="Introduction_con">
        <img src="@/assets/img/vip地勤/vip地勤专业_08.png" />
        <div class="in_xuxian">
          <div class="xuxian_text">
            &nbsp;&nbsp;&nbsp;&nbsp; 地勤是航空服务专业，该专业主要课程民航概论、
            航空市场营销、机场服务概论、航空运输地理、航空服务礼仪概论、
            民航安全与应急处理、民航服务心理学、民航专业英语、航空服务技能培训等。
          </div>
        </div>
      </div>
    </div>
    <!-- 合作单位 -->
    <div class="hezuo">
      <img src="@/assets/img/公共/合作单位_03.jpg" />
      <div class="hezuo_con">
        <div class="hezuo_img">
          <img src="@/assets/img/公共/vip地勤专业_10.png" />
          <img src="@/assets/img/公共/vip地勤专业_12.png" />
        </div>
        <div class="hezuo_img">
          <img src="@/assets/img/公共/vip地勤专业_15.png" />
          <img src="@/assets/img/公共/vip地勤专业_16.png" />
        </div>
        <div class="hezuo_img">
          <img src="@/assets/img/公共/vip地勤专业_19.png" />
          <img src="@/assets/img/公共/vip地勤专业_20.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Explain from "@/components/explain/explain.vue";
import page from "@/components/page/index.vue";

export default {
  components: {
    page,
    Explain,
  },
  
};
</script>

<style lang="scss" scoped>
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
.aservice {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .aservice_con {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    img {
      width: 3.75rem;
      height: 1.5rem;
      background: yellow;
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
      .in_xuxian {
        width: 3.3rem;
        height: 0.7rem;
        border: 0.02rem dotted #999999;
        border-radius: 0.15rem;
        margin-bottom: 0.1rem;
        .xuxian_text {
          width: 3.04rem;
          height: 0.53rem;
          font-size: 0.11rem;
          color: #333333;
          line-height: 0.18rem;
          margin: 0.1rem 0.1rem 0.1rem 0.1rem;
          overflow: hidden;
        }
      }
      .in_img {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 0.15rem;
          height: 0.09rem;
        }
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
      width: .68rem;
      height: 0.68rem;
    }
  }
  .right {
    width: 2.53rem;
    float: left;
    padding-left: .1rem;
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
  .advantage {
    width: 3.55rem;
    border-radius: 0.05rem;
    margin-bottom: 0.15rem;
    background: white;
    img {
      width: 3.35rem;
      height: 0.54rem;
      margin-bottom: 0.1rem;
    }
    .advantage_con {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        width: 3.35rem;
        height: 1.2rem;
        margin-bottom: 0.1rem;
      }
      .in_xuxian {
        width: 3.3rem;
        height: 0.7rem;
        border: 0.02rem dotted #999999;
        border-radius: 0.15rem;
        .xuxian_text {
          width: 3.04rem;
          height: 0.53rem;
          font-size: 0.11rem;
          color: #333333;
          line-height: 0.18rem;
          margin: 0.1rem 0.1rem 0.1rem 0.1rem;
          overflow: hidden;
        }
      }
      .intr_textear {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 0.12rem;
        .intr_textear_con {
          width: 3.3rem;
          align-items: center;
          display: flex;
          border-bottom: 0.02rem dotted #999999;
          img {
            width: 0.68rem;
            height: 0.68rem;
          }
          .intr_text {
            width: 2.68rem;
            height: 0.84rem;
            font-size: 0.12rem;
            padding-bottom: 0.16rem;
            padding-top: 0.16rem;
            .work_con {
              font-size: 0.12rem;
              color: #ff3300;
            }
            .work_con2 {
              font-size: 0.12rem;
              color: #006699;
            }
            .work_con3 {
              font-size: 0.12rem;
              color: #009900;
            }
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
          background: aqua;
        }
      }
    }
  }
}
.swiper {
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 1.5rem;
  .swiper-slide img {
    width: 100%;
    height: 1.5rem;
  }
  #one {
    position: absolute;
    width: 0.32rem;
    height: 0.31rem;
    top: 55%;
    left: 0.2rem;
    z-index: 999;
    opacity: 0.7;
  }
  #two {
    position: absolute;
    width: 0.32rem;
    height: 0.31rem;
    right: 0.2rem;
    left: 3.2rem;
    opacity: 0.7;
    top: 55%;
    z-index: 999;
  }
  .swiper-pagination {
    --swiper-theme-color: #00f0ff;
  }
}
</style>