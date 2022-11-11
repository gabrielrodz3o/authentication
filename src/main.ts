import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from "firebase/app";
loadFonts()
const firebaseConfig = {
  apiKey: "AIzaSyDK-2SI5GUZNiH891KyPJGjU8w0ZpSkhYE",
  authDomain: "curso-vue-310bf.firebaseapp.com",
  projectId: "curso-vue-310bf",
  storageBucket: "curso-vue-310bf.appspot.com",
  messagingSenderId: "831258536955",
  appId: "1:831258536955:web:102cec749d1f617a04395e"
};
initializeApp(firebaseConfig)
createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
