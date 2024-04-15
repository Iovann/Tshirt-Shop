import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './page/home.vue'
import our_team from './page/Ourteam.vue'
import AboutVue from './page/About.vue'
import ShopVueCompo from './page/shop.vue'
import Blog from './page/Blog.vue'
import Blog_Detail from './page/blog_details.vue'
import service_detail from './page/service_détail.vue'
import service from './page/Service.vue'
import faq from './page/FAQ.vue'
import princing from './page/pricing.vue'
import login from './page/login.vue'
import inscription from './page/register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/our_team', component: our_team},
  { path: '/AboutVue', component: AboutVue},
  { path: '/ShopVueCompo', component: ShopVueCompo},
  { path: '/Blog', component: Blog},
  { path: '/Blog_Detail/:title', name: 'Blog_Detail', component: Blog_Detail},
  { path: '/service_detail', component: service_detail},
  { path: '/service', component: service},
  { path: '/faq', component: faq},
  { path: '/pricing', component: princing},
  { path: '/login', component: login},
  { path: '/sign', component: inscription},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')