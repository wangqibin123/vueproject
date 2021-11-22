<template>
  <div class="sx">
     <div class="lun_warp">
        <div class="lun_con">
            <img src="@/assets/images2/banner/三校生.png" alt="">
        </div>
    </div>
      <page />
    <div class="what">
      <div class="what-img-one">
        <img src="@/assets/images2/国际航空服务与管理_58.jpg" alt="" />
      </div>
      <div class="what-school">
        <div class="what-img-two">
          <img src="@/assets/images2/国际航空服务与管理_26.jpg" alt="" />
        </div>
        <p>
          三校生，表示正在接受中等职业教育学生的统称。中等职业学校包括职高、中专、技校。其定义是在九年义务教育的基础上培养一批具有高素质的高技术人才。其学生毕业后有技能可以胜任工作岗。航空服务技能培训等。
        </p>
      </div>
    </div>
    <!--  -->
    <div class="good">
      <div class="what-img-one">
        <img src="@/assets/images2/国际航空服务与管理_58.jpg" alt="" />
      </div>
      <div class="good-school">
        <div class="what-img-two">
          <img src="@/assets/images2/国际航空服务与管理_26.jpg" alt="" />
        </div>
        <div class="good-text">
          <ul>
            <li>
              <div class="text-img">
                <img src="@/assets/images/航空专业详情页_03.png" alt="">
              </div>
              <p>
                <span class="text-one">升职潜力大:</span>
                空乘的晋升制度非常简单，每个公司不外乎都是，全勤，年小时飞够，不扣分不犯错，有英语资质，有国际线资质。
              </p>
            </li>
            <li>
              <div class="text-img">
                <img src="@/assets/images/航空专业详情页_06.png" alt="">
              </div>
              <p>
                <span class="text-two">工资待遇好:</span>
                空乘的工资一般都分为基本工资，小时费，过夜费这几个项目。基本工资飞行的年限和等级固定增加，五险一都会在基本工资里扣除。
              </p>
            </li>
            <li>
              <div class="text-img">
                <img src="@/assets/images/航空专业详情页_03_08.png" alt="">
              </div>
              <p>
                <span class="text-three">入职面试快:</span>
                空乘专业毕业的就业率是看学生的个人条件能不能通过航空公司来面试的要了，入学时的面试比较简单。航空公司选空乘最先来还是学校，只有学校选不到太多的时候空公司才会面向社会招收空乘人员。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import page from "@/components/page/index.vue";
export default {
    components:{
        page
    }
}
</script>
<style lang='scss'  scoped >
 .lun_warp{
        width: 100%;
        height: 1.50rem;
        .lun_con{
            width: 3.75rem;
            height: 1.50rem;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
.sx {
  width: 3.55rem;
  margin: 0 auto 0.1rem;
}
.what {
  width: 3.55rem;
  border-radius: 0.05rem;
  background-color: #fdfcfc;
  overflow: hidden;
  margin: auto;
}
.what-img-one img {
  width: 100%;
}
.what-img-one img {
  width: 100%;
  height: 100%;
}
.what-img-two {
  width: 3.35rem;
  height: 1.2rem;
  overflow: hidden;
  border-radius: 0.05rem;
  margin-bottom: 0.1rem;
}
.what-img-two img {
  width: 100%;
  height: 100%;
}
.what-school {
  padding: 0.1rem 0.1rem 0.2rem;
  box-sizing: border-box;
}
.what-school p {
  font-family: PingFang-SC-Bold;
  font-size: 0.1rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  text-indent: 0.12rem;
  line-height: 0.18rem;
  padding: 0.1rem;
  box-sizing: content-box;
  border: 0.01rem dashed #999999;
  border-radius: 0.15rem;
}

.good {
  background: #fff;
  margin-top: 0.1rem;
  border-radius: 0.05rem;
  overflow: hidden;
  .what-img-one {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .good-school {
    padding: 0.1rem;
    box-sizing: border-box;

    .what-img-two {
      width: 3.35rem;
      height: 1.2rem;
      overflow: hidden;
      border-radius: 0.05rem;
      margin-bottom: 0.1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .good-text {
      ul {
        li {
          display: flex;
          justify-content: space-between;
          border-bottom: dashed 0.01rem rgba(216, 216, 216);
          .text-img {
            width: 0.68rem;
            height: 0.6rem;
            img {
              width: 100%;
            }
          }
          p {
            width: 2.68rem;
            font-family: PingFang-SC-Medium;
            font-size: 0.12rem;
            color: #333333;
            span {
              font-weight: 700;
            }
            .text-one {
              color: #ff3300;
            }
            .text-two {
              color: #006699;
            }
            .text-three {
              color: #009900;
            }
          }
        }
        li:nth-child(1) {
          padding: 0 0 0.2rem;
        }
        li:nth-child(2) {
          padding: 0.26rem 0 0.2rem;
        }
        li:nth-child(3) {
          padding: 0.26rem 0 0.2rem;
        }
      }
    }
  }
}
</style>