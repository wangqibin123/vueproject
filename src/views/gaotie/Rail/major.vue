<template>
  <div class="major">
    <div class="major-body">
      <div class="major-img1">
        <img src="@/assets/img/公共/专业优势_03.jpg" alt="" />
      </div>
      <div class="major-img2">
        <img src="@/assets/img/高铁专业/高铁专业_06.gif" alt="" />
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
          text: "我国的高铁事业也在不断的壮大，全国各地布满高铁，对于乘务员的需求也在不断地增加。选择高铁行业，成就好的未来。",
        },
        {
          imgs:require("@/assets/img/公共/航空专业详情页_06.png"),
          color:"color: #ff3300",
          title: "工作前景好",
          text: "我国的高铁事业也在不断的壮大，全国各地布满高铁，对于乘务员的需求也在不断地增加。选择高铁行业，成就好的未来。",
        },
        {
          imgs:require("@/assets/img/公共/航空专业详情页_03_08.png"),
          color:"color: #ff3300",
          title: "工作前景好",
          text: "我国的高铁事业也在不断的壮大，全国各地布满高铁，对于乘务员的需求也在不断地增加。选择高铁行业，成就好的未来。",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.major {
  width: 100%;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  display: flex;
  justify-content: center;
  .major-body {
    width: 3.55rem;
    background: white;
    border-radius: 0.05rem;
    .major-img1 {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .major-img2 {
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
     .size-list{
        width: 3.14rem;
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