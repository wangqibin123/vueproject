<template>
  <div class="major">
      <div class="mar-top">
          <img src="@/assets/img/招生要求/总有一个专业适合你2_03.jpg" alt="">
      </div>
      <div class="mar-content">
          <div class="majors" >
              <div class="maj-top">
                  <img src="@/assets/img/公共/招生要求_24.jpg" alt="">
              </div>
              <p>空乘专业</p>
          </div>
          <div class="majors" >
              <div class="maj-top">
                  <img src="@/assets/img/公共/招生要求_27.jpg" alt="">
              </div>
              <p>高铁专业</p>
          </div>
          <div class="majors" >
              <div class="maj-top">
                  <img src="@/assets/img/公共/招生要求_30.jpg" alt="">
              </div>
              <p>游轮海乘专业</p>
          </div>
          <div class="majors" >
              <div class="maj-top">
                  <img src="@/assets/img/公共/招生要求_31.jpg" alt="">
              </div>
              <p>VIP地勤专业</p>
          </div>
      </div>
  </div>
</template>

<script type="text/javascript">
 export default{
}
</script>

<style lang='scss' scoped>
.major{
    width: 3.55rem;
    margin: .15rem auto;
    background: #fff;
    border-radius: .05rem;
    overflow: hidden;
    .mar-top{
        width: 100%;
        height: .55rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mar-content{
        width: 100%;
        padding-bottom: .1rem;
        font-size: .14rem;
        text-align: center;
        overflow: hidden;
        .majors{
            width: 1.63rem;
            margin: .1rem 0 0 .1rem;
            float: left;
            .maj-top{
                width: 100%;
                height: 1.34rem;
                margin-bottom: .1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
