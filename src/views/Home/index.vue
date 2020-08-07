<template>
  <div class="home">
    <button @click="_getItem">点击</button>
    <div v-loading="dataForm.show" class="lo">
      犯得上犯得上发射点防丢绳防丢绳发生的 犯得上犯得上发射点防丢绳防丢绳发生的
      犯得上犯得上发射点防丢绳防丢绳发生的 犯得上犯得上发射点防丢绳防丢绳发生的
      犯得上犯得上发射点防丢绳防丢绳发生的
    </div>
    <LiImg src="https://ftp.bmp.ovh/imgs/2020/08/83b9da13330cf956.jpg"></LiImg>
    <!-- <VLoading></VLoading> -->
    <!-- <Loading vertical></Loading>
    <Overlay :show="show" @click="show = !show" type='white'></Overlay>
    <button @click="show = !show">
      Toggle
    </button> -->
  </div>
</template>

<script>
// import VLoading from "@c/VLoading";
// import scss from "@/assets/scss/index.scss";
import { loading } from "@u/decorator";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      show: false,
      dataForm: {
        show: false
      }
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    _log() {},
    @loading("dataForm.show")
    async _getItem() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// @import url("~assets/scss/vars/index");
.home {
  font-size: 24px;
  height: 1000vh;

  .lo {
    width: 500px;
    height: 500px;
  }
}
</style>