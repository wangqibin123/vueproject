<template>
  <div class="enroll">
      <div class="enr-top">
          <img src="@/assets/images2/国际航空服务与管理_22.jpg" alt="">
      </div>
      <div class="enr-conent">
          <div class="right">
              <img src="@/assets/images2/国际航空服务与管理_46.jpg" alt="">
              <p>网络在线咨询</p>
          </div>
          <div class="right">
              <img src="@/assets/images2/国际航空服务与管理_46.jpg" alt="">
              <p>电话沟通确认</p>
          </div>
          <div class="bottom">
              <img src="@/assets/images2/国际航空服务与管理_46.jpg" alt="">
              <p>选择专业 补全信息</p>
          </div>
          <div>
              <img src="@/assets/images2/国际航空服务与管理_46.jpg" alt="">
              <p>办理入学手续</p>
          </div>
          <div class="left">
              <img src="@/assets/images2/国际航空服务与管理_46.jpg" alt="">
              <p>学院基础素质测试</p>
          </div>
          <div class="left">
              <img src="@/assets/images2/国际航空服务与管理_46.jpg" alt="">
              <p>现场信息确认</p>
          </div>
      </div>
  </div>
</template>

<script type="text/javascript">
 export default{
}
</script>

<style lang='scss'>
.enroll{
    width: 3.55rem;
    margin: 0 auto;
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        div{
            margin: .1rem 0;
            width: 1.05rem;
            height: .77rem;
            background: #fff;
            text-align: center;
            font-size: .11rem;
            position: relative;
            img{
                width: .4rem;
                height: .3rem;
                margin: .1rem;
            }
            p{
                width: 1.05rem;
                height: .2rem;
                white-space: normal;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .right::after{
                content: "";
                width: 0;
                height: 0;
                border-width: .1rem;
                border: .15rem solid transparent;
                border-left-color: #fff;
                position: absolute;
                right: -0.3rem;
                top: 50%;
                margin-top: -0.15rem;
        }
        .left::after{
            content: "";
            width: 0;
            height: 0;
            border-width: .1rem;
            border: .15rem solid transparent;
            border-right-color: #fff;
            position: absolute;
            left: -0.3rem;
            top: 50%;
            margin-top: -0.15rem;
        }
        .bottom::after{
            content: "";
            width: 0;
            height: 0;
            border-width: .1rem;
            border: .15rem solid transparent;
            border-top-color: #fff;
            position: absolute;
            bottom: -0.3rem;
            left: 50%;
            margin-left: -0.15rem;
        }
    }
}
</style>
