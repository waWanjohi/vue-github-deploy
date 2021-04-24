<template>
  <div class="tile is-parent">
    <div class="card">
      <form class="p-4" method="post" @submit.prevent="handleClick">
        <div class="field">
          <div class="">
            <input id="item" v-model="formData.items" required name="items[]" class="input" placeholder="Item">
          </div>
        </div>
        <div class="field">
          <div class="control is-medium">
            <input id="itemId" v-model="formData.itemId" class="input is-medium" required type="number"
                   placeholder="Order Id">
          </div>
        </div>
        <div class="field">
          <div class="control is-large">
            <input id="itemQuantity" v-model="formData.itemQuantity" required class="input is-large" type="number"
                   placeholder="Item Quantity">
          </div>
        </div>
        <div>
          <button class="button is-success" v-if="formData" @click="cantPost">Create</button>
        </div>

        <div class="modal">
          <div class="modal-background"></div>
          <div class="modal-content">
            <!-- Any other Bulma elements you want -->
          </div>
          <button class="modal-close is-large" aria-label="close">Modal</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: "CreateOrder",
  data() {
    return {
      formData: {
        items: '',
        itemId: '',
        itemQuantity: ''
      }
    }
  },
  methods: {
    handleClick() {
      const API_URL = "https://codechallenge.pikdrive.com/api"
      axios.post(`${API_URL}/orders`, this.formData)
          .then(response => console.log(response))
          .catch(error => console.log(`WE HAVE A PROBLEM:\n ${error}`))
    },
    cantPost() {
      console.log(this.formData)
      this.axios.post(`https://codechallenge.pikdrive.com/api/orders`, this.formData)
          .then((response) => console.warn(response))
          .catch((err) => console.warn(err))
    }
  }
}
</script>

<style scoped>

</style>