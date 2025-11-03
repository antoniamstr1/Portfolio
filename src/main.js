import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Aura from '@primeuix/themes/aura';
import router from './router'

import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    },

});
app.use(router)
app.component('Menubar', Menubar)

app.mount('#app')