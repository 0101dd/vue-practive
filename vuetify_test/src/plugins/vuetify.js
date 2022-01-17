import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#45312a',
        secondary: '#7e2f28',
        info: '#d58e40'
      }
    }
  }
})
