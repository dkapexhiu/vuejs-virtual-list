<template>
  <div id="app">
    <div class="wrapper">
      <virtual-list
        class="list"
        style="height: 870px; overflow-y: auto;"
        :data-key="'id'"
        :data-sources="items"
        :data-component="item"
        :estimate-size="50"
        :keeps="50"
      />
    </div>
  </div>
</template>

<script>
import Item from './Item'
import { getData } from './data'

export default {
  name: 'App',
  data() {
    return {
      item: Item,
      items: getData(20000)
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1em;
  padding: 1em;
}
.list {
  border: 2px solid steelblue;
  border-radius: 3px;
}
div[role=group] {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
</style>
