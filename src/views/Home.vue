<template>
  <div class="home">
    <router-link to="/">Home<router-link> | 
    <router-link to="/suppliers">Suppliers<router-link> | 
    <router-link to="/orders">Orders<router-link> | 
    <router-link to="/product_suppliers">Product Suppliers<router-link>

      <router-view>
  </div>
</template>

<!-- <script>
// // @ is an alias to /src
// import ProductSuppliers from "@/components/suppliers/ProductSuppliers.vue";

// export default {
//   name: "Home",
//   components: {
//     ProductSuppliers,
//   },
// };
//
</script> -->
