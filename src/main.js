import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  // name: "countries",
  // data() {
  //   return {
  //     selectedCountry: "",
  //     selectedState: "",
  //     selectedCity: "",
  //     stateError: false,
  //     cityError: false,
  //     countries: [],
  //     states: [],
  //     cities: [],
  //   };
  // },
  // created() {
  //   this.$http
  //     .get(
  //       "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
  //     )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       this.countries = data.slice(0, 251);
  //     });
  // },
  // methods: {
  //   onCountrySelect(event) {
  //     const state = event.target.value;
  //     const index = this.countries.findIndex((x) => x.name === state);
  //     const countryState = this.countries[index]["states"];
  //     if (countryState.length === 0) {
  //       this.stateError = !this.stateError;
  //       this.states = null;
  //       this.cities = "";
  //     } else {
  //       this.states = countryState;
  //       this.stateError = false;
  //     }
  //   },
  //   onStateSelect(event) {
  //     const state = event.target.value;
  //     const index = this.states.findIndex((x) => x.name === state);
  //     const city = this.states[index]["mycity"];
  //     if (city.length === 0) {
  //       this.cityError = !this.cityError;
  //     } else {
  //       this.cities = city;
  //       this.cityError = false;
  //     }
  //   },
  // },

  render: (h) => h(App),
}).$mount("#app");
