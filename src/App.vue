<template>
  <div id="app">
    <Header />
    <WajapaCountry msg="Welcome to Wajapa Countries" />

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset-3>
          <Cscdisplay msg="Selected Country" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import WajapaCountry from "./components/WajapaCountry.vue";
import Cscdisplay from "./components/Cscdisplay.vue";

export default {
  name: "App",
  components: {
    Header,
    WajapaCountry,
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
