<template>
  <div>
    <HeaderLun/>
    <page/>
    <div class="people">
        <div>
            <img src="@/assets/img/招生要求/招生要求_03.jpg" alt="">
            <img src="@/assets/img/招生要求/招生要求_05.jpg" alt="">
            <img src="@/assets/img/招生要求/招生要求_07.jpg" alt="">
            <img src="@/assets/img/招生要求/招生要求_12.jpg" alt="">
            <img src="@/assets/img/招生要求/招生要求_13.jpg" alt="">
            <img src="@/assets/img/招生要求/招生要求_14.jpg" alt="">
            <img src="@/assets/img/招生要求/招生要求_18.jpg" alt="">
            <img src="@/assets/img/招生要求/招生要求_19.jpg" alt="">
            <img src="@/assets/img/招生要求/招生要求_20.jpg" alt="">
        </div>
    </div>
    <Major/>
    <Enroll/>
    <Environment/>
  </div>
</template>

<script>
import HeaderLun from "@/components/header-lun/header_lun.vue";
import page from "@/components/page/index.vue";

import Major from '@/views/zhaoshengyaoqiu/requirement/major.vue';
import Enroll from '@/views/zhaoshengyaoqiu/requirement/enroll.vue';
import Environment from '@/views/zhaoshengyaoqiu/requirement/environment.vue';
export default {
  components: {
    HeaderLun,
    Major,
    Enroll,
    Environment,
    page
  },
};
</script>
<style lang="scss" scoped>


.people{
    width: 3.55rem;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    justify-content: space-around;
    padding-bottom: .02rem;
    margin: 0 auto;
    div{
        width: 1rem;
        height: .85rem;
        background: red;
        float: left;
        img{
            width: 100%;
            height: 100%;
        }
        margin: .1rem 0 .08rem;
    }
}
</style>