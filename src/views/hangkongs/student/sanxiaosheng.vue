<template>
  <div>
    <Three />
    <Pages/>
    <Threes/>
  </div>
</template>
<script>
import Three from "@/views/hangkongs/student/Thschool/school_lun.vue";
import Pages from "@/views/hangkongs/student/Thschool/page.vue";
import Threes from "@/views/hangkongs/student/Thschool/school-text.vue";
export default {
  components: {
    Three,
    Pages,
    Threes
  },
};
</script>