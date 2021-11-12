<template>
  <div class="banner">
    <div class="banner_con">
      <div class="title_img">
        <img src="@/assets/images2/国际航空服务与管理_40.jpg" />
      </div>
      <!-- ---------------------------- -->
      <div class="swiper swiper3">
        <div class="swiper-container" id="swiperThree">
          <div class="swiper-wrapper swiper1-wrapper">
            <div class="swiper-slide" v-for="(item, index) in img" :key="index">
              <img :src="item.picture" />
            </div>
          </div>
          <!-- <div class="swiper-button-next"> -->
              <img :src="rightimg" @click="right" class="swiper-button-next"/>
          <!-- </div> -->
          <!-- <div class="swiper-button-prev"> -->
              <img :src="leftimg"  @click="left" class="swiper-button-prev"/>
          <!-- </div> -->
        </div>
      </div>

      <!--  -->
      <div thumbsSlider class="swiper swiper4">
        <div class="swiper-container" id="swiperFour">
          <div class="swiper-wrapper swiper4-wrapper">
            <div class="swiper-slide" v-for="(item, index) in img2" :key="index">
              <img :src="item.pic" />
            </div>
          </div>
        </div>
      </div>
      <!-- ----------------------------------------- -->
    </div>
  </div>
</template>
<script>
//引入swiper
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      img: [
        { picture: require("@/assets/images2/1.jpg") },
        { picture: require("@/assets/images2/2.jpg") },
        { picture: require("@/assets/images2/3.jpg") },
        { picture: require("@/assets/images2/4.jpg") }, 
        { picture: require("@/assets/images2/5.jpg") },
      ],
      img2: [
        { pic: require("@/assets/images2/国际航空服务与管理_44.jpg") },
        { pic: require("@/assets/images2/国际航空服务与管理_46.jpg") },
        { pic: require("@/assets/images2/国际航空服务与管理_48.jpg") },
        { pic: require("@/assets/images2/国际航空服务与管理_50.jpg") },
        { pic: require("@/assets/images2/国际航空服务与管理_52.jpg") },
      ],
      rightimg:require("@/assets/images/首页改1_13.gif"),
      leftimg:require("@/assets/images2/首页改1_10.gif"),
    };
  },
  mounted() {
    var thumbsSwiper = new Swiper("#swiperFour", {
      spaceBetween: 5,
      slidesPerView: 5,
      watchSlidesVisibility: true, //防止不可点击
    });
    var gallerySwiper = new Swiper("#swiperThree", {
      spaceBetween: 10,
       loop: true, // 循环模式选项
      autoplay: true, //自动播放
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  },
  methods:{
    left(){
      if(this.rightimg==require("@/assets/images/首页改1_13.gif")){
        this.leftimg=require("@/assets/images/首页改1_13.gif")
        this.rightimg= require("@/assets/images2/首页改1_10.gif")
      }
    },
    right(){
      if(this.leftimg=require("@/assets/images2/首页改1_10.gif")){
        this.leftimg=require("@/assets/images2/首页改1_10.gif")
        this.rightimg=require("@/assets/images/首页改1_13.gif")
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  .banner_con {
    width: 3.58rem;
    height: 3.37rem;
    background: white;
    border-radius: 0.05rem;
    .title_img {
      width: 100%;
      height: 0.54rem;
      margin-bottom: 0.05rem;
      img {
        width: 100%;
        height: 0.54rem;
      }
    }
    .swiper3 {
      width: 100%;
      height: 1.98rem;
      margin-bottom: 0.05rem;
      .swiper-button-next{
          width: .27rem;
          height: .27rem;
          border-radius: 50%;
      }
      .swiper-button-prev{
           width: .27rem;
          height: .27rem;
          border-radius: 50%;
      }
      .swiper1-wrapper {
        width: 100%;
        height: 1.98rem;
        .swiper-slide {
          width: 100%;
          height: 1.98rem;
          img {
            width: 100%;
            height: 1.98rem;
          }
        }
      }
    }
    .swiper4 {
      width: 100%;
      height: 0.67rem;
      justify-content: space-between;
      .swiper4-wrapper {
        width: 100%;
        height: 0.67rem;
        display: flex;
        justify-content: space-between;
        .swiper-slide {
          width: 0.67rem;
          height: 0.67rem;
          display: flex;
          justify-content: space-between;
          img {
            width: 0.67rem;
            height: 0.67rem;
          }
        }
      }
    }
  }
}
</style>
