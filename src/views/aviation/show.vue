<template>
  <div class="show">
    <div class="show-header">
      <img src="@/assets/images2/国际航空服务与管理_22.jpg" alt="" />
    </div>
    <div class="show-text">
      <ul>
        <li>
          <div class="school-img">
            <img src="@/assets/images2/国际航空服务与管理_26.jpg" alt="" />
          </div>
          <div class="school-text">
            <div class="school-name">大连海事大学</div>
            <p><span>学校所在地：</span>大连</p>
            <p>
              <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
            </p>
            <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
          </div>
        </li>
        <li>
          <div class="school-img">
            <img src="@/assets/images2/国际航空服务与管理_28.jpg" alt="" />
          </div>
          <div class="school-text">
            <div class="school-name">渤海大学</div>
            <p><span>学校所在地：</span>大连</p>
            <p>
              <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
            </p>
            <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="school-img">
            <img src="@/assets/images2/国际航空服务与管理_32.jpg" alt="" />
          </div>
          <div class="school-text">
            <div class="school-name">北京航空大学</div>
            <p><span>学校所在地：</span>大连</p>
            <p>
              <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
            </p>
            <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
          </div>
        </li>
        <li>
          <div class="school-img">
            <img src="@/assets/images2/国际航空服务与管理_33.jpg" alt="" />
          </div>
          <div class="school-text">
            <div class="school-name">吉林大学</div>
            <p><span>学校所在地：</span>大连</p>
            <p>
              <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
            </p>
            <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="school-img">
            <img src="@/assets/images2/国际航空服务与管理_36.jpg" alt="" />
          </div>
          <div class="school-text">
            <div class="school-name">山东杏林航空</div>
            <p><span>学校所在地：</span>大连</p>
            <p>
              <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
            </p>
            <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
          </div>
        </li>
        <li>
          <div class="school-img">
            <img src="@/assets/images2/国际航空服务与管理_37.jpg" alt="" />
          </div>
          <div class="school-text">
            <div class="school-name">南京航空学院</div>
            <p><span>学校所在地：</span>大连</p>
            <p>
              <span>专业设置：</span>飞行器专业 电子工程专业 计算机专业 理学院
            </p>
            <p><span>学校优势：</span>专业任选 推荐就业 一对一教学</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.show {
  width: 3.55rem;
  height: 6.98rem;
  background: #fff;
  border-radius: 0.05rem;
  overflow: hidden;
  margin: 0.15rem auto;
  .show-header {
    width: 100%;
    height: 0.44rem;
    img {
      width: 100%;
    }
  }
  .show-text {
    // width: 100%;
    height: 6.54rem;
    padding: 0.1rem 0.05rem 0.05rem;
    // box-sizing: border-box;
    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: .05rem;
      li {
        width: 1.7rem;
        // height: 2.1rem;
        border-radius: 0.06rem;
        overflow: hidden;
        background: #f4f4f4;
        .school-img {
          width: 100%;
          height: 0.9rem;
          img {
            width: 100%;
          }
        }
        .school-text {
        //   width: 100%;
        //   height: 1.2rem;
          padding: 0 0.17rem 0.1rem 0.05rem;
        //   box-sizing: border-box;
          .school-name {
            font-family: PingFang-SC-Heavy;
            font-size: 0.17rem;
            font-weight: normal;
            color: #666;
          }
          p {
            font-family: PingFang-SC-Heavy;
            font-size: 0.1rem;
            color: #999;
            line-height: .17rem;
            // padding-top: .07rem;
            span {
              font-family: PingFang-SC-Heavy;
              font-size: 0.1rem;
              font-weight: normal;
              color: #666;
            }
            }
            // .school-one{
            //     line-height: .25rem;
            // }
            // .school-two{
            //     line-height: .21rem;
            // }
            // .school-three{
            //     line-height: .18rem;
            // }
        }
      }
    }
  }
}
</style>