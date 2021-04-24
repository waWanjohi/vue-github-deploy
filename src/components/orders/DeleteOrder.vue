<template>
  <form @submit.prevent="deleteOrder">
    <div class="field">
      <input class="input" maxlength="45" required type="number" placeholder="Order ID">
      <button @click="deleteOrder" class="button is-danger">
        Delete
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "DeleteOrder",
  data() {
    return {
      formData: {
        orderId: '',
      }
    }
  },
  methods: {
    deleteOrder() {
      // Fetch products
      const API_URL = "https://codechallenge.pikdrive.com/api";

      fetch(`${API_URL}/orders`)
          .then((response) => response.json())
          .then((order) => {
            this.orders = order.data;
            console.log("The Data:", order.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }
  }

}
</script>

<style scoped>

</style>