
/* eslint-disable vue/multi-word-component-names */
<template>
  <div id="main">
    <Header title="我的喵喵"></Header>
    <div id="content">
      <login></login>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue';
import Tabbar from '@/components/tabbar/tabbar.vue';
import login from '@/components/login/login.vue';
export default {
name:"minE",
components: {
    Header,
    Tabbar,
    login
  }
}
</script>

<style>

</style>