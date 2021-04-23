<template>
  <div class="card split" v-for="product of products" :key="product.id">
    <header class="card-header">
      <h1 class="card-header-title">{{ product.name }}</h1>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{ product.description }}</p>
        <time datetime="{{product.updated_at}}">{{ product.created_at }}</time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    const API_URL = "https://codechallenge.pikdrive.com/api";
    // Fetch products

    fetch(`${API_URL}/products`)
      .then((response) => response.json())
      .then((someInfo) => {
        this.products = someInfo.data;
        console.log("The Data:", someInfo.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style>
</style>