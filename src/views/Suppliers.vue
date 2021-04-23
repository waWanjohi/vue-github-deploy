<template>
  <div class="home">
    <SupplierList />
  </div>
</template>

<script>
// @ is an alias to /src
import SupplierList from "@/components/suppliers/SupplierList.vue";

export default {
  name: "Home",
  components: {
    SupplierList,
  },
};
</script>
