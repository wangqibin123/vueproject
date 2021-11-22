<template>
  <div>
    <div class="int_con">
      <img src="@/assets/images2/banner/四川外国语大学.png" />
    </div>
    <Pages />

    <All />
  </div>
</template>
<script>
import Pages from "@/components/page/index.vue";
import All from "@/views/sichuan/fours/fourall.vue";
export default {
  components: {
    Pages,
    All,
  },
};
</script>
<style lang="scss" scoped>
.int_con {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  img {
    width: 3.75rem;
    height: 1.5rem;
  }
}
</style>