<template>
  <v-container>
    <v-card title="Login">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-form ref="form" class="mb-4">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="password" label="password"></v-text-field>
            <v-row v-if="sucess == false" justify="center" class="mb-4">
              <v-btn @click="login" variant="outlined"> Login</v-btn>
            </v-row>
            <v-row v-else justify="center" class="mb-4">
              <v-btn @click="logout" variant="outlined"> logout</v-btn>
            </v-row>
            <v-alert v-if="sucess" type="info">Usuario logueado</v-alert>
            <v-alert v-else type="error">error al loguear</v-alert>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AuthService from "../services/AuthService";

let email = ref("");
let password = ref("");
let sucess = ref(false);
const logout = () => {
  email.value = "";
  password.value = "";
  sucess.value = false;
};
const login = async () => {
  const auth = new AuthService();
  let status = await auth.login(email.value, password.value);
  if (status) {
    sucess.value = true;
  } else {
    sucess.value = false;
  }
};
</script>

<style></style>
