<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item router-link to="/dashboard/apple">
          <v-list-item-content>
            <v-list-item-title>APPLE</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/dashboard/banana">
          <v-list-item-content>
            <v-list-item-title>BANANA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router-link to="/">
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam']
    ]
  })
}
</script>
