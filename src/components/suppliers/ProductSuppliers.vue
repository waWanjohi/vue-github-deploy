<template>
  <div
    class="card split is-dark"
    v-for="supplier of suppliers"
    :key="supplier.id"
  >
    <header class="card-header">
      <h1 class="card-header-title">Supplier id: {{ supplier.supplier_id }}</h1>
    </header>
    <div class="card-content">
      <div class="content">
        <p>product id: {{ supplier.product_id }}</p>
        <time datetime="{{supplier.updated_at}}"
          >supplier Created at: {{ supplier.created_at }}</time
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product_suppliers",
  data() {
    return {
      suppliers: [],
    };
  },
  mounted() {
    const API_URL = "https://codechallenge.pikdrive.com/api";
    // Fetch products

    fetch(`${API_URL}/product-suppliers`)
      .then((response) => response.json())
      .then((supplier) => {
        this.suppliers = supplier.data;
        console.log("The Data:", supplier.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style>
</style>