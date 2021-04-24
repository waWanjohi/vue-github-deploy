<template>
  <h1><strong style="text-align: center">SUPPLIERS</strong></h1>
  <router-link class="button is-center is-success" to="/new-supplier">Add Supplier</router-link>

  <div
      class="card split is-dark is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
      v-for="supplier of suppliers"
      :key="supplier.id"
  >
      <h1 class="card-header-title">
        {{ supplier.name }}
      </h1>
  </div>
</template>

<script>
import "../../main.css"

export default {
  name: "suppliers",
  data() {
    return {
      suppliers: [],
    };
  },
  mounted() {
    const API_URL = "https://codechallenge.pikdrive.com/api";
    // Fetch products

    fetch(`${API_URL}/suppliers`)
        .then((response) => response.json())
        .then((supply) => {
          this.suppliers = supply.data;
          console.log("The Data:", supply.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  },
};
</script>

<style>
</style>