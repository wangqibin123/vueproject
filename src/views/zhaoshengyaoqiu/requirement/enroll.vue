<template>
    <div class="enroll">
        <div class="enr-top">
            <img src="@/assets/img/公共/航空院校报名流程图_03.jpg" alt="">
        </div>
        <div class="enr-conent">
            <div class="conent-box">
                <div class="box-img">
                    <img src="@/assets/img/招生要求/招生要求_35.jpg" alt="">
                </div>
                <p class="box-text">网络在线咨询</p>
            </div>
            <div class="conent-box">
                <div class="box-img">
                    <img src="@/assets/img/招生要求/招生要求_37.jpg" alt="">
                </div>
                <p class="box-text">电话沟通确认</p>
            </div>
            <div class="conent-box">
                <div class="box-img">
                    <img src="@/assets/img/招生要求/招生要求_39.jpg" alt="">
                </div>
                <p class="box-text">选择专业 补全信息</p>
            </div>
            <div class="conent-box">
                <div class="box-img">
                    <img src="@/assets/img/招生要求/招生要求_44.jpg" alt="">
                </div>
                <p class="box-text">办理入学手续</p>
            </div>
            <div class="conent-box">
                <div class="box-img">
                    <img src="@/assets/img/招生要求/招生要求_45.jpg" alt="">
                </div>
                <p class="box-text">学院基础素质测试</p>
            </div>
            <div class="conent-box">
                <div class="box-img">
                    <img src="@/assets/img/招生要求/招生要求_46.jpg" alt="">
                </div>
                <p class="box-text">现场信息确认</p>
            </div>
        </div>
        <div class="information_con_btm">
            <div class="btm_border">
                <span>点击查看详情</span>
                <img src="@/assets/img/公共/sou.png" alt="">
            </div>
        </div>
        <img src="@/assets/img/招生要求/招生要求_42.jpg" class="tu1">
        <img src="@/assets/img/招生要求/招生要求_42.jpg" class="tu2">
        <img src="@/assets/img/招生要求/招生要求_42.jpg" class="tu3">
        <img src="@/assets/img/招生要求/招生要求_42.jpg" class="tu4">
        <img src="@/assets/img/招生要求/招生要求_42.jpg" class="tu5">
    </div>
</template>

<script type="text/javascript">
 export default {
}
</script>

<style lang='scss' scoped>
.enroll{
    width: 3.55rem;
    margin: 0 auto;
    background: #fff;
    position: relative;
    .enr-top{
        width: 100%;
        height: .55rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .enr-conent{
        width: 100%;
        height: 1.9rem;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-around;
        .conent-box{
            width: 33%;
            height: .95rem;
            // background: red;
            .box-img{
                width: .50rem;
                height: .50rem;
                padding: .15rem 0 0 0;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .box-text{
                text-align: center;
                padding: .1rem 0 0 0;
                font-size: .11rem;
            }
        }
    }
    .information_con_btm{
        padding: .15rem .12rem .15rem .12rem;
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
    img{
        width: .2rem;
        height: .15rem;
    }
    .tu1{
        position: absolute;
        left: 1.04rem;
        top: .9rem;
    }
    .tu2{
        position: absolute;
        left: 2.3rem;
        top: .9rem;
    }
    .tu3{
        position: absolute;
        left: 2.8rem;
        top: 1.5rem;
    }
    .tu4{
        position: absolute;
        left: 2.3rem;
        top: 1.8rem;
    }
    .tu5{
        position: absolute;
        left: 1.04rem;
        top: 1.8rem;
    }
}
</style>
