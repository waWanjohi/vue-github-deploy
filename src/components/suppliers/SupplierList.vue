<template>
  <div
    class="card split is-dark"
    v-for="supplier of suppliers"
    :key="supplier.id"
  >
    <header class="card-header">
      <h1 class="card-header-title">
        Supplier Number: {{ supplier.supplierNumber }}
      </h1>
    </header>
    <div class="card-content">
      <div class="content">
        <p>description: {{ supplier.description }}</p>
        <time datetime="{{supplier.updated_at}}"
          >supplier Created at: {{ supplier.created_at }}</time
        >
      </div>
    </div>
  </div>
</template>

<script>
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