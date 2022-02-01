<template>
  <v-app id="app">
    <v-main>
      <transition name="animation">
      <router-view class="router"></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<style>
.animation-enter-active {
  animation: thisOne 1.2s steps(24);
}
/* .animation-leave-active {
  animation: cd-sequence-reverse 0.8s steps(24);
} */

.router {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-2%);
  height: 100%;
  width: 2500%;
  background: url(./assets/ink.png) no-repeat 0 0;
  background-size: 100% 100%;
}
@keyframes thisOne {
  0% {
    -webkit-transform: translateY(-50%) translateX(-2%);
    -moz-transform: translateY(-50%) translateX(-2%);
    -ms-transform: translateY(-50%) translateX(-2%);
    -o-transform: translateY(-50%) translateX(-2%);
    transform: translateY(-50%) translateX(-2%);
  }
  50% {
    -webkit-transform: translateY(-50%) translateX(-98%);
    -moz-transform: translateY(-50%) translateX(-98%);
    -ms-transform: translateY(-50%) translateX(-98%);
    -o-transform: translateY(-50%) translateX(-98%);
    transform: translateY(-50%) translateX(-98%);
  }
  100% {
    -webkit-transform: translateY(-50%) translateX(-2%);
    -moz-transform: translateY(-50%) translateX(-2%);
    -ms-transform: translateY(-50%) translateX(-2%);
    -o-transform: translateY(-50%) translateX(-2%);
    transform: translateY(-50%) translateX(-2%);
  }
}

@keyframes cd-sequence {
  0% {
    /* translateX(-2%) is used to horizontally center the first frame inside the viewport */
    -webkit-transform: translateY(-50%) translateX(-2%);
    -moz-transform: translateY(-50%) translateX(-2%);
    -ms-transform: translateY(-50%) translateX(-2%);
    -o-transform: translateY(-50%) translateX(-2%);
    transform: translateY(-50%) translateX(-2%);
  }
  100% {
    /* translateX(-98%) (2% + 96) is used to horizontally center the last frame inside the viewport  */
    -webkit-transform: translateY(-50%) translateX(-98%);
    -moz-transform: translateY(-50%) translateX(-98%);
    -ms-transform: translateY(-50%) translateX(-98%);
    -o-transform: translateY(-50%) translateX(-98%);
    transform: translateY(-50%) translateX(-98%);
  }
}

@keyframes cd-sequence-reverse {
  0% {
    -webkit-transform: translateY(-50%) translateX(-98%);
    -moz-transform: translateY(-50%) translateX(-98%);
    -ms-transform: translateY(-50%) translateX(-98%);
    -o-transform: translateY(-50%) translateX(-98%);
    transform: translateY(-50%) translateX(-98%);
  }
  100% {
    -webkit-transform: translateY(-50%) translateX(-2%);
    -moz-transform: translateY(-50%) translateX(-2%);
    -ms-transform: translateY(-50%) translateX(-2%);
    -o-transform: translateY(-50%) translateX(-2%);
    transform: translateY(-50%) translateX(-2%);
  }
}
</style>
