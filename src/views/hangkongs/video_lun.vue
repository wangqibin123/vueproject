<template>
    <div class="video_warp">
        <div class="video_con">
            <div class="swiper-container" id="swiper_con">
                <div class="swiper-wrapper" id="swiper_warp" style="background-color: #fdfafa;">
                    <div class="swiper-slide" id="slide" v-for="item in listimg" :key="item.id">
                       <img :src="item.img" alt="">
                       <img :src="item.img2" alt="">
                    </div>
                </div>
                <img class="swiper-button-prev" :src="leftimg" @click="leftSide" alt="">
                <img class="swiper-button-next" :src="rightimg" @click="rightSide" alt="">
                <div class="swiper-pagination" style="bottom:0;">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { play } from "vue-video-player"
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
    data(){
        return{
            listimg:[
                {
                    id:1,
                    img:require("@/assets/images2/国际航空服务与管理_05.jpg"),
                    img2:require("@/assets/images2/国际航空服务与管理_07.jpg"),
                },
                {
                    id:2,
                    img:require("@/assets/images2/国际航空服务与管理_05.jpg"),
                    img2:require("@/assets/images2/国际航空服务与管理_07.jpg"),
                },
                {
                    id:3,
                    img:require("@/assets/images2/国际航空服务与管理_05.jpg"),
                    img2:require("@/assets/images2/国际航空服务与管理_07.jpg"),
                }
            ],
            leftimg:require("@/assets/images2/首页改1_10.gif"),
            rightimg:require("@/assets/images/未标题-1_03.gif"),
        }
    },
    methods:{
        leftSide(){
            this.leftimg = require("@/assets/images2/题-1_03.png")
            this.rightimg = require("@/assets/images/未标题-1_03.gif")
        },
        rightSide(){
            this.rightimg = require("@/assets/images2/未标题-1_03.png")
            this.leftimg = require("@/assets/images2/首页改1_10.gif")
        }
    },
    mounted() {
        new Swiper ('#swiper_con', {
            loop: true, // 循环模式选项
            autoplay: true, //自动播放
            // 如果需要分页器
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
      })
     
      
    },
   
}
</script>
<style lang="scss" scoped>
    .video_warp{
        width: 100%;
        height: auto;
        .video_con{
            padding: 0 .1rem;
            .swiper-container{
                width: 3.55rem;
                height: 1.29rem;
                #swiper_warp{
                    width: 100%;
                    height: 1.07rem;
                    border-radius: 0.05rem;
                    background-color: #fdfafa;
                    #slide{
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                        img{
                            width: 1.70rem;
	                        height: .97rem;
                            border-radius: .05rem;
                             position: relative;
                        }
                    }
                }
            }
            .swiper-button-prev,.swiper-button-next{
                width: .27rem;
                height: .27rem;
            }
            .swiper-pagination{
                --swiper-theme-color:#00c6ec;
                .swiper-pagination-bullet{
                    width: .11rem;
                    height: .11rem;
                }
            }
        }
    }
    .video-img{
	position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
    background-size:100%;
	cursor:pointer;
    img{
      display:block;
      width: 60px;
      height: 60px;
      position: relative;
      top:260px;
      left: 48%;
    }
}
</style>



