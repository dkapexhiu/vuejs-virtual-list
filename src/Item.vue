<template>
  <div class="item">
    <div class="id">
    <div class="name">{{ source.name }}</div>
    <div class="details">{{ source.name }}<br/>
    L {{ source.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    source: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;
  padding: 1em;
}
.details {
  background-color: beige;
}
.name {
  background-color: aquamarine;
}
</style>
