<template>
  <div class="todo">
    <h1>This is a todo page</h1>
    <router-link to="/">home</router-link>
    <v-container fluid>
    <v-checkbox
      v-model="custom"
      label="Custom progress bar"
      style="display: none;"
    ></v-checkbox>
    <v-text-field
      v-model="value"
      color="yellow"
      label="註冊用密碼"
      placeholder="請輸入密碼"
      loading
    >
      <template v-slot:progress>
        <v-progress-linear
          v-if="custom"
          :value="progress"
          :color="color"
          absolute
          height="7"
        ></v-progress-linear>
      </template>
    </v-text-field>
    <!-- ----------------------------------------- -->
    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="登入用密碼"
      color="yellow"
      counter
      @click:append="show1 = !show1"
    >
    <template v-slot:progress>
      <v-progress-linear
        v-if="custom"
        :value="progress"
        :color="color"
        absolute
        height="7"
      ></v-progress-linear>
      </template>
    </v-text-field>
    <v-text-field
      v-model="firstname"
      :rules="nameRules"
      :counter="20"
      label="First name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="email"
      required
    ></v-text-field>
    <Comment/>
  </v-container>
  </div>
</template>

<script>
import validator from 'validator'
import Comment from '../components/Comment.vue'

export default {
  components: {
    Comment
  },
  data () {
    return {
      value: '',
      custom: true,
      show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v.length >= 4 && v.length <= 20) || 'Name must more than 4 less than 10'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => (validator.isEmail(v)) || 'Email is not correct.'
      ]
    }
  },
  computed: {
    progress () {
      return Math.min(100, this.value.length * 10)
    },
    color () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    }
  }
}
</script>

<style>
.todo a {
  color: rgb(82, 164, 219);
  text-decoration: none;
  font-size: 2rem;
}
</style>
