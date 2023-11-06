import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
// main.js
import '@/style.scss'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
