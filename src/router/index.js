import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Velvet from '../views/Velvet.vue'
import FeelGPT from '../views/FeelGPT.vue'
import Cv from '../views/Cv.vue'
import Portfolio from '../views/Portfolio.vue'
import MastersThesis from '../views/MastersThesis.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/velvet', name: 'Velvet', component: Velvet },
    { path: '/feelGPT', name: 'FeelGPT', component: FeelGPT },
    { path: '/cv', name: 'cv', component: Cv },
    { path: '/masters-thesis', name: 'MastersThesis', component: MastersThesis },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
