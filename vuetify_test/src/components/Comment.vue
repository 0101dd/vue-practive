<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="message"
            :append-outer-icon="'mdi-send'"
            :prepend-icon="icon"
            color="yellow"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="留言評論"
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="add"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
      <ul>
      <li
      v-for="item in items" :key="item.id"
      >
      +{{ item.name }}
      </li>
    </ul>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    items: [],
    id: 1,
    password: 'Password',
    show: false,
    message: '',
    marker: true,
    iconIndex: 0,
    icons: [
      'mdi-emoticon',
      'mdi-emoticon-cool',
      'mdi-emoticon-dead',
      'mdi-emoticon-excited',
      'mdi-emoticon-happy',
      'mdi-emoticon-neutral',
      'mdi-emoticon-sad',
      'mdi-emoticon-tongue'
    ]
  }),

  computed: {
    icon () {
      return this.icons[this.iconIndex]
    }
  },

  methods: {
    toggleMarker () {
      this.marker = !this.marker
    },
    sendMessage () {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage () {
      this.message = ''
    },
    resetIcon () {
      this.iconIndex = 0
    },
    changeIcon () {
      this.iconIndex === this.icons.length - 1
        ? this.iconIndex = 0
        : this.iconIndex++
    },
    add () {
      if (this.message.length >= 2) {
        this.items.push({
          name: this.message,
          done: false,
          edit: false,
          model: this.message,
          id: this.id
        })
        this.id++
        this.message = ''
      }
    },
    done (value) {
      this.items = this.items.map(item => {
        item.done = value
        return item
      })
    },
    del (filter) {
      this.items = this.items.filter(item => {
        if (filter === '全部') return false
        else if (filter === '已完成') return !item.done
        else return item.done
      })
    },
    save (item) {
      item.name = item.model
      item.edit = false
    },
    cancel (item) {
      item.model = item.name
      item.edit = false
    }
  }
}
</script>
