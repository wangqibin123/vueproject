<template>
  <div>
     <div class="lun_warp">
        <div class="lun_con">
            <img src="@/assets/img/艺考生/艺考生.png" alt="">
        </div>
    </div>
      <page />
    <div class="what">
      <div class="what-img-one">
        <img src="@/assets/img/艺考生/什么是艺考生_03.jpg" alt="" />
      </div>
      <div class="what-school">
        <div class="what-img-two">
          <img src="@/assets/img/艺考生/艺考生2_03.jpg" alt="" />
        </div>
        <p>
          空乘就是大学选择读空中乘务专业，也就是未来当上大家说的空姐、空少艺考就是通过艺术类专业考试，拿到学校专业合格证后再在高考报考中报名该学校。简单来说空乘艺考...
        </p>
    <div class="information_con_btm">
      <div class="btm_border">
        <span>查看更多资讯</span>
        <img src="@/assets/img/公共/sou.png" alt="" />
      </div>
    </div>
      </div>
    </div>
  <div class="ches">
    <div class="ches-header">
      <img src="@/assets/img/艺考生/艺考生的四大优势_03.jpg" alt="" />
    </div>
    <div class="ches-text">
      <ul>
        <li>
          <div class="text-img">
            <img src="@/assets/img/公共/艺考生2_03.jpg" alt="" />
          </div>
          <div class="text-text">
            <div class="text-header">
              <div class="text-header-img">
                <img src="@/assets/img/艺考生/艺考生2_03.png" alt="" />
              </div>
              <p>升职潜力大</p>
            </div>
            <div class="text-header-text">
              空乘的晋升制度非常简单，每个公司不外乎都是,全勤,年小时飞够，不扣分不犯错，有英语资质,有国际线资质。那么你就可以...
            </div>
          </div>
        </li>
        <li>
          <div class="text-text">
            <div class="text-header">
              <div class="text-header-img">
                <img src="@/assets/img/艺考生/艺考生2_07.png" alt="" />
              </div>
              <p>工资待遇好</p>
            </div>
            <div class="text-header-text">
              空乘的晋升制度非常简单，每个公司不外乎都是,全勤,年小时飞够，不扣分不犯错，有英语资质,有国际线资质。那么你就可以...
            </div>
          </div>
          <div class="text-img">
            <img src="@/assets/img/公共/艺考生2_06.jpg" alt="" />
          </div>
        </li>
        <li>
          <div class="text-img">
            <img src="@/assets/img/公共/艺考生2_09.jpg" alt="" />
          </div>
          <div class="text-text">
            <div class="text-header">
              <div class="text-header-img">
                <img src="@/assets/img/艺考生/艺考生2_10.png" alt="" />
              </div>
              <p>入职面试快</p>
            </div>
            <div class="text-header-text">
              空乘的晋升制度非常简单，每个公司不外乎都是,全勤,年小时飞够，不扣分不犯错，有英语资质,有国际线资质。那么你就可以...
            </div>
          </div>
        </li>
        <li>
          <div class="text-text">
            <div class="text-header">
              <div class="text-header-img">
                <img src="@/assets/img/艺考生/艺考生2_12.jpg" alt="" />
              </div>
              <p>休闲时间多</p>
            </div>
            <div class="text-header-text">
              空乘的晋升制度非常简单，每个公司不外乎都是,全勤,年小时飞够，不扣分不犯错，有英语资质,有国际线资质。那么你就可以...
            </div>
          </div>
          <div class="text-img">
            <img src="@/assets/img/公共/艺考生2_12.jpg" alt="" />
          </div>
        </li>
      </ul>
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
}
</script>

<style lang="scss" scoped>
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
  .information_con_btm {
      height: .44rem;
      width: 3.32rem;
      margin: .15rem auto 0;
    .btm_border {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: solid 1px #1776af;
      text-align: center;
      line-height: 0.44rem;
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
.ches{
    width: 3.55rem;
    margin: auto;
    background: #fff;
    overflow: hidden;
    border-radius: .05rem;
    margin-top: .1rem;
    margin-bottom: .1rem;
    .ches-header{
        width: 100%;
        img{
        width: 100%;
        }
    }
    .ches-text{
        padding: .11rem .05rem .16rem .06rem;
        box-sizing: border-box;
        ul{
            li{
                display: flex;
                justify-content: space-between;
                .text-img{
                    width: 50%;
                    height: 1.4rem;
                    img{
                    width: 100%;
                    height: 100%;
                    }
                }
                .text-text{
                    width: 50%;
                    padding: .18rem 0 0 .18rem;
                    box-sizing: border-box;
                    .text-header{
                        display: flex;
                        .text-header-img{
                            width: .27rem;
                            height: .3rem;
                            float: left;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .text-header-text{
                            height: .3rem;
                        }
                        p{
                            line-height: .3rem;
                            padding-left: .1rem;
                            font-size: .14rem;
                        }
                    }
                    .text-header-text{
                            font-size: .12rem;
                    }
                }
            }
        }
    }
}
</style>