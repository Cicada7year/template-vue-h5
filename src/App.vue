<!--
 * @Description: 
 * @Date: 2020-06-01 14:39:38
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 17:27:26
--> 
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import U from "@u";
export default {
  mounted() {
    console.log(U);
  }
};
</script>

<style>
</style>
