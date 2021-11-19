<template>
  <div class="dv">
      <div class="number">
        <div class="left">
          <img src="@/assets/images2/航空专业详情页_03.png" alt="" />
        </div>
        <div class="right">
          <span class="orange">自我分析：</span>
          <span>本人的个性比较随和乐观，和同事相处和睦，与他人能较</span>
          <span>
            本人的个性比较随和乐观，和同事相处和睦，与他人能较
            好地进行沟通交流与合作。在工作中能认认真真积极参与。</span
          >
        </div>
      </div>
       <div class="number">
        <div class="left">
          <img src="@/assets/images2/航空专业详情页_06.png" alt="" />
        </div>
        <div class="right">
          <span class="blue">发展方向：</span>
          <span>努力做学生学_的合作者、参与者和引导者，做学生的知心
努力做学生学_的合作者、参与者和引导者，做学生的知心</span>
        </div>
      </div>
      <div class="number">
        <div class="left">
          <img src="@/assets/images2/航空专业详情页_03_08.png" alt="" />
        </div>
        <div class="right">
          <span class="green">自我分析：</span>
          <span>本人的个性比较随和乐观，和同事相处和睦，与他人能较</span>
          <span>
            本人的个性比较随和乐观，和同事相处和睦，与他人能较
            好地进行沟通交流与合作。在工作中能认认真真积极参与。</span
          >
        </div>
      </div>
       
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dv{
    padding-bottom: .15rem;
}
.number {
  width: 3.14rem;
  margin: 0.15rem 0.1rem;
  padding-bottom: 0.15rem;
  border-bottom: 1px dotted rgb(153, 153, 153);
  overflow: hidden;
  .left {
    float: left;
    width: 0.51rem;
    img {
      width: .68rem;
      height: 0.68rem;
    }
  }
  .right {
    width: 2.53rem;
    float: left;
    padding-left: .1rem;
    font-size: 0.12rem;
    .orange {
      color: rgb(255, 51, 0);
    }
    .blue {
      color: rgb(0, 102, 153);
    }
    .green {
      color: rgb(0, 136, 24);
    }
    .pink {
      color: rgb(126, 0, 146);
    }
  }
}
</style>