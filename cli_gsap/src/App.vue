<template>
  <HelloWorld msg="Hello Vue 3 in CodeSandbox!" />
</template>

<script>
import HelloWorldVue from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld: HelloWorldVue
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
