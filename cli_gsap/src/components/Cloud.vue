<template>
<div class="container">
  <p class="cloud">
    書法是書寫文字的方法，一種書寫的藝術。書法縱向穿透兩個層面：「使用」與「審美」；橫向跨越文字兩個層面：「文字」、「繪畫」。書法除了是書法家用以創作的主要表現和作品形式，也是一種研究書寫者心理與性格的工具。各地域依其在地歷史與文化發展出自有的書法特色，而書法至今仍廣泛應用於生活與藝術文化等層面。
  </p>
  <p class="cloud2">
    書法是書寫文字的方法，一種書寫的藝術。書法縱向穿透兩個層面：「使用」與「審美」；橫向跨越文字兩個層面：「文字」、「繪畫」。書法除了是書法家用以創作的主要表現和作品形式，也是一種研究書寫者心理與性格的工具。各地域依其在地歷史與文化發展出自有的書法特色，而書法至今仍廣泛應用於生活與藝術文化等層面。
  </p>
</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted () {
    gsap.from('.cloud', {
      ScrollTrigger: {
        trigger: '.cloud',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 3,
        markers: true
      },
      duration: 3,
      opacity: 0,
      y: '-100px'
    })
    gsap.from('.cloud2', {
      ScrollTrigger: {
        trigger: '.cloud2',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 3
      },
      duration: 3,
      y: '100px',
      opacity: 0
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
</style>
