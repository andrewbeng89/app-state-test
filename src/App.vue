<template>
  global state: {{ state.counter }}
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="foo.dispatch('setBar', 'foobar')">TEST</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from "./store";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const { state, dispatch, foo } = store;

    return { state, foo, dispatch };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
