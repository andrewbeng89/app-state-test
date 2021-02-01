<template>
  <div class="hello">
    <h1>Local Component</h1>
    <h2>{{ state.counter }}</h2>
    <button @click="increment()">INCREMENT</button>
    <!-- <button @click="state.counter += 1">INCREMENT</button> -->
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const { state, dispatch } = store;

    const increment = () => {
      dispatch("increment");
    };

    return { state, increment };
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
