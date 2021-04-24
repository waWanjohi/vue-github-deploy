<template>

  <div class="tile is-parent">
    <div class="card">
      <form class="p-4" method="post" @submit.prevent="handleClick">
      <div class="field">
        <div class="control is-loading">
          <input id="item" v-model="formData.name" required maxlength="45" class="input" type="text" placeholder="Product name">
        </div>
      </div>
      <div class="field">
        <div class="control is-medium is-loading">
          <input id="itemId" v-model="formData.description" maxlength="45" class="input is-medium" type="text"
                 placeholder="Some Description">
        </div>
      </div>
      <div class="field">
        <div class="control is-large is-loading">
          <input id="itemQuantity" v-model="formData.quantity" class="input is-large" type="number"
                 placeholder="Number of Products eg: 3">
        </div>
      </div>
      <div>
        <button @click="cantPost">Add Product</button>
      </div>

      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close is-large" aria-label="close">Modal</button>
      </div>
    </form>
    </div></div>

</template>

<script>
import axios from 'axios';
export default {
  name: "CreateProduct",
  data() {
    return {
      formData: {
        name: '',
        description: '',
        quantity: ''
      }
    }
  },
  methods: {
    handleClick() {
      const API_URL = "https://codechallenge.pikdrive.com/api"
      axios.post(`${API_URL}/products`, this.formData)
          .then(response => console.log(response))
          .catch(error => console.log(`WE HAVE A PROBLEM:\n ${error}`))
    },
    cantPost() {
      alert("Can't post now. Try again later")
    }
  }
}
</script>

<style scoped>

</style>