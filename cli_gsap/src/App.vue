<template>
<v-app>
  <SplitText/>
  <VuetifyButton/>
  <!-- <Taiwan/> -->
  <Cloud/>
  <ScrollTrigger/>
</v-app>
</template>

<script>
import ScrollTrigger from './components/ScrollTrigger.vue'
import SplitText from './components/SplitText.vue'
import VuetifyButton from './components/VuetifyButton.vue'
import Cloud from './components/Cloud.vue'
// import Taiwan from './components/Taiwan.vue'

export default {
  name: 'App',
  components: {
    ScrollTrigger,
    SplitText,
    VuetifyButton,
    Cloud
    // Taiwan
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
