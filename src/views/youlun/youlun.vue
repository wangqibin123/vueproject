<template>
  <div class="cruise">
    <!--  国际海乘就业趋势  -->
    <div class="cruise_header_title">
      <a href="">
        <img src="@/assets/images/首页改1_27.gif" alt="" />
      </a>
    </div>
    <page/>
    <!-- 头部 -->
    <div class="cruise_header">
      <div class="cruise_rest">
        <div class="cruise_header_content">
          <a href="">
            <img src="@/assets/images/首页改1_33.gif" alt="" />
          </a>
        </div>
        <div class="cruise_header_bottom">
          <div class="cruise_header_bottom_top">
            <a href="">
              <img src="@/assets/images/首页改1_31.gif" alt="" />
            </a>
          </div>
          <div class="cruise_text">
            海乘专业主要为豪华邮轮培养海上乘务的专业人员,
            工作性质和空中乘务相近。但由于邮轮空间较大,属家庭式的豪华邮轮客轮,
            就像一艘航信在海上的五星级大型度假酒店,
            各种设施一应俱全,集商务、会议、餐饮、美食
            、文化、休闲、娱乐、旅游、观光为一体,
            因此服务的范围和岗位远多于空乘。当很多同学还在想着“上天”
            作空姐、空保的时候,
            “下海”到豪华邮轮上做海乘已经成为不少年轻人的新选择。
          </div>
        </div>
      </div>
    </div>
    <div class="cruise_header">
      <div class="cruise_rest">
        <div class="cruise_header_content">
          <a href="">
            <img src="@/assets/images/首页改1_33.gif" alt="" />
          </a>
        </div>
        <div class="cruise_header_bottom">
          <div class="cruise_header_bottom_top">
            <a href="">
              <img src="@/assets/images/首页改1_31.gif" alt="" />
            </a>
          </div>
          <div class="cruise_text">
            1 工作年限长：上岗率非常高，不需要走后门。 2 工作
            环境好：安检中心、呼叫中心、预定中心、指挥中心、
            机场商务VIP、门户网站集合发展等，航空地勤人员是真
            正的现代白领，都市丽人。 3 待遇福利高：工作强度与
            奖金福利成正比增长，劳有所得。还有机票奖励，实现
            蓝天梦、出国旅行，感受航空业的独特魅力。 4 地勤专
            业永远都不失业：这个行业永远都需要人，尤其是有一
            定经验的人才。
          </div>
        </div>
      </div>
    </div>
    <div class="cruise_header">
      <div class="cruise_rest">
        <div class="cruise_header_content">
          <a href="">
            <img src="@/assets/images/首页改1_33.gif" alt="" />
          </a>
        </div>
        <div class="cruise_header_bottom">
          <div class="cruise_header_bottom_top">
            <a href="">
              <img src="@/assets/images/首页改1_31.gif" alt="" />
            </a>
          </div>
          <div class="cruise_text">
            2012年统计随着国际化社会建设,国家十一五规划针对
            航空机场建设也是增加很大的力度和投入大量资金标准
            化-流程化的建设,针对性的航空专业人才缺口也是今年
            企业与学校联合办学的重要推广之一,国内现有薪资水
            平看,国内主流航空公司优秀地勤人员平均年薪在50000元-100000元万元人民币以上,
            同时因其专业性和供应不足,其职业稳定性得到保证。我国正处于从民航
            大国向民航强国的转变过程中。
          </div>
        </div>
      </div>
      <div class="cruise_bottom">
        <div class="cruise_bottom_header">
            <a href="">
            <img src="@/assets/images/首页改1_33.gif" alt="" />
            </a>
        </div>
        <div class="cruise_content">
            <ul class="cruise_content_ul">
            <li v-for="(item, index) in 6" :key="index">
                <a href="">
                    <img src="@/assets/images/首页改1_31.gif" alt="" />
                </a>
            </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import page from "@/components/page/index.vue";

export default {
  components:{
    page
  }
};
</script>

<style lang='scss' scoped>
a {
  border: 0;
  display: flex;
  img {
    width: 100%;
  }
}
.cruise {
  width: 3.75rem;
  overflow: hidden;
  margin: 0 auto;
  .cruise_header_title {
        a {
            height: 1.5rem;
            img{
                height: 100%;
            }
        }
   }
  .cruise_header {
    // margin: 0 auto;
    width: 3.55rem;
    margin: 0 .1rem;
    .cruise_rest {
      border-radius: 0.04rem;
      background-color: #fff;
      margin-bottom: 0.15rem;
      .cruise_header_content{
        a{
          height: .54rem;
          img{
            height: 100%;
          }
        }
      }
      .cruise_header_bottom {
        border-bottom-right-radius: 0.04rem;
        border-bottom-left-radius: 0.04rem;
        background-color: #fff;
        .cruise_header_bottom_top {
            a{
                height: 1.3rem;
                img{
                    height: 100%;
                }
            }
        }
        .cruise_text {
          padding: 0.1rem;
          text-align: justify;
        }
      }
    }
  }
  .cruise_bottom {
    .cruise_bottom_header {
        border-top-right-radius: 0.1rem;
        border-top-left-radius: 0.1rem;
        a{
          height: .54rem;
          img{
            height: 100%;
          }
        }
    }
    .cruise_content {
      border-bottom-right-radius: 0.1rem;
      border-bottom-left-radius: 0.1rem;
      background-color: #fff;
      .cruise_content_ul {
        display: flex;
        flex-wrap: wrap;
        // padding: 0.05rem 0;
        padding-bottom: .11rem;
        padding-right: .1rem;
        justify-content: space-around;
        margin: 0;
        li {
          width: 47%;
          // margin-top: .1rem;
        //   margin: 0.1rem 0.06rem 0 0.06rem;
          margin-left: .1rem;
          margin-top: .1rem;
          display: flex;
          justify-content: space-around;
          // border: 1px solid #ccc;
          a{
              height: 1.05rem;
              img{
                  height: 100%;
              }
          }
        }
      }
    }
  }
}
</style>