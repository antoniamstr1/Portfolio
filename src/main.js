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
            100: '#8e90c1ff',
            200: '#878acfff',
            300: '#6f73bcff',
            400: '#5e64c9ff',
            500: '#636bff',
            600: '#595eb6ff',
            700: '#4f57f1ff',
            800: '#434bdcff',
            900: '#353ddfff',

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