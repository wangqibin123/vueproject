<template>
  <div class="unit">
    <div class="unit-body">
      <div class="unit-img">
        <img src="@/assets/img/公共/合作单位_03.jpg" alt="" />
      </div>
      <ul>
        <li v-for="(item, index) in imag" :key="index">
          <img :src="item.img" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imag: [
        { img: require("@/assets/img/公共/vip地勤专业_10.png") },
        { img: require("@/assets/img/公共/vip地勤专业_12.png") },
        { img: require("@/assets/img/公共/vip地勤专业_15.png") },
        { img: require("@/assets/img/公共/vip地勤专业_16.png") },
        { img: require("@/assets/img/公共/vip地勤专业_19.png") },
        { img: require("@/assets/img/公共/vip地勤专业_20.png") },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.unit {
  width: 100%;
  margin-top: 0.15rem;
  display: flex;
  justify-content: center;
  .unit-body {
    width: 3.55rem;
    height: 4.11rem;
    background: white;
    border-radius: 0.05rem;
    .unit-img {
      width: 3.55rem;
      height: 0.55rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      li {
        width: 1.63rem;
        height: 1.05rem;
        background-color: #00ffff;
        border: solid 1px #c5c5c5;
        margin-top: 0.1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>