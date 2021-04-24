<template>
  <div class="container">
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "../../components/products/ProductList";

export default {
  name: "Products",
  components: {
    ProductList,
  },
};
</script>