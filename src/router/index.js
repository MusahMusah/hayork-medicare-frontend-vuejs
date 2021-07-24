import Vue from 'vue'
import Router from "vue-router";

import Body from '../components/body'

import SamplePage from '../pages/sample_page'

// component

Vue.use(Router)

const routes = [
  { path: '', redirect: { name: 'dashboard' }},
  {path: '*', redirect: { name: 'Error404' }},
  {
    path: '',
    component: Body,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: SamplePage,
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },
      {
        path: '/user-account',
        name: 'user-account',
        component: () => import('@/pages/account-settings/Profile.vue'),
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },

      // Health Workers
      {
        path: '/healthworkers',
        name: 'healthworkers',
        component: () => import('@/pages/healthworkers/index.vue'),
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },
      {
        path: '/healthworker/register',
        name: 'register-healthworkers',
        component: () => import('@/pages/healthworkers/create.vue'),
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },
      {
        path: '/healthworker/profile/:id',
        name: 'healthworker-profile',
        component: () => import('@/pages/healthworkers/profile.vue'),
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },

      // Patients
      {
        path: '/patients',
        name: 'patients',
        component: () => import('@/pages/patients/index.vue'),
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },
      {
        path: '/patient/register',
        name: 'register-patients',
        component: () => import('@/pages/patients/create.vue'),
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },
      {
        path: '/patient/encounter',
        name: 'patient-encounter',
        component: () => import('@/pages/patients/encounter.vue'),
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },

      // Chats Messages
      {
        path: '/chats',
        name: 'chats',
        component: () => import('@/pages/chats/index.vue'),
        meta: {
          title: 'Default Dashboard | Endless - Premium Admin Template',
        }
      },
    ]
  },

  // Login Route
  {
    path:'/login',
    name:'auth-login',
    component: () => import('@/pages/auth/login.vue'),
    meta: {
        title: 'Error404 | Cuba - Premium Admin Template',
    }
  },

  // Error Page
  {
    path:'/error-404',
    name:'Error404',
    component: () => import('@/pages/errors/error_404.vue'),
    meta: {
        title: 'Error404 | Cuba - Premium Admin Template',
    }
  },
];

const router = new Router({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

export default router
