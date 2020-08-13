<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li>
        <label for="countries" class="select-label">Select Country</label>
        <select
          name="countries"
          id="countries"
          v-model="selectedCountry"
          @change="onCountrySelect($event)"
          class="count-select"
        >
          <option
            :value="countries.name"
            v-for="country in countries"
            :key="country.id"
            class="count-option"
            >{{ country.name }}</option
          >
        </select>
      </li>
      <li>
        <label for="states" class="select-label">Select State</label>
        <select
          name="states"
          id="states"
          v-model="selectedState"
          @change="onStateSelect($event)"
          class="count-select"
        >
          <option
            :value="states.name"
            v-for="state in states"
            :key="state.id"
            class="count-option"
            >{{ state.name }}</option
          >
        </select>
      </li>
      <li v-if="stateError" :class="{ empty: stateError }">
        <p>This Country Has No States!</p>
      </li>
      <li>
        <label for="cities" class="select-label">Select City</label>
        <select
          name="cities"
          id="cities"
          v-model="selectedCity"
          class="count-select"
        >
          <option
            :value="cites.name"
            v-for="city in cities"
            :key="city.id"
            class="count-option"
            >{{ city.name }}</option
          >
        </select>
      </li>

      <li v-if="cityError" :class="{ empty: cityError }">
        <p>This State Has No Cities!</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WajapaCountry",
  // name: "countries",
  data() {
    return {
      selectedCountry: "",
      selectedState: "",
      selectedCity: "",
      stateError: false,
      cityError: false,
      countries: [],
      states: [],
      cities: [],
    };
  },
  created() {
    this.$http
      .get(
        "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
      )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.countries = data.slice(0, 251);
      });
  },
  methods: {
    onCountrySelect(event) {
      const state = event.target.value;
      const index = this.countries.findIndex((x) => x.name === state);
      const countryState = this.countries[index]["states"];
      if (countryState.length === 0) {
        this.stateError = !this.stateError;
        this.states = null;
        this.cities = "";
      } else {
        this.states = countryState;
        this.stateError = false;
      }
    },
    onStateSelect(event) {
      const state = event.target.value;
      const index = this.states.findIndex((x) => x.name === state);
      const city = this.states[index]["cities"];
      if (city.length === 0) {
        this.cityError = !this.cityError;
      } else {
        this.cities = city;
        this.cityError = false;
      }
    },
  },

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css");

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
}
a {
  color: #42b983;
}
</style>
