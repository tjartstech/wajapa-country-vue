<template>
  <div id="app">
    <Header />
    <Wajapacountries msg="Welcome to Wajapa Countries" />

    <Cscdisplay />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Wajapacountries from "./components/Wajapacountries.vue";
import Cscdisplay from "./components/Cscdisplay.vue";

export default {
  name: "App",
  components: {
    Header,
    Wajapacountries,
    Cscdisplay,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
