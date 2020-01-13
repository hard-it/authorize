import Vue from 'vue'
import VueRouter from 'vue-router'
import EnterScreen from '../views/EnterScreen.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EnterScreen',
    component: EnterScreen
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignUp',
    component: SignIn
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
