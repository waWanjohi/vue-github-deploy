<template>
  <div class="container">
    <SupplierList />
  </div>
</template>

<script>
// @ is an alias to /src
import SupplierList from "../../components/suppliers/SupplierList";

export default {
  name: "Suppliers",
  components: {
    SupplierList,
  },
};
</script>
