<template>
  <h1><strong style="text-align: center">ORDERS</strong></h1>
  <router-link class="button is-center is-success" to="/new-order">Create Order</router-link>
  <div class="card split" v-for="order in orders" :key="order.id">
    <h1 class="card-header-title">ORDER NUMBER:: {{ order.orderNumber }}</h1>
    <div class="card-content">
      <div class="content">
        <p>Number of Orders:: {{ order.count }}</p>
    <router-link class="button is-danger" to="/delete-order">Delete</router-link>
      </div>

    </div>
  </div>
</template>


<script>
import "../../main.css"

export default {

  data() {
    return {
      orders: [],
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

    fetch(`${API_URL}/orders`)
        .then((response) => response.json())
        .then((order) => {
          this.orders = order.data;
          console.log("The Data:", order.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }
};
</script>

<style scoped>
</style>