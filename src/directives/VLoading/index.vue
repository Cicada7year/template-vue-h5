<template>
  <LiOverlay class="v-loading__overlay" type="white" :show="show">
    <LiLoading class="v-loading__loading"></LiLoading>
  </LiOverlay>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss">
.v-loading__parent {
  position: relative;
  .v-loading__overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>