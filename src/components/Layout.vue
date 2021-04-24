<template>

</template>

<script>
export default {
  name: "Layout",

    data() {
      return {
        components: {
          'list-view': {
            props: ['item'],
            template: `
        <header class="card-header">
          <h1 class="card-header-title">Order Number: {{ item }}</h1>
        </header>
        <div class="card-content">
          <div class="content">
            <p>{{ item }}</p>
          </div>
        </div>
        `

          },
      }
    }
  }
}
</script>

<style scoped>

</style>