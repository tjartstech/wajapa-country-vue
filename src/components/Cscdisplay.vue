<template>
  <div class="column-6">
    <div class="selected-options">
      <p v-if="selectedCountry">
        <span class="s-o">Country :</span>
        {{ selectedCountry }}
      </p>
      <br />

      <p v-if="selectedState">
        <span class="s-o">State:</span>
        {{ selectedState }}
      </p>
      <br />

      <p v-if="selectedCity">
        <span class="s-o">City:</span>
        {{ selectedCity }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cscdisplay",

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
