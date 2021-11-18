<template>
  <div class="details">
      <Headerlun/>
      <page/>
      <div class="requirement">
          <div class="requ">
              <div class="requ-top">
                  <span>航空专业</span>
                  <span>到底有哪些要求？</span>
                  <div class="circular"></div>
                  <p>REQUIREMENTS</p>
              </div>
              <div class="img">
                  <img src="@/assets/images2/国际航空服务与管理_02.jpg" alt="">
              </div>
              <div class="dotted">
                  <p>随着航空事业的不断深入，从事航空事业的人也是越来越多，当然航空事业的要求是非常高的，记得当时验飞行员也是百里挑一哦，那么航空专业的要求有哪些?这个问题对于想要上蓝天的人来说是太重要了。</p> 
                  <div class="imgs">
                      <img src="@/assets/下.png" alt="">
                  </div>
              </div>
              <div class="number">
                  <div class="left">
                      <img src="@/assets/航空专业详情页_03.jpg" alt="">
                  </div>
                  <div class="right">
                      <span class="orange">政治条件：</span>
                      <span>拥护党的路线、方针、政策，热爱祖国，品德优秀，志愿献身民航飞行事业，符合《民用航空背景调查规定》相关要求。</span>
                  </div>
              </div>
              <div class="number">
                  <div class="left">
                      <img src="@/assets/航空专业详情页_03.jpg" alt="">
                  </div>
                  <div class="right">
                      <span class="blue">身体条件：</span>
                      <span>大二、大三学生年龄不超过23周岁(1985年8月31日以后出生)，大四学生年龄不超过24周岁(1984年8月31日以后出生)，身高170厘米以上，身体符合《民用航空招收飞行学生体格检查鉴定规范》(MH/T7013-2006)要求。考生可按照《中国民用航空飞行学院招飞自荐标准》进行自我检查。</span>
                  </div>
              </div>
              <div class="number">
                  <div class="left">
                      <img src="@/assets/航空专业详情页_03.jpg" alt="">
                  </div>
                  <div class="right">
                      <span class="green">心理品质条件：</span>
                      <span>参加中国民用航空飞行学院组织的飞行员心理选拔，其心理品质应满足飞行职业需求。</span>
                  </div>
              </div>
              <div class="number">
                  <div class="left">
                      <img src="@/assets/航空专业详情页_03.jpg" alt="">
                  </div>
                  <div class="right">
                      <span class="pink">学历文化条件：</span>
                      <span>普通二类本科以上在校大二、大三学生或毕业生，专业不限。在校学习成绩优良，具有良好的中英文口头表达能力。大学毕业生必须达到英语四级水平。大二、三学生经考核认定英语达到相当于四级水平。</span>
                  </div>
              </div>
              <div class="input">
                  <p class="title">招生在线咨询</p>
                  <div class="input-one">
                      <div class="from_One">
                        <i class="icon_rest">*</i>
                        <a-input size="large" placeholder="学生姓名" style="width: 1.49rem;color:#000;height: .31rem;margin-right: .1rem;padding-left:.15rem;"/>
                      </div>
                      <div class="from_One">
                        <i class="icon_rest">*</i>
                        <a-input size="large" placeholder="手机号码" style="width: 1.49rem;color:#000;height: .31rem;margin-right: .1rem;padding-left:.15rem;"/>
                      </div>
                  </div>
                  <div class="input-one">
                      <div class="from_One">
                        <i class="icon_rest">*</i>
                        <a-date-picker placeholder="出生年月" suffix-icon=" " /> 
                        <i class="from-icon">
                            <img src="@/assets/images/首页改1_100.gif" alt="">
                        </i> 
                      </div>
                      <div class="from_One">
                        <i class="icon_rest">*</i>
                        <a-input size="large" placeholder="请选择意向学校" style="width: 1.49rem;color:#000;height: .31rem;margin-right: .1rem;padding-left:.15rem;"/>
                      </div>
                  </div>
                  <div class="input-one">
                      <div class="from_One">
                        <i class="icon_rest">*</i>
                        <a-input size="large" placeholder="意向专业" style="width: 1.49rem;color:#000;height: .31rem;margin-right: .1rem;padding-left:.15rem;"/>
                      </div>
                      <div class="from_One">
                        <a-select default-value="您的疑问" style="width:1.49rem;font-size:.15rem;color:#ccc;" class="top"  >
                            <a-icon slot="suffixIcon" type="caret-down" style="color: #000;width: .11rem;height: .08rem;"/>
                            <a-select-option value="疑问1">
                                <span style='color:#000'>疑问1</span>
                            </a-select-option>
                            <a-select-option value="疑问2">
                                <span style='color:#000'>疑问2</span>
                            </a-select-option>
                        </a-select>
                      </div>
                  </div>
                  <div class="sub">
                      提交
                  </div>
                  <div class="privacy">
                      《隐私保障》
                  </div>
              </div>
              <div class="go">
                  <p>上一篇：航空方面有哪些专业？</p>
                  <p>下一篇：航空专业就业前景如何？</p>
              </div>
          </div>
      </div>
      <div class="cdsa">
          <aviation/>
          <div class="click">更多院校></div>
      </div>
      <div class="read">
          <div class="read-top">
              <img src="@/assets/images/首页改1_33.gif" alt="">
          </div>
          <Data/>
      </div>
  </div>
</template>

<script type="text/javascript">
import Data from '@/views/details/data.vue'
import Headerlun from '@/components/header-lun/header_lun.vue'
import Aviation from '@/views/homes/major/aviation.vue'
import Page from "@/components/page/index.vue"
 export default{
  components: {Data, Headerlun, Aviation, Page},
}
    
</script>

<style lang='scss' scoped>
.title_warp{width:100%;padding:0 .2rem;margin: .15rem 0;box-sizing:border-box;
p{width: 100%;text-align:left;
span {font-size: .14rem;font-weight: normal;font-stretch: normal;line-height: .07rem;letter-spacing: 0px;color: #888888;}
.hang {margin-left: 0.05rem;font-family: PingFang-SC-Medium;font-size: .14rem;font-weight: normal;letter-spacing: 0px;color: #b0b0b0;}
}
}
.requirement{
    width: 100%;
    padding: .15rem .1rem;
    box-sizing: border-box;
    .requ{
        width: 100%;
        background: #fff;
        border-radius: 5px;
        overflow: hidden;
        .requ-top{
            width: 100%;
            padding: .2rem .68rem;
            font-size: .18rem;
            font-weight: 700;
            text-align: center;
            box-sizing: border-box;
            span:first-of-type{
                color: rgb(51,102,204);
            }
            .circular{
                width: .04rem;
                height: .04rem;
                border-radius: 50px;
                background: rgb(102,102,102);
                margin: .05rem auto;
                position: relative;
            }
            .circular::before{
                content: '';
                position: absolute;
                display: block;
                right: 0.07rem;
                width: .5rem;
                top: .013rem;
                border-bottom: 1px solid rgb(102,102,102);
            }
            .circular::after{
                content: '';
                position: absolute;
                display: block;
                left: 0.07rem;
                width: .5rem;
                top: .013rem;
                border-bottom: 1px solid rgb(102,102,102);
            }
            p{
                font-size: .16rem;
                color: rgb(102,102,102);
            }
        }
        .img{
            width: 100%;
            height: 1.45rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .dotted{
            width: 3.3rem;
            height: .91rem;
            margin: .15rem .1rem .2rem;
            border-radius: 15px;
            border: 1px dashed rgb(153,153,153);
            padding: .1rem .13rem;
            box-sizing: border-box;
            text-indent: .25rem;
            position: relative;
            font-size: .12rem;
            color: rgb(51,51,51);
            .imgs{
                width: .13rem;
                height: .09rem;
                position: absolute;
                bottom: -0.14rem;
                left: 50%;
                margin-left: -0.065rem;
                img{
                    width: 100%;
                    height: 100%;
                    float: left;
                }
            }
        }
        .number{
            width: 3.14rem;
            margin: .15rem .1rem;
            padding-bottom: .15rem;
            border-bottom: 1px dotted rgb(153,153,153);
            overflow: hidden;
            .left{
                float: left;
                width: .51rem;
                img{
                    width: 100%;
                    height: .53rem;
                }
            }
            .right{
                width: 2.53rem;
                float: left;
                font-size: .12rem;
                .orange{
                    color: rgb(255,51,0);
                }
                .blue{
                    color: rgb(0,102,153);
                }
                .green{
                    color: rgb(0,136,24);
                }
                .pink{
                    color: rgb(126,0,146);
                }
            }
        }
        .input{
            width: 3.29rem;
            margin: 0 auto .15rem;
            background: rgb(234,234,234);
            .title{
                text-align: center;
                padding: .15rem 0;
                font-size: .17rem;
                color: rgb(51,51,51);
            }
            .input-one{
                padding: 0 .11rem .1rem;
                height: .31rem;
                input{
                    height: .31rem;
                    padding: 0 .15rem;
                    width: 1.49rem;
                }
                .ant-select-selection--single{
                    height: .31rem;
                    .ant-select-selection__rendered{
                        line-height: .31rem;
                    }
                }
                .from_One{
                    width: 1.49rem;
                    height: 100%;
                    position: relative;
                    float: left;
                    .icon_rest{
                        color: rgb(162,72,75);
                        left: 7px;
                        height: 100%;
                        position: absolute;
                        z-index: 999;
                        top: -5px;
                        font-size: 0.2rem;
                        line-height: .4rem;
                    }
                    .from-icon{
                        width: .41rem;
                        height: .3rem;
                        display: block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .from_One:nth-child(2){
                    float: right;
                }
            }
            .sub{
                width: 1.04rem;
                height: .36rem;
                background: rgb(208,135,84);
                color: #fff;
                text-align: center;
                line-height: .36rem;
                font-size: .15rem;
                margin: .05rem auto .1rem;
            }
            .privacy{
                text-align: center;
                padding-bottom: .2rem;
                color: rgb(135,137,136);
            }
        }
        .go{
            margin-left: .16rem;
            p{
                margin-bottom: .15rem;
                color: rgb(51,51,51);
            }
        }
    }
}
.cdsa{
    overflow: hidden;
    width: 3.55rem;
    margin: 0 auto .15rem;
    border-radius: .05rem;
    box-shadow: 0 0 8px #ccc;
}
.click{
    text-align: center;
    color: rgb(153,153,153);
    margin: .18rem 0;
}
.read{
    width: 3.55rem;
    margin: 0 auto .15rem;
    background: #fff;
    padding-bottom: .3rem;
    border-radius: 5px;
    overflow: hidden;
    .read-top{
        width: 100%;
        height: .55rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
