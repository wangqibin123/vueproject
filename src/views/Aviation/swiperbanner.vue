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
            <div class="swiper-slide" v-for="item in img" :key="item.type">
              <img :src="item.picture" />
            </div>
          </div>
              <img :src="rightimg" @click="right" class="swiper-button-next"/>
              <img :src="leftimg"  @click="left" class="swiper-button-prev"/>
        </div>
      </div>

       <div thumbsSlider class="swiper swiper4">
        <div class="swiper-container" id="swiperFour">
          <div class="swiper-wrapper swiper4-wrapper">
            <div class="swiper-slide act" v-for="item in img2" :key="item.type">
              <img :src="item.pic" />
            </div>
          </div>
        </div>
      </div>
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
      shang:'0',
      xia:'0',
      img: [
        { picture: require("@/assets/images2/1.jpg"),type:'0'},
        { picture: require("@/assets/images2/2.jpg"),type:'1' },
        { picture: require("@/assets/images2/3.jpg"),type:'2' },
        { picture: require("@/assets/images2/4.jpg"),type:'3' }, 
        { picture: require("@/assets/images2/5.jpg"),type:'4' },
      ],
      img2: [
        { pic: require("@/assets/images2/国际航空服务与管理_44.jpg"),type:'0' },
        { pic: require("@/assets/images2/国际航空服务与管理_46.jpg"),type:'1' },
        { pic: require("@/assets/images2/国际航空服务与管理_48.jpg"),type:'2' },
        { pic: require("@/assets/images2/国际航空服务与管理_50.jpg"),type:'3'},
        { pic: require("@/assets/images2/国际航空服务与管理_52.jpg"),type:'4' },
      ],
      rightimg:require("@/assets/images2/未标题-1_03.png"),
      leftimg:require("@/assets/images2/题-1_03.png"),
    };
  },
  mounted() {
    var thumbsSwiper = new Swiper("#swiperFour", {
      spaceBetween: 1,
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
      if(this.rightimg==require("@/assets/images2/题-1_06.png")){
        this.leftimg=require("@/assets/images2/未标题-1_06.png")
        this.rightimg= require("@/assets/images2/未标题-1_03.png")
      }
    },
    right(){
      if(this.leftimg=require("@/assets/images2/题-1_06.png")){
        this.leftimg=require("@/assets/images2/题-1_03.png")
        this.rightimg=require("@/assets/images2/题-1_06.png")
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
          opacity: .7;
      }
      .swiper-button-prev{
           width: .27rem;
          height: .27rem;
          opacity: .7;
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
    // .swiper4 {
    //   width: 100%;
    //   height: 0.67rem;
    //   // justify-content: space-between;
    //   .swiper4-wrapper {
    //     width: 100%;
    //     height: 0.67rem;
    //     display: flex;
    //     justify-content: space-between;
    //     .swiper-slide {
    //       width: 0.67rem;
    //       height: 0.67rem;
    //       display: flex;
    //       justify-content: space-between;
    //       img {
    //         width: 0.67rem;
    //         height: 0.67rem;
    //       }
    //     }
    //     .act{
    //       border: .01rem solid red;
    //       box-sizing: border-box;
    //     }
    //   }
    // }
  }
}
.swiper4 {
      width: 100%;
      height: 0.67rem;
      // justify-content: space-between;
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
            width: 0.69rem;
            // width: 100%;
            height: 0.64rem;
          }
        }
        
      }
    }
     .swiper4 {
        height: 0.67rem;
        box-sizing: border-box;
        padding: .05rem 0;
      }

      .swiper4 .swiper-slide {
        width: 25%;
        height: 100%;
      }

      .swiper4 .swiper-slide-thumb-active {
        // opacity: 1;
        box-sizing: border-box;
        border:0.01rem solid #00c6ec;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        // height: 100%;
        object-fit: cover;
      }
</style>
