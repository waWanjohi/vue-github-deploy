<template>
  <div class="container">
    <router-link to="new-order">Create Order</router-link>
    <OrderList />
  </div>
</template>

<script>
// @ is an alias to /src
import OrderList from "../../components/orders/OrderList";

export default {
  name: "Orders",
  components: {
    OrderList,
  },
};
</script>