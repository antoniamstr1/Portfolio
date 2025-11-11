import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Aura from '@primeuix/themes/aura';
import router from './router'

import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'

const app = createApp(App)

const MyPurpleTheme = {
    ...Aura,
    semantic: {
        ...Aura.semantic,
        primary: {
            400: '#636bff',
            500: '#636bff',

        }
    },
}


app.use(PrimeVue, {
    theme: {
        preset: MyPurpleTheme,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false,
        }
    },

});
app.use(router)
app.component('Menubar', Menubar)

app.mount('#app')