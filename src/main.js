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
            50: '#f3e8ff',
            100: '#e9d5ff',
            200: '#d8b4fe',
            300: '#c084fc',
            400: '#a855f7',
            500: '#636bff',
            600: '#7e22ce',
            700: '#6b21a8',
            800: '#581c87',
            900: '#3b0764'
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