<template>
  <div class="aservice">
    <div class="aservice_con">
          <img src="@/assets/images/首页改1_27.gif" />
    </div>
    <div class="page">
      <p>
        当前位置：
       <router-link to="/"><span class="shouye">首页</span></router-link>>VIP地勤专业
      </p>
    </div>
    <!-- 专业介绍 -->
    <div class="Introduction">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="Introduction_con">
        <img src="@/assets/images/首页改1_31.gif" />
        <div class="intr_text">
          <div
            class="text_con"
          >机场地勤为自有航空运输服务以及各大航空站(机场)建设营运以来，
          出现在各级民用、军用航空站的一-项重要附加服务，和航空站的运作息息相关且不可或缺，
          所有的民用、商用、及军用飞行器都需要地勤的服务从飞机进入停机坪的那一刻起，
          到离开停机坪进入滑行道为止，停泊其间的所有后勤服务(给油、给水、旅客下机登机、行李搬运、飞机餐 点装载....</div>
        </div>
      </div>
    </div>
    <!-- 专业优势 -->
     <div class="advantage">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="advantage_con">
        <img src="@/assets/images/首页改1_31.gif" />
        <div class="adv_text">
            <div class="intr_con">
              <span class="list1">1.工作年限长: 上岗率非常高,不需要走后门。</span>
              <span class="list1">2.工作年限长: 上岗率非常高,不需要走后门，到货付款计划</span>
              <span class="list1">3.工作年限长: 上岗率非常高,不需要走后门富士康东海防空</span>
              <span class="list1">4.工作年限长: 上岗率非常高,不需要走后门富士康东海防空</span>
            </div>
             
        </div>
      </div>
    </div>
    <!-- 职业规划 -->
     <div class="Introduction">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="Introduction_con">
        <img src="@/assets/images/首页改1_31.gif" />
        <div class="intr_text">
          <div
            class="text_con"
          >机场地勤为自有航空运输服务以及各大航空站(机场)建设营运以来，
          出现在各级民用、军用航空站的一-项重要附加服务，和航空站的运作息息相关且不可或缺，
          所有的民用、商用、及军用飞行器都需要地勤的服务从飞机进入停机坪的那一刻起，
          到离开停机坪进入滑行道为止，停泊其间的所有后勤服务(给油、给水、旅客下机登机、行李搬运、飞机餐 点装载....</div>
        </div>
      </div>
    </div>
    <!-- 合作单位 -->
     <div class="hezuo">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="hezuo_con">
          <div class="hezuo_img">
            <img src=""/>
            <img src=""/>
          </div>
           <div class="hezuo_img">
            <img src=""/>
            <img src=""/>
          </div>
           <div class="hezuo_img">
            <img src=""/>
            <img src=""/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.aservice {
  width: 100%;
  // height: ;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .aservice_con {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    img{
      width: 3.75rem;
      height: 1.5rem;
      background: yellow;
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
    .shouye{
      color: #888888;
    }
  }
  .Introduction {
    width: 3.55rem;
    border-radius: 0.05rem;
    // height: .24rem;
    margin-bottom: 0.15rem;
    background: white;
    img {
      width:100%;
      
      margin-bottom: 0.01rem;
    }
    .Introduction_con {
      width: 100%;
      // height: 1.5rem;
      img {
        width: 100%;
        height: 1.3rem;
        margin-bottom: 0.18rem;
      }
      .intr_text {
        width: 100%;
        // height: ;
        display: flex;
        justify-content: center;
        margin-bottom: 0.25rem;
        .text_con {
          width: 95%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 7;
          overflow: hidden;
          // height: 1.3rem;
          // background: red;
        }
      }
    }
  }
  .advantage {
    width: 3.55rem;
    border-radius: 0.05rem;
    // height: .24rem;
    margin-bottom: 0.15rem;
    background: white;
    img {
      width:100%;
      margin-bottom: 0.01rem;
    }
    .advantage_con {
      width: 100%;
      img {
        width: 100%;
        height: 1.3rem;
        margin-bottom: 0.15rem;
      }
      .adv_text {
        width: 100%;
        // display: flex;
        // justify-content: center;
        margin-bottom: 0.25rem;
        // background: pink;
        .intr_con {
          width: 95%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
         
          .list1{
            width: 100%;
            height: .15rem;
            line-height:.15rem;
            padding:.15rem 0 0 .1rem;
            font-size: .14rem;
             overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
         
        }
      }
    }
  }
  .hezuo{
    width: 3.55rem;
    border-radius: 0.05rem;
    margin-bottom: 0.15rem;
    background: white;
     img {
      width:100%;
      margin-bottom: 0.01rem;
    }
    .hezuo_con{ 
       width: 95%;
       margin: .1rem .1rem 0 .1rem;
       .hezuo_img{
        display: flex;
          justify-content: space-between;
        img{
           width: 1.62rem;
          height: 1.05rem;
          margin-bottom: 0.12rem;
           background: aqua;
        }
       }
    }
  }
}
</style>