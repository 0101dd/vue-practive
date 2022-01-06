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
  #target {
    font-size: 1.5rem;
    font-family: '新細明體';
    line-height: 2.5;
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
        each: 0.1,
        delay: 0.2,
        repeatDelay: 5,
        from: 'random',
        y: 'random(-500, 500)',
        // y: gsap.utils.random(-500, 500),
        // z: gsap.utils.random(-500, 500),
        scale: 0.1
      },
      opacity: 0,
      repeat: -1,
      duration: 3.5
    })
  }
}

</script>
