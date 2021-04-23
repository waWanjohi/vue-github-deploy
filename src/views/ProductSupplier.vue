<template>
  <div class="home">
    <ProductSuppliers />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductSuppliers from "@/components/suppliers/ProductSuppliers.vue";

export default {
  name: "Home",
  components: {
    ProductSuppliers,
  },
};
</script>