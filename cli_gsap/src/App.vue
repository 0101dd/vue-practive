<template>
<div id="app">
  <!-- <ScrollTrigger msg="Hello Vue 3 in CodeSandbox!" /> -->
  <SplitText/>
</div>
</template>

<script>
// import ScrollTrigger from './components/ScrollTrigger.vue'
import SplitText from './components/SplitText.vue'

export default {
  name: 'App',
  components: {
    // ScrollTrigger,
    SplitText
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
