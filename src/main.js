/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import StartPage from './components/StartPage.vue'
import App from './App.vue'
import MainPage from './components/MainPage.vue'
const baseUrl="/frontTgMarket"
const routes = [
  { path: baseUrl+'/', component: StartPage },
  { path: baseUrl+'/main', component: MainPage },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App)

registerPlugins(app)

app.use(router).mount('#app')
