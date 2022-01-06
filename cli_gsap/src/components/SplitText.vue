<template>
<div class="container">
  <div id="target" v-split-characters>
      書法是書寫文字的方法，一種書寫的藝術。書法縱向穿透兩個層面：「使用」與「審美」；橫向跨越文字兩個層面：「文字」、「繪畫」。書法除了是書法家用以創作的主要表現和作品形式，也是一種研究書寫者心理與性格的工具。各地域依其在地歷史與文化發展出自有的書法特色，而書法至今仍廣泛應用於生活與藝術文化等層面。
  </div>
</div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250, 232, 208);
  overflow: hidden;
  #target {
    font-size: 1.5rem;
    font-family: 'Noto Serif TC', serif;
    line-height: 2.5;
    span {
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>

<script>
import Vue from 'vue'
import { gsap } from 'gsap'
// import SplitType from 'split-type'
import VueSplitCharacters from 'vue-split-characters'
Vue.use(VueSplitCharacters)

// const text = new SplitType('#target', { types: 'chars' })
// SplitType.defaults = { absolute: true }
// console.log('1.', text)
// console.log('2.', text.chars)

export default {
  mounted () {
    gsap.set('#target span', {
      position: 'relative',
      display: 'inline-block'
    })
    gsap.from('#target span', {
      stagger: {
        each: 0.05,
        delay: 0.1,
        repeatDelay: 5,
        from: 'random'
      },
      opacity: 0,
      x: '+=random(-500,500)',
      y: '+=random(-500, 500)',
      z: '+=random(-500, 500)',
      repeat: -1,
      duration: 2.5,
      scale: 'random(-1, 2)'
    })
  }
}
</script>
