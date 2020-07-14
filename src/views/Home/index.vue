<template>
  <div class="home">
    <LiImage
      v-for="(item,index) in list"
      :key="index"
      :width="500"
      thumbnail="https://s1.ax1x.com/2020/07/14/UU6oOP.jpg"
      :src="item"
      block
    ></LiImage>
  </div>
</template>

<script>
import LiImage from "@c/Image";
// import scss from "@/assets/scss/index.scss";
export default {
  name: "Home",
  components: { LiImage },
  data() {
    return {
      list: [
        "http://travelinsingapore.com/wp-content/uploads/2017/05/merlion-park-and-marina-bay-1200x800.jpg",
        "http://file06.16sucai.com/2016/0304/b4188bb01343cd16cf9ef7348390dd87.jpg",
        "http://file06.16sucai.com/2016/0323/c2dae948dfc1540c9f59e935925528d3.jpg",
        "http://img.pconline.com.cn/images/photoblog/7/9/7/8/7978433/20091/26/1232953167446.jpg",
        "https://www.canva.cn/learn/wp-content/uploads/sites/17/2019/09/Snipaste_2019-09-24_15-21-59.png",
        "http://www.51pptmoban.com/d/file/2014/11/26/26916cef4190cdd6d3bca5368b89a346.jpg",
        "https://s1.ax1x.com/2020/05/22/YOqs1I.jpg"
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
// @import url("~assets/scss/vars/index");
.home {
  font-size: 24px;
}
</style>