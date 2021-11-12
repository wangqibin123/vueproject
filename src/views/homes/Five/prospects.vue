<template>
  <div class="prospects">
      <div class="prospects_header">
          <div class="prospects_title">
            <img src="../../../assets/images2/国际航空服务与管理_72.jpg" alt="">
          </div>
          <div class="prospects_banner">
              <ul class="prospects_banner_ul">
                  <li>
                      <div class="banner_li_left">
                          <a href="">
                            <img src="../../../assets/images2/国际航空服务与管理_74.jpg" alt="">
                          </a>
                          <div class="ul_text">
                                就业方向：地勤专业值机 、 机场安检 、 VIP客服 、 易登机 、 航空票务 、 两舱等
                                '00000000000000000000000000000000000000000000000000'
                          </div>
                      </div>
                      <div class="banner_li_right">
                          <a href="">
                            <img src="../../../assets/images2/国际航空服务与管理_76.jpg" alt="">
                          </a>
                          <div class="ul_text_two">
                                就业方向：当时国内外的豪华邮轮为主，主要在邮轮上从事服务性的工作。高收入
                                '00000000000000000000000000000000000000000000000000'
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="banner_li_left">
                          <a href="">
                            <img src="../../../assets/images2/国际航空服务与管理_79.jpg" alt="">
                          </a>
                          <div class="ul_text">
                                就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机
                               '00000000000000000000000000000000000000000000000000'
                          </div>
                      </div>
                      <div class="banner_li_right">
                          <a href="">
                            <img src="../../../assets/images2/国际航空服务与管理_80.jpg" alt="">
                          </a>
                          <div class="ul_text_two">
                                就业方向：掌握民航管理、民航乘务、民航票务、民航法规、机场商务管理，从事
                                '00000000000000000000000000000000000000000000000000'
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="banner_li_left">
                          <a href="">
                            <img src="../../../assets/images2/国际航空服务与管理_83.jpg" alt="">
                          </a>
                          <div class="ul_text">
                                就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机
                                '00000000000000000000000000000000000000000000000000'
                          </div>
                      </div>
                      <div class="banner_li_right">
                          <a href="">
                            <img src="../../../assets/images2/国际航空服务与管理_84.jpg" alt="">
                          </a>
                          <div class="ul_text_two">
                                就业方向：国内外各大航空公司、地方航空公司、民营航空公司、外航服务公司、各大
                                '00000000000000000000000000000000000000000000000000'
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <div class="prospects_content">
          <div class="prospects_content_title">
              <img src="../../../assets/images2/国际航空服务与管理_87.jpg" alt="">
          </div>
          <div class="prospects_content_Two">
              <ul>
                  <li>
                      <p><span>1</span>、凤凰可分为颇为姐姐基督教减肥陪玩'DNF酒精发酵按键打开的渴望快递'</p>
                  </li>
                  <li>
                      <p><span>2</span>、DNF酒精发酵按键打开的渴望快递'DNF酒精发酵按键打开的渴望快递'</p>
                  </li>
                  <li>
                      <p><span>3</span>、和客户上帝问问饿未接龙卷风分'DNF酒精发酵按键打开的渴望快递'</p>
                  </li>
                  <li>
                      <p><span>4</span>、分开开开飞机抗裂砂浆low扣痘痘是'DNF酒精发酵按键打开的渴望快递'</p>
                  </li>
                  <div data-v-38b7d4ae="" class="information_con_btm">
                      <div data-v-38b7d4ae="" class="btm_border">
                          <span data-v-38b7d4ae="">查看更多通告</span>
                          <img data-v-38b7d4ae="" src="/img/sou.1365d30a.png" alt="">
                    </div>
                  </div>
              </ul>
          </div>
      </div>
      <div class="five_top_kite">
           <div class="header">
                <img src="@/assets/images2/国际航空服务与管理_93.jpg" alt="">
            </div>
            <div class="content">
                <ul class="content_ul">
                    <li class="content_li" v-for="(item,index) in list" :key='index'>
                        <span class="span_One"><em>{{index+1}}、</em>{{item}}</span>
                        <!-- <span class="span_Two">{{tlep}}</span> -->
                    </li>
                </ul>           
            </div>
            <div class="information_con_btm">
                <div class="btm_border">
                    <span>点击查看更多</span>
                    <img src="@/assets/images/sou.png" alt="">
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            banners:[
                {
                    minimg:'../../../assets/images2/国际航空服务与管理_74.jpg',
                    text:'就业方向：地勤专业值机 、 机场安检 、 VIP客服 、 易登机 、 航空票务 、 两舱等'
                },
                {
                    minimg:'../../../assets/images2/国际航空服务与管理_76.jpg',
                    text:'就业方向：当时国内外的豪华邮轮为主，主要在邮轮上从事服务性的工作。高收入'
                },
                {
                    minimg:'../../../assets/images2/国际航空服务与管理_79.jpg',
                    text:'就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机'
                },{
                    minimg:'../../../assets/images2/国际航空服务与管理_80.jpg',
                    text:'就业方向：掌握民航管理、民航乘务、民航票务、民航法规、机场商务管理，从事'
                },
                {
                    minimg:'../../../assets/images2/国际航空服务与管理_83.jpg',
                    text:'就业方向：国内外各主要机场及其他非民航相关单位。从事飞机机体结构维修、飞机'
                },
                {
                    minimg:'../../../assets/images2/国际航空服务与管理_84.jpg',
                    text:'就业方向：国内外各大航空公司、地方航空公司、民营航空公司、外航服务公司、各大'
                }
            ],
            list:[
                '39岁的小伙子,就发生了发颤,怎么',
                '市北市民留言咨询这些问题,官方',
                '美供应链受阻问题雪上加霜',
                '篮网有能力解决他们的问题度,你',
                '记者实测快速企业智能客服:回复',
                '养老金有哪些渠道可以获得?有说明',
                '怎么样买保险才是最合理的?咱们',
                '全面建成小康社会的重要举措你们慢慢',
                '摩根士丹利重磅报告:中国经济措施'       
            ],
        }
    }
}
</script>

<style lang='scss' scoped>
.prospects{
    .prospects_header{
        margin: .15rem auto;
        width: 3.54rem;
        .prospects_title{
            overflow: hidden;
            border-top-left-radius: 0.04rem;
            border-top-right-radius: 0.04rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .prospects_banner{
            width: 100%;
            .prospects_banner_ul{
                    display: flex;
                    flex-direction: column;
                    padding-top: .1rem;
                    background-color: #ffffff;
                    border-bottom-right-radius: 0.04rem;
                    border-bottom-left-radius: 0.04rem;
                li{
                     justify-content: space-between;
                     display: flex;
                    .banner_li_left{
                        display: flex;
                        flex-direction: column;
                        width: 48%;
                        margin-right:.1rem ;
                        a{
                            width: 100%;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .ul_text{
                            width: 98%;
                            margin: .1rem 0;
                            text-align: left;
                            display: -webkit-box;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            -webkit-line-clamp: 4;
                            -webkit-box-orient: vertical;
                            padding-left: .06rem;
                        }
                    }
                    .banner_li_right{
                        display: flex;
                        flex-direction: column;
                        width: 48%;
                        a{
                            width: 100%;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .ul_text_two{
                            width: 98%;
                            margin: .1rem 0;
                            text-align: left;
                            display: -webkit-box;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            -webkit-line-clamp: 4;
                            -webkit-box-orient: vertical;
                            padding-left: .06rem;
                        }
                    }
                }
            }
        }
    }
    .prospects_content{
        width:3.54rem;
        border-radius: .04rem;
        overflow: hidden;
        margin: .15rem auto;
        .prospects_content_title{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .prospects_content_Two{
            background-color: #f9fafb;
            border-bottom-right-radius: 0.04rem;
            border-bottom-left-radius: 0.04rem;
            ul{
                li{
                    padding-top: .1rem;
                    p{
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        overflow : hidden;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        width: 2.6rem;
                        line-height: .15rem;
                        span{
                            display: inline-block;
                            width: .15rem;
                            text-align: center;
                            height: .15rem;
                            line-height: .15rem;
                            border-radius: 50%;
                            border: 1px solid #000000;
                            margin-left: .05rem;
                        }
                    }
                }
                .information_con_btm{
                        padding: 0.15rem 0.12rem 0.25rem 0.12rem;
                        .btm_border{
                            width: 100%;
                            height: 100%;
                            border-radius: 5px;
                            border: solid 1px #1776af;
                            text-align: center;
                            line-height: 0.42rem;
                            span{
                                font-size: 0.16rem;
                                color: #1776af;
                                font-family: PingFang-SC-Medium;
                                font-weight: normal;
                                font-stretch: normal;
                                letter-spacing: 0px;
                                
                            }
                            img{
                                width: 0.16rem;
                                height: 0.16rem;
                                margin-left: 0.04rem;
                                vertical-align: middle;
                                margin-bottom: 0.02rem;        
                            }
                        }
                        :hover{
                            background: #3f555f;
                        }
                        :hover>span{
                            color: #ffffff;
                            font-size: .16rem;
                            font-family: PingFang-SC-Medium;
                            font-weight: normal; 
                            font-stretch: normal;
                            letter-spacing: 0px;
                        }
                }
            }
        }
    }
    .five_top_kite{
        margin-top: 0.15rem;
        margin: 0 .1rem;
        border-radius: 0.05rem;
        box-sizing : border-box;
        margin: 0 auto;
        width: 3.54rem;
        margin-bottom: .15rem;
        background-color: #ffffff;
        overflow: hidden;
        .header{
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content{
            // margin-top: .15rem;
            .content_ul{
                display: flex;
                flex-wrap: wrap;
                .content_li{
                    width: 100%;
                    border-bottom: 1px solid #cccccc;
                    display: flex;
                    justify-content: space-between;
                    margin-top: .2rem;
                    align-items: center;
                    text-align: -webkit-left;
                    .span_One{
                        width: 2.35rem;
                        padding-bottom: .02rem;
                        height: .15rem;
                        font-family: PingFang-SC-Medium;
                        font-size: .15rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: .15rem;
                        letter-spacing: 0px;
                        color: #333333;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        margin-left: .07rem;
                    }
                    .span_Two{
                        // width: .74rem;
                        height: .11rem;
                        font-family: PingFang-SC-Medium;
                        font-size: .14rem;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: .12rem;
                        margin-right: .05rem;
                        letter-spacing: 0rem;
                        color: #999999;
                    }
                }
            }
        }
         .information_con_btm{
                padding: .15rem .12rem .25rem .12rem;
                .btm_border{
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    border: solid 1px #1776af;
                    text-align: center;
                    line-height: .42rem;
                    span{
                        font-size: .16rem;
                        color: #1776af;
                        font-family: PingFang-SC-Medium;
                        font-weight: normal; 
                        font-stretch: normal;
                        letter-spacing: 0px;
                    }
                    img{
                        width: 0.16rem;
                        height: 0.16rem;
                        margin-left: .04rem; 
                        vertical-align: middle;
                        margin-bottom: .02rem;   
                    }
                }
                :hover{
                    background: #3f555f;
                }
                :hover>span{
                    color: #ffffff;
                    font-size: .16rem;
                    font-family: PingFang-SC-Medium;
                    font-weight: normal; 
                    font-stretch: normal;
                    letter-spacing: 0px;
                }
            }
    }
}
</style>