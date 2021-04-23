<template>
  <div class="card">
    <div class="card-content">
      <span class="content">
          <button @click="topThree">Top Three</button>
      </span><span style="margin: 4px"></span>
      <span>
        <button @click="createOrder">New Order</button>
      </span>
    </div>
  </div>
  <div class="card split is-dark" v-for="order of orders" :key="order.id">
    <header class="card-header">
      <h1 class="card-header-title">Order Number: {{ order.orderNumber }}</h1>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ order.description }}</p>
        <time datetime="{{order.updated_at}}"
        >Order Created at: {{ order.created_at }}
        </time
        >
      </div>
    </div>
  </div>
</template>

<script>
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

<style>
</style>