<template>
  <div id="app">
    <mf-header></mf-header>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <mf-footer></mf-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { 'mf-header':Header, 'mf-footer':Footer}
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
