<template>
  <div>
    <Three />
    <Pages/>
    <Threes/>
  </div>
</template>
<script>
import Three from "../Thschool/school_lun.vue";
import Pages from "../Thschool/page.vue";
import Threes from "../Thschool/school-text.vue";
export default {
  components: {
    Three,
    Pages,
    Threes
  },
};
</script>