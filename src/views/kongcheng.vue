<template>
  <div class="int">
    <div class="int_con">
          <img src="@/assets/images/首页改1_27.gif" />
    </div>
    <div class="page">
      <p>
        当前位置：
       <router-link to="/"><span class="shouye">首页</span></router-link>>空乘专业
      </p>
    </div>
    <!-- 专业介绍 -->
    <div class="major">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="major_con">
        <img src="@/assets/images/首页改1_31.gif" />
        <div class="intr_text">
          <div
            class="text_con"
          >空乘专业是培养适应21世纪民航运输事业发展，具有坚实的英语基础、突出英语应用能力，较高的人文素质，受过专门航空运输技能知识训练的实用型民航高级空中
乘务员。</div>
        </div>
      </div>
    </div>
    <!-- 专业优势 -->
     <div class="major">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="major_con">
        <img src="@/assets/images/首页改1_31.gif" />
        <div class="intr_text">
          <div
            class="text_con"
          >据权威预测，2010年中国至少需要增加40000名航空服务人员岗位。未来的发展趋势是航空公司的服务不再是出售机票，把乘客送到目的地等简单服务，而是在运营环节上的融旅游业、餐饮业在内的延伸服务、增值服务。从事航空服务工作，工作环境好，收入高。</div>
        </div>
      </div>
    </div>
    <!-- 职业规划 -->
     <div class="major">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="major_con">
        <img src="@/assets/images/首页改1_31.gif" />
        <div class="intr_text">
          <div
            class="text_con"
          >向国内外各类航空公司机构推荐，本专业学生毕业后主要从事民航乘务员和民航安全员及民航地勤等相关工作，也可从事国际邮轮、外资企业、金融保险电信、大众传媒、广告等单位的外事接待、秘书、人事、公关礼仪等管理和实务工作。</div>
        </div>
      </div>
    </div>
    <!-- 合作单位 -->
     <div class="hezuo">
      <img src="@/assets/images2/国际航空服务与管理_58.jpg" />
      <div class="hezuo_con">
          <div class="hezuo_img">
            <img src="@/assets/images2/国际航空服务与管理_79.jpg"/>
            <img src="@/assets/images2/国际航空服务与管理_79.jpg"/>
          </div>
           <div class="hezuo_img">
            <img src="@/assets/images2/国际航空服务与管理_79.jpg"/>
            <img src="@/assets/images2/国际航空服务与管理_79.jpg"/>
          </div>
           <div class="hezuo_img">
            <img src="@/assets/images2/国际航空服务与管理_79.jpg"/>
            <img src="@/assets/images2/国际航空服务与管理_79.jpg"/>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.int {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .int_con {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    img{
      width: 3.75rem;
      height: 1.5rem;
    }
  }
  .page {
    height: 0.53rem;
    width: 3.75rem;
    margin: auto;
    padding: 0.15rem 0.2rem;
    color: #888888;
    font-size: 0.14rem;
    box-sizing: border-box;
    .shouye{
      color: #888888;
    }
  }
  .major {
    width: 3.55rem;
    border-radius: 0.05rem;
    margin-bottom: 0.15rem;
    background: white;
    img {
      width:100%;
      margin-bottom: 0.01rem;
    }
    .major_con {
      width: 100%;
      img {
        width: 100%;
        height: 1.3rem;
        margin-bottom: 0.18rem;
      }
      .intr_text {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 0.12rem;
        .text_con {
          width: 95%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 7;
          overflow: hidden;
        }
      }
    }
  }
  .hezuo{
    width: 3.55rem;
    border-radius: 0.05rem;
    margin-bottom: 0.15rem;
    background: white;
     img {
      width:100%;
      margin-bottom: 0.01rem;
    }
    .hezuo_con{ 
       width: 95%;
      margin: .1rem .1rem 0 .1rem;
       .hezuo_img{
        display: flex;
          justify-content: space-between;
        img{
            width: 1.62rem;
            height: 1.05rem;
            margin-bottom: 0.12rem;
        }
       }
    }
  }
}
</style>