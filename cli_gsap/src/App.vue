<template>
<v-app>
  <ScrollTrigger/>
  <SplitText/>
  <VuetifyButton/>
</v-app>
</template>

<script>
import ScrollTrigger from './components/ScrollTrigger.vue'
import SplitText from './components/SplitText.vue'
import VuetifyButton from './components/VuetifyButton.vue'
export default {
  name: 'App',
  components: {
    ScrollTrigger,
    SplitText,
    VuetifyButton
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
