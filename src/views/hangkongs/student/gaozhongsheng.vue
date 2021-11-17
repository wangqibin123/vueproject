<template>
  <div class="gao_warp">
    <div class="recommend_warp">
      <div class="recommend_top">
        <img src="@/assets/images2/国际航空服务与管理_40.jpg" alt="" />
      </div>
      <div class="recommend_con">
        <img src="@/assets/images2/国际航空服务与管理_02.jpg" alt="" />
      </div>
      <div class="recommend_btm">
        <span>
            对与高中生来说，现在离高考还有一段时日，即使现在学习成绩
          差也没有关系，只要大家肯努力，就有回旋余地，尤其是文科生，
          成功逆袭的可能性非常打。首先给自己一个十足的动力，顶一个
          目标，然后找对学习方法，剩下的就是苦功夫去学
        </span>
      </div>
    </div>
    <div class="recommend_warp">
      <div class="recommend_top">
        <img src="@/assets/images2/国际航空服务与管理_40.jpg" alt="" />
      </div>
      <div class="recommend_con">
        <img src="@/assets/images2/国际航空服务与管理_02.jpg" alt="" />
      </div>
      <div class="recommend_btm">
        <span>
            对与高中生来说，现在离高考还有一段时日，即使现在学习成绩
          差也没有关系，只要大家肯努力，就有回旋余地，尤其是文科生，
          成功逆袭的可能性非常打。首先给自己一个十足的动力，顶一个
          目标，然后找对学习方法，剩下的就是苦功夫去学
        </span>
      </div>
      <div class="sign">
          <div class="sign_up">
              <span>在线报名<i>></i></span>
          </div>
      </div>
    </div>
    <div class="recommend_warp">
      <div class="recommend_top">
        <img src="@/assets/images2/国际航空服务与管理_40.jpg" alt="" />
      </div>
      <div class="recommend_con">
        <img src="@/assets/images2/国际航空服务与管理_02.jpg" alt="" />
      </div>
      <div class="recommend_btm">
        <span>
            1.就业机会多，现在航空公司在招聘空姐时，倾向于年龄比较低
的学生，初中生就读空乘专业，在年龄上就业比高中生就读的小
2岁，在将来航空公司的面试录取机会将会大大增加。
        </span>
        <span>
            2.如果这个空姐学校的教学不满意，可以转到其他学姐学校去学
习不会想高中生就读空乘专业转学影响血液。
        </span>
      </div>
      <div class="sign">
          <div class="sign_up">
              <span>在线报名<i>></i></span>
          </div>
      </div>
    </div>
    <div class="crew_warp">
        <div class="crew_top">
            <img src="@/assets/images2/国际航空服务与管理_40.jpg" alt="" />
        </div>
        <div class="crew_con">
            <ul class="crew_con_c">
                <li class="crew_con_c_li">
                    <div class="tu_warp">
                        <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
                    </div>
                    <p class="tit">普通舱乘务员</p>
                    <p class="titl">一般学员在完成相应的业务培训后，可担当普通舱乘务员</p>
                </li>
                <li class="crew_con_c_li">
                    <div class="tu_warp">
                        <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
                    </div>
                    <p class="tit">两舱乘务员</p>
                    <p class="titl">
                        随着飞行小时数的增加，个人
                        资历的提升，通过相应的考
                        核，可提升为两舱/头等舱乘
                        务员。
                    </p>
                </li>
                <li class="crew_con_c_li">
                    <div class="tu_warp">
                        <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
                    </div>
                    <p class="tit">区域乘务长</p>
                    <p class="titl">头等舱乘务员考核期满后，可担当区域乘务长</p>
                </li>
                <li class="crew_con_c_li">
                    <div class="tu_warp">
                        <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
                    </div>
                    <p class="tit">主任乘务长</p>
                    <p class="titl">
                        成绩优秀的区域乘务长经过考
                        评委员会严格的考评后，可担
                        当主任乘务长，并可以独立带
                        班执行国际航班以及首长专
                        机任务。
                    </p>
                </li>

            </ul>
        </div>
        <div class="sign">
            <div class="sign_up">
                <span>在线报名<i>></i></span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Lun from "@/views/hangkongs/lun.vue";
export default {
  components: {
    Lun,
  },
};
</script>

<style lang="scss" scoped>
.gao_warp {
  width: 100%;
  height: auto;
  .recommend_warp {
    width: 3.55rem;
    background-color: #ffffff;
    margin: 0 auto;
    border-radius: 0.05rem;
    margin-bottom: .15rem;
    .recommend_top {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 100%;
        height: 100%;
        border-top-right-radius: 0.05rem;
      }
    }
    .recommend_con {
      width: 3.55rem;
      height: 1.3rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .recommend_btm {
        padding: 0.1rem 0.07rem 0.1rem 0.09rem;
        span{
            font-family: PingFang-SC-Heavy;
            font-size: .12rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0;
            color: #000000;
        }
        :nth-of-type(2){
            display:block;
            margin-top:.13rem;
        }
    }
    .sign{
        padding: .05rem .23rem .15rem .22rem;
        .sign_up{
            width: 3.10rem;
            height: .34rem;
            border-radius: .05rem;
            border: solid .01rem #1776af;
            text-align: center;
            line-height: .34rem;
            box-sizing: border-box;
            span{
                font-family: PingFang-SC-Medium;
                font-size: .12rem;
                font-weight: normal;
                font-stretch: normal;
                line-height: .12rem;
                letter-spacing: 0;
                color: #1776af;
                i{
                    font-size: .18rem;
                    color: #ccc;
                    line-height: .12rem;
                }
            }
        }
        :hover{
            background: #1776af;
        }
        :hover>span{
            color: #ffffff;
            font-size: 0.12rem;
            font-family: PingFang-SC-Medium;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0;
        }
        :hover>span>i{
            color: #ffffff;
            font-size: .18rem;
            font-family: PingFang-SC-Medium;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0;
        }
    }
  }
  .crew_warp{
    width: 3.55rem;
    height: auto;
    margin: 0 auto;
    background-color: #ffffff;
    border-top-right-radius: 0.05rem;
    .crew_top{
        width: 3.55rem;
        height: 0.55rem;
        img {
            width: 100%;
            height: 100%;
            border-top-right-radius: 0.05rem;
        }
    }
    .crew_con{
        width: 3.55rem;
        height: auto;
        .crew_con_c{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .crew_con_c_li{
                width: 1.66rem;
                height: 1.88rem;
                box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.22);
                border-radius: 0.1rem;
                margin-top: 0.55rem;
                .tu_warp{
                    position: relative;
                    height: 0.55rem;
                    img{
                        width: 0.91rem;
                        height: 0.91rem;
                        background-color: #ffffff;
                        border: solid 1px #000000;
                        border-radius: 50%;
                        position: absolute;
                        top: -0.44rem;
                        left: 0.35rem;
                        box-sizing: border-box;
                    }
                }
                .tit{
                    text-align: center;
                    font-family: PingFang-SC-Heavy;
                    font-size: .12rem;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #000000;
                }
                .titl{
                    width: 1.56rem;
                    margin-left: .08rem;
                    margin-top: .11rem;
                    font-family: PingFang-SC-Heavy;
                    font-size: .12rem;
                    font-weight: normal;
                    font-stretch: normal;
                    color: #000000;
                }
            }
        }
    }
    .sign{
    padding: .05rem .23rem .15rem .22rem;
    .sign_up{
        width: 3.10rem;
        height: .34rem;
        border-radius: .05rem;
        border: solid .01rem #1776af;
        text-align: center;
        line-height: .34rem;
        box-sizing: border-box;
        span{
            font-family: PingFang-SC-Medium;
            font-size: .12rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: .12rem;
            letter-spacing: 0;
            color: #1776af;
            i{
                font-size: .18rem;
                color: #ccc;
                line-height: .12rem;
            }
        }
    }
    :hover{
        background: #1776af;
    }
    :hover>span{
        color: #ffffff;
        font-size: 0.12rem;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
    }
    :hover>span>i{
        color: #ffffff;
        font-size: .18rem;
        font-family: PingFang-SC-Medium;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
    }
    }
  }
}
</style>
