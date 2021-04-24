<template>
  <div class="container is-center split">
    <div class="card split is-offset-one-fifth " v-for="sale in sales" :key="sale.id">
      <h1 class="card-header-title">ORDER NUMBER:: {{ sale.orderNumber }}</h1>
      <div class="card-content">
        <div class="content">
          <p>Number of Sales:: {{ sale.count }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "../../main.css"

export default {

  data() {
    return {
      sales: [],
    };
  },
  methods: {
    createOrder() {
      console.log("Done")
    }
  },
  mounted() {
    // Fetch products
    const API_URL = "https://codechallenge.pikdrive.com/api";

    fetch(`${API_URL}/top-sales`)
        .then((response) => response.json())
        .then((sale) => {
          this.sales = sale.data;
          console.log("The Data:", sale.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }
};
</script>

<style scoped>
</style>