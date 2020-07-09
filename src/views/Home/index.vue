<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
import scss from "@/assets/scss/index.scss";
export default {
  name: "Home",
  components: {},
  async mounted() {
    console.log(scss);
  }
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 24px;
}
</style>