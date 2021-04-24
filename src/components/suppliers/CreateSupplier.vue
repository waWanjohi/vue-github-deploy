<template>
  <div class="tile is-parent">
    <div class="card">
      <form class="p-4" method="post" @submit.prevent="handleClick">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" maxlength="45" required type="text" placeholder="Supplier's Name">
            <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button @click="cantPost" class="button is-success">
              Add
            </button>
          </p>
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
      }
    }
  },
  methods: {
    handleClick() {
      const API_URL = "https://codechallenge.pikdrive.com/api"
      axios.post(`${API_URL}/suppliers`, this.formData)
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