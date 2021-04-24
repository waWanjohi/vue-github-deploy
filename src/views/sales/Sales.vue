<template>
  <div class="container">
    <SalesList />
  </div>
</template>

<script>
// @ is an alias to /src
import SalesList from "../../components/sales/SalesList";

export default {
  name: "Sales",
  components: {
    SalesList,
  },
};
</script>