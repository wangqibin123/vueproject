<template>
  <div class="high">
    <div class="high-body">
      <div class="high-img1">
        <img src="@/assets/img/公共/专业介绍_03.jpg" alt="" />
      </div>
      <div class="high-img2">
        <img src="@/assets/img/高铁专业/高铁专业_03.gif" alt="" />
      </div>
      <div class="size-duce">
            随着航空事业的不断深入，从事航空事业的人也是越来越多，当然航空事业的要求是非常高的，记得当时验飞行员也是百里挑一哦，那么航空专业的要求有哪些?这个问题对于想要上蓝天的人来说是太重要了。
        </div>
        <div class="size-icon">
            <img src="@/assets/img/公共/航空专业详情页_04.jpg" alt="">
        </div>
        <ul class="size-list" v-for="(item,index) in highList" :key="index">
            <li class="list-img">
                <img :src="item.imgs" alt="">
            </li>
            <li class="list-size"><span v-bind:style="item.color">{{item.title}}</span>{{item.text}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highList: [
        {
          imgs:require("@/assets/img/公共/航空专业详情页_03.png"),
          color:"color: #ff3300",
          title: "工作前景好",
          text: "高铁乘务专业全称是高速铁路客运乘务专业，是国家教育部面向铁路行业开设的高等职业教育专业。其专业学制为三年。就业主要集中在铁路旅客列车客运乘务及其相关方向。",
        },
        {
          imgs:require("@/assets/img/公共/航空专业详情页_06.png"),
          color:"color: #ff3300",
          title: "工作前景好",
          text: "高铁乘务专业是目前的一大热门专业，再加之中国目前的铁路系统技术和运营里程都是全世界规模最大的国家之一，因此我国的高铁行业发展将会持续走高，高铁乘务专业的毕业生在就业前景和发展前景上是很光明的。目前我国的很多高铁院校都是与企业实行资源互补，校企合作的发展方向和趋势，高铁乘务专业的学生在毕业之前学校一般会提供实习机会，在高铁企业实习期间，表现突出的学生会有优先就业的机会。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.high {
  width: 100%;
//   margin-bottom: 0.15rem;
  display: flex;
  justify-content: center;
  .high-body {
    width: 3.55rem;
    // height: 4.87rem;
    background: white;
    border-radius: 0.05rem;
    .high-img1 {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .high-img2 {
      width: 3.35rem;
      height: 1.2rem;
      margin: 0 auto;
      overflow: hidden;
      border-radius: .05rem;
      margin-top: .1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .size-duce{
          width: 3.3rem;
          box-sizing: border-box;
          height: .89rem;
          border-radius: .15rem;
          border: dashed  .01rem #999999;
          margin: .1rem .1rem .1rem .1rem;
          padding: .1rem .13rem;
          color: #333333;
          font-size: .12rem;
          font-weight: normal;
          line-height: .18rem;
      }
      .size-icon{
          width: .13rem;
        height: .09rem;
          margin: 0 auto;
          img{
              width: 100%;
              height: 100%;
          }
      }
      .size-list{
        width: 3.14rem;
        // background: red;
        margin: .06rem .1rem .15rem .1rem;
        padding: 0.15rem 0 0.15rem 0;
        display: flex;
        flex-direction: row;
        border-bottom: dashed  .01rem #999999;
        text-align: justify;
        .list-img{
            width: .53rem;
          height: .53rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .list-size{
            width: 2.53rem;
            // height: .48rem;
            font-size: .12rem;
            font-weight: bold;
            line-height: .18rem;
            color: #333333;
            margin-left: .1rem;
        }
    }
  }
}
</style>