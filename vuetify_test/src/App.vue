<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
      </v-sheet>

      <v-divider></v-divider>

      <v-list rounded>
        <v-list-item router-link to="/about">
          <v-list-item-content>
            <v-list-item-title>first</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/">
          <v-list-item-content>
            <v-list-item-title>second</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
    // links: [
    //   ['mdi-inbox-arrow-down', '第一個'],
    //   ['mdi-send', '第二個'],
    //   ['mdi-delete', '第三個'],
    //   ['mdi-alert-octagon', '第四個']
    // ]
  })
}
</script>
