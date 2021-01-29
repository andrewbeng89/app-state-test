<template>
  <div class="hello">
    <h1>Local Component</h1>
    <h2>{{ state.counter }}</h2>
    <button @click="dispatch({ type: 'INCREMENT' })">INCREMENT</button>
  </div>
</template>

<script>
import { useStore } from '../store';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const { state, dispatch } = useStore();

    return { state, dispatch };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
