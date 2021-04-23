<template>
  <div class="home">
    <OrderList />
  </div>
</template>

<script>
// @ is an alias to /src
import OrderList from "@/components/orders/OrderList.vue";

export default {
  name: "Home",
  components: {
    OrderList,
  },
};
</script>