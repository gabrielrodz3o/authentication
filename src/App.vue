<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" permanent>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Autehtication</v-app-bar-title>
      <template v-slot:append>
        <v-btn variant="outlined" @click="$router.push({ name: 'HomeView' })"
          >Home</v-btn
        >

        <v-btn variant="outlined" @click="$router.push({ name: 'AuthViewVue' })"
          >Auth</v-btn
        >
        <v-btn
          variant="outlined"
          @click="$router.push({ name: 'FirebaseViewVue' })"
          >Firebase</v-btn
        >
        <v-btn
          :prepend-icon="
            theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
          "
          @click="onClick"
          >Toggle Theme</v-btn
        >
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const theme = ref("light");
let drawer = ref(false);
function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
<!-- https://hfp69ilv.directus.app/auth/login
email:testuser@gogodev.net
password:12345678

-->
