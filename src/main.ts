import 'normalize.css'
import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTippy from 'vue-tippy'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTippy, {
  directive: 'tippy',
})

app.mount('#app')
