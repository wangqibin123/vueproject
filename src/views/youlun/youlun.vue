<template>
  <div class="cruise">
    <!--  国际海乘就业趋势  -->
    <div class="cruise_header_title">
      <a href="">
        <img src="@/assets/images2/banner/游轮海乘专业.png" alt="" />
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
            <span>海乘专业:</span>  
            主要为豪华邮轮培养海上乘务的专业人员,
            工作性质和空中乘务相近。但由于邮轮空间较大,属家庭式的豪华邮轮客轮,
            就像一艘航信在海上的五星级大型度假酒店,
            各种设施一应俱全,集商务、会议、餐饮、美食
            、文化、休闲、娱乐、旅游、观光为一体,
            因此服务的范围和岗位远多于空乘。
            当很多同学还在想着“上天”
            作空姐
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
          <div class="cruise_text_img">
            <explain/>
            <!-- <ul class="cruise_text_ul">
              <li v-for="list,index of urlList" :key="index">
                <a href="">
                  <img :src="list.img" alt="">
                </a>
                <div class="cruise_text_dk">
                  <span :style="list.color">{{list.feet+index}}</span>
                  <div>{{list.text}}</div>
                </div>
              </li>
            </ul> -->
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
import explain from '@/components/explain/explain.vue'
export default {
  components:{
    page,
    explain
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
          font-family: PingFang-SC-Medium;
          font-weight: normal;
          font-stretch: normal;
          span{
            color: #f45858;
          }
        }
        .cruise_text_img{
          .cruise_text_ul{
            // padding: .1rem;
            display: flex;
            flex-direction: column;
            li{
              display: flex;
              justify-content: space-evenly;
              a{
                width: .51rem;
                height: .53rem;
                display: flex;
                border: none;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .cruise_text_dk{
                width: 2.52rem;
                
                div{
                  height: .75rem;
                  span{
                    display: inline-block;
                  }
                }
              }
            }
          }
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
        padding: 0.05rem 0;
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