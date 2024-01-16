import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

document.getElementById('app').style.width = '100vw';
document.getElementById('app').style.height = '100vh';
document.getElementById('app').style.margin = '0';
document.getElementById('app').style.padding = '0';
document.getElementById('app').style.border = '0px solid transparent';

