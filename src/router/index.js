import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import Profile from '@/pages/Profile.vue'

import DataProtection from '@/pages/DataProtection.vue'
import PrivacyPolycy from '@/pages/PrivacyPolycy.vue'
import UserAgreement from '@/pages/UserAgreement.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [

    { path: '/', name: 'Home', component: Home },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
    { path: '/profile', name: 'Profile', component: Profile },

    { path: '/data_protection', name: 'DataProtection', component: DataProtection },
    { path: '/privacy_policy', name: 'PrivacyPolicy', component: PrivacyPolycy },
    { path: '/user_agreement', name: 'UserAgreement', component: UserAgreement },

    // {path: '*', component: () => import(NotFound)}

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;