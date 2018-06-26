<template>
  <div class="container">
    <slider-nav :menuWidth="60" :currentTab.sync="currentTab" :navList="this.navList"></slider-nav>
  </div>
</template>

<script>

import sliderNav from "@/components/slider-nav";
import { navList } from "@/common/js/basic";
export default {
  data() {
    return {
      navList: navList,
      currentTab: 0
    };
  },

  components: {
    sliderNav,
  },

  methods: {},
};
</script>

<style  lang="scss" scoped>
.container {
  height: 100%;
  .swiper-box {
      display: block;
      width: 100%;
      overflow: hidden;
      .swiper-item {
          height: 100%;
          text-align: center;
      }
  }
}
</style>
