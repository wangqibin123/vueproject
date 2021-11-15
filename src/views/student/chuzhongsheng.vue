<template>
  <div class="Cthere">
    <Lun />
    <div class="Gao">
      <p>当前位置：首页>航空学院>初中生</p>
    </div>
    <div class="Green">
      <div class="Ctit">
        <img src="@/assets/images2/国际航空服务与管理_40.jpg" alt="" />
      </div>
      <div class="Ccen">
        <img src="@/assets/images2/国际航空服务与管理_02.jpg" alt="" />
      </div>
      <p class="Czi">
        有些省市不仅有秋季高考，还有春季高考，可以增加自己被录取的几率。有了春季高考，可以让同学比其他人多增加一次考试机会，多体验一次高考的经验，所有春考能让成绩差的学生多一个选择，一定要把握好这个机会。
      </p>
    </div>
    <div class="Green" id="Gtow">
      <div class="Ctit">
        <img src="@/assets/images2/国际航空服务与管理_40.jpg" alt="" />
      </div>
      <div class="Ccen">
        <img src="@/assets/images2/国际航空服务与管理_02.jpg" alt="" />
      </div>
      <p class="Czi" id="Zitwo">
        对于高中生来说，现在离高考还有一段时日，即使现在学习成绩差也没有
        给自己一个十足的动力，定一个目标，然后找对学习的方法，剩下的就是下苦功夫去学
      </p>
      <div class="information_con_btm">
        <div class="btm_border">
          <span>在线报名</span>
          <img src="@/assets/images/sou.png" alt="" />
        </div>
      </div>
    </div>
    <div class="Green" id="Gthere">
      <div class="Ctit">
        <img src="@/assets/images2/国际航空服务与管理_40.jpg" alt="" />
      </div>
      <div class="Ccen">
        <img src="@/assets/images2/国际航空服务与管理_02.jpg" alt="" />
      </div>
      <p class="Czi" id="Zithere">
        1、就业机会多，现在航空公司在招聘空姐时，倾向于年龄比较低的学生，初中生就读空乘专业，在年龄上就业比高中就读的小2岁，在将来航空公司的面试中被录取的就会将大大增加。
      </p>
      <p class="seond">
        2、如果这个空姐学校的教学不满意，可以转到其他空姐学校去学习，不会像高中生就读孔城专业后转学影响学业。
      </p>
      <div class="information_con_btm">
        <div class="btm_border">
          <span>在线报名</span>
          <img src="@/assets/images/sou.png" alt="" />
        </div>
      </div>
    </div>
    <div class="bott">
      <div class="Ctit">
        <img src="@/assets/images2/国际航空服务与管理_40.jpg" alt="" />
      </div>

      <ul class="Han">
        <li>
          <div class="Yuan">
            <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
          </div>
          <p class="po">普通舱乘务员</p>
          <p class="Cpd">一般学员在完成相应的业务培训后，可担当普通舱乘务员</p>
        </li>
        <li>
          <div class="Yuan">
            <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
          </div>
          <p class="po">两舱乘务员</p>
          <p class="Cpd">
            随着飞行小时数的增加，个人资历的提升，通过相应的考核，可提升为两舱头等舱乘务员
          </p>
        </li>
        <li>
          <div class="Yuan">
            <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
          </div>
          <p class="po">区域乘务长</p>
          <p class="Cpd">
            随着飞行小时数的增加，个人资历的提升，通过相应的考核，可提升为两舱/头等舱乘务员
          </p>
        </li>
        <li>
          <div class="Yuan">
            <img src="@/assets/images2/国际航空服务与管理_61.jpg" alt="" />
          </div>
          <p class="po">主任乘务长</p>
          <p class="Cpd">
            成绩优秀的区域乘务长经过考评委员会严格的考评后，可担当主任乘务长，并可以独立带班执行国际航班以及首长专机任务。
          </p>
        </li>
        <div class="information_con_btm">
          <div class="btm_border">
            <span>在线报名</span>
            <img src="@/assets/images/sou.png" alt="" />
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import Lun from '@/views/hangkongs/lun.vue'
export default {
    components:{
        Lun
    }
}
</script>
<style lang="scss" scoped>
.Cthere {
  width: 3.75rem;
  margin: 0 auto;
}
.ThereImg img {
  width: 3.75rem;
  height: 1.5rem;
}
.Gao {
  padding: 0.15rem 0.2rem;
}
.Gao p {
  width: 2.17rem;
  height: 0.14rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.14rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #888888;
}
.Green {
  width: 3.56rem;
  margin: 0 auto;
  height: 2.8rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  border-radius: 0.05rem;
  margin-bottom: 0.15rem;
}
.Ctit img {
  width: 3.56rem;
  background-color: #1c6ca5;
  border-radius: 0.05rem 0.05rem 0 0;
}
.Ccen img {
  width: 3.56rem;
  height: 1.26rem;
}
.Czi {
  width: 3.35rem;
  height: 0.75rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.12rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
  margin: 0.15rem 0.1rem 0.05rem 0.1rem;
}
#Gtow {
  width: 3.56rem;
  height: 3.37rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  border-radius: 0.05rem;
}
#Gthere {
  width: 3.56rem;
  height: 3.52rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  border-radius: 0.05rem;
}
#Zitwo {
  width: 3.44rem;
  height: 0.54rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.12rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
}
.information_con_btm {
  padding: 0.15rem 0.12rem 0.25rem 0.12rem;
  .btm_border {
    width: 3.31rem;
    height: 100%;
    border-radius: 5px;
    border: solid 1px #1776af;
    text-align: center;
    line-height: 0.42rem;
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
#Zithere {
  width: 3.35rem;
  height: 0.54rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.12rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
}
.seond {
  width: 3.34rem;
  height: 0.33rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.12rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
  margin: 0 auto;
}
.bott {
  width: 3.55rem;
  height: 6.11rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  border-radius: 0.05rem;
  margin: 0 auto;
}
.Han {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.Han li {
  width: 1.66rem;
  height: 1.88rem;
  background-color: #ececec;
  box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.22);
  border-radius: 0.1rem;
  margin-top: 0.55rem;
}
.Yuan {
  position: relative;
  height: 0.55rem;
}
.po {
  text-align: center;
  height: 0.27rem;
  font-family: AdobeHeitiStd-Regular;
  font-size: 0.13rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
}
.Yuan img {
  width: 0.91rem;
  height: 0.91rem;
  background-color: #ffffff;
  border: solid 1px #000000;
  border-radius: 50%;
  position: absolute;
  top: -0.44rem;
  left: 0.35rem;
}
.Cpd {
  width: 1.46rem;
  font-family: AdobeHeitiStd-Regular;
  font-family: AdobeHeitiStd-Regular;
  font-size: 0.13rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
  margin: 0 auto;
}
</style>
