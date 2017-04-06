<template>
  <div class="button-component">
    <a class="button is-light">{{data.title}}</a>
  </div>
</template>

<script>
export default {
  name: 'button-component',
  props: ['data']
}
</script>

<style scoped>
.button {
  margin-top: 20px;
}
</style>
