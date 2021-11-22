<template>
  <div class="Cthere">
    <div class="lun_warp">
        <div class="lun_con">
            <img src="@/assets/img/初中生/初中生.jpg" alt="">
        </div>
    </div>
    <page />
    <div class="Green">
      <div class="Ctit">
        <img src="@/assets/img/初中生/初中生成长计划说明_03.jpg" alt="" />
      </div>
      <div class="Ccen">
        <img src="@/assets/img/初中生/初中生2_03.jpg" alt="" />
      </div>
     <Explain />
    </div>

    <div class="bott">
      <div class="Ctit">
        <img src="@/assets/img/初中生/0002_03.jpg" alt="" />
      </div>
       <div class="Ccen">
        <img src="@/assets/img/初中生/初中生2_06.jpg" alt="" />
      </div>
      <div class="img2">
        <img style="width:1.55rem;height:.3rem" src="@/assets/img/初中生/初中生2_04.jpg" alt="">
        <img style="width:.19rem;height:.13rem;padding-top:.09rem" src="@/assets/img/初中生/初中生2_08.jpg" alt="">
        <img style="width:1.55rem;height:.3rem" src="@/assets/img/初中生/初中生2_05.jpg" alt="">
      </div>
      <div class="lits">
        <div class="left">
          <p>
            <span>解题方向不清楚</span>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_14.jpg" alt="">
          </p>
           <p>
            <span>粗心大意</span>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_14.jpg" alt="">
          </p>
           <p>
            <span>基础薄弱</span>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_14.jpg" alt="">
          </p>
           <p>
            <span>苦学无效</span>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_14.jpg" alt="">
          </p>
           <p>
            <span>动力不足</span>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_14.jpg" alt="">
          </p>
           <p>
            <span>知识生疏</span>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_14.jpg" alt="">
          </p>
           <p>
            <span>缺少拓展思路</span>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_14.jpg" alt="">
          </p>
           <p>
            <span>愁眉苦脸式</span>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_14.jpg" alt="">
          </p>
        </div>
        <div class="right">
          <p>
            <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_17.jpg" alt="">
            <span>免费的衣、食、住、行</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_17.jpg" alt="">
            <span>就业待遇好</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_17.jpg" alt="">
            <span>职业稳定性</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_17.jpg" alt="">
            <span>一年内工作半年</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_17.jpg" alt="">
            <span>欣赏各国风光</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_17.jpg" alt="">
            <span>增长见识</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_17.jpg" alt="">
            <span>提高交际能力</span>
          </p>
           <p>
             <img src="@/assets/img/初中生/C-_Users_Administrator_Desktop_初中生2_17.jpg" alt="">
            <span>产假待遇好</span>
            
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Explain from '@/components/explain/explain.vue'
import page from "@/components/page/index.vue";
export default {
  components: {
    Explain,
    page
  },
};
</script>
<style lang="scss" scoped>
.Cthere {
  width: 3.75rem;
  margin: 0 auto;
}
 .lun_warp{
        width: 100%;
        height: 1.50rem;
        .lun_con{
            width: 3.75rem;
            height: 1.50rem;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

.Green {
  width: 3.56rem;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  border-radius: 0.05rem;
  margin-bottom: 0.15rem;
}
.Ctit img {
  width: 3.56rem;
  background-color: #1c6ca5;
  border-radius: 0.05rem 0.05rem 0 0;
}
.Ccen {
  padding: 0.1rem;
}
.Ccen img {
  width: 3.35rem;
  height: 1.3rem;
}
.Czi {
  width: 3.35rem;
  height: 0.75rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.12rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
  margin: 0.15rem 0.1rem 0.05rem 0.1rem;
}




.bott {
  width: 3.55rem;
  background-color: #ffffff;
  box-shadow: 1px 2px 2px 0px rgba(228, 228, 228, 0.51);
  border-radius: 0.05rem;
  margin: 0 auto;
  margin-bottom: .15rem;

}
.img2{
  display: flex;
  justify-content: space-between;
}
.lits{
  display: flex;
  justify-content: space-between;
  padding-bottom:.2rem ;
  .left{
    width: 1.55rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-end;
    p{
      span{
        padding-right: .09rem;
        font-size: .12rem;
        font-family: PingFang-SC-Medium;
        color: #666666;
      }
      img{
        width:.11rem ;
        height: .11rem;
      }
    }
  }
  .right{
     width: 1.55rem;
    p{
      span{
        padding-left: .09rem;
        font-size: .12rem;
        font-family: PingFang-SC-Medium;
        color: #666666;
      }
      img{
        width: .16rem;
        height: .11rem;
      }
    }
  }
}




</style>
