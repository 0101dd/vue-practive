<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { SplitText } from '../../gsap/SplitText.min.js'
// import { onMounted, onUnmounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted () {
    gsap.to('.a1', {
      scrollTrigger: {
        trigger: '.a1',
        start: 'top 60%',
        end: 'bottom 40%',
        markers: true,
        scrub: 5
      },
      duration: 10,
      x: '85vw'
    })
  }
}

</script>

<template>
  <header>
      <section></section>

  <section id="section01">
    <h2>1. 設定 trigger、start 與 end</h2>
    <div class="box a1" ref="a1">a1</div>
  </section>

  <section></section>
  </header>
</template>

<style lang="scss" scoped>

 section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    section:nth-child(odd) {
      background: lightcyan;
    }

    section:nth-child(even) {
      background: lightgray;
      justify-content: center;
    }

    section h2 {
      position: absolute;
      top: 0;
      left: 0;
    }

    .box {
      width: 100px;
      height: 100px;
      color: white;
      font-size: 2rem;
      background: darkorchid;
      display: flex;
      justify-content: center;
      align-items: center;
      /* transition: 0.5s; */
    }
</style>
