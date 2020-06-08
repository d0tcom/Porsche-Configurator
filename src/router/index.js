import Vue from 'vue'
import VueRouter from 'vue-router'
import Configurateur from '../views/Configurateur.vue'
import CommandeConfirmee from '../views/CommandeConfirmee.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Configurateur',
    component: Configurateur
  },
  {
    path: '/recapitulatif',
    name: 'Recapitulatif',
    // route level code-splitting
    // this generates a separate chunk (recapitulatif.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "recapitulatif" */ '../views/Recapitulatif.vue')
  },
  {
    path: '/commande-confirmee',
    name: 'CommandeConfirmee',
    component: CommandeConfirmee
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

export default router
