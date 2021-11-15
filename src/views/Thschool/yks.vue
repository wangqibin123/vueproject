<template>
  <div>
    <div class="header-yks">
      <div class="box_show">
        <img src="../../assets/images2/国际航空服务与管理_58.jpg" alt="" />
      </div>
      <div class="header-kc">
        <img src="../../assets/images2/国际航空服务与管理_26.jpg" alt="" />
        <ul class="header-wz">
          <li>
            空乘就是大学选择读空中乘务专业，也就是未来当上大家说的空姐、空少
            艺考就是通过艺术类专业考试，拿到学校专业合格证后再在高考报考中报名
            该学校。简单来说空乘艺考是和美术呀，播音呀类似的形式，为有蓝天梦，
            想低分进高校的学生一次特别好的机会...
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "yks",
  components: {
    
  },
};
</script>
<style lang="scss">

.header-yks {
  width: 3.55rem;
  height: 2.67rem;
  background: #fdfcfc;
  margin: auto;
  border-radius: 0.05rem;
  overflow: hidden;
}
.box_show {
  width: 3.55rem;
  height: 0.55rem;
  border-radius: 0.01rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.header-kc {
  width: 3.55rem;
  height: 1.3rem;
  margin-top: 0.1rem;
  img {
    width: 100%;
    height: 100%;
  }
  .header-wz {
    width: 3.29rem;
    height: 0.62rem;
    margin: 0 auto;
    overflow: hidden;
    li {
      font-family: PingFang-SC-Bold;
      font-size: 0.1rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #000000;
      text-indent: 0.12rem;
      line-height: 0.16rem;
    }
  }
}
</style>