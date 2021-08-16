import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'virtual:windi.css'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
