<template>
<header>
<div class="container">
  <div class="cloud">
    書法是書寫文字的方法，一種書寫的藝術。書法縱向穿透兩個層面：「使用」與「審美」；橫向跨越文字兩個層面：「文字」、「繪畫」。書法除了是書法家用以創作的主要表現和作品形式，也是一種研究書寫者心理與性格的工具。各地域依其在地歷史與文化發展出自有的書法特色，而書法至今仍廣泛應用於生活與藝術文化等層面。
  </div>
  <div class="cloud2">
    書法是書寫文字的方法，一種書寫的藝術。書法縱向穿透兩個層面：「使用」與「審美」；橫向跨越文字兩個層面：「文字」、「繪畫」。書法除了是書法家用以創作的主要表現和作品形式，也是一種研究書寫者心理與性格的工具。各地域依其在地歷史與文化發展出自有的書法特色，而書法至今仍廣泛應用於生活與藝術文化等層面。
  </div>
</div>
<section></section>
</header>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted () {
    gsap.from('.cloud', {
      scrollTrigger: {
        trigger: '.cloud',
        start: 'top center',
        end: 'bottom center',
        markers: true,
        scrub: 2
      },
      opacity: 0,
      duration: 1,
      y: '200px'
    })
    gsap.from('.cloud2', {
      scrollTrigger: {
        trigger: '.cloud2',
        start: 'top 80%',
        end: 'bottom 20%',
        // markers: true,
        scrub: 3
      },
      opacity: 0,
      duration: 1,
      y: '200px'
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

section {
  height: 500px;
  width: 100%;
  background: aquamarine;
}
</style>
