import Vue from 'vue'
import Router from "vue-router";
// import store from "@/store";
import store from '../store';
import auth from "@/middleware/auth";
import healthworker from "@/middleware/healthworker";
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";
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
          middleware: [auth, healthworker],
          title: 'Page Title',
        }
      },
      {
        path: '/user-account/:id',
        name: 'user-account',
        component: () => import('@/pages/account-settings/Profile.vue'),
        meta: {
          middleware: [auth],
          title: 'Page Title',
        }
      },

      // Health Workers
      {
        path: '/healthworkers',
        name: 'healthworkers',
        component: () => import('@/pages/healthworkers/index.vue'),
        meta: {
          middleware: [auth, healthworker],
          title: 'Page Title',
        }
      },
      {
        path: '/healthworker/register',
        name: 'register-healthworkers',
        component: () => import('@/pages/healthworkers/create.vue'),
        meta: {
          middleware: [auth, healthworker],
          title: 'Page Title',
        }
      },
      {
        path: '/healthworker/profile/:id',
        name: 'healthworker-profile',
        component: () => import('@/pages/healthworkers/profile.vue'),
        meta: {
          middleware: [auth, healthworker],
          title: 'Page Title',
        }
      },

      // Patients
      {
        path: '/patients',
        name: 'patients',
        component: () => import('@/pages/patients/index.vue'),
        meta: {
          middleware: [auth],
          title: 'Page Title',
        }
      },
      {
        path: '/patient/register',
        name: 'register-patients',
        component: () => import('@/pages/patients/create.vue'),
        meta: {
          middleware: [auth],
          title: 'Page Title',
        }
      },
      {
        path: '/patient/encounter/:id',
        name: 'patient-encounter',
        component: () => import('@/pages/patients/encounter.vue'),
        meta: {
          middleware: [auth],
          title: 'Page Title',
        }
      },

      // Chats Messages
      {
        path: '/chats',
        name: 'chats',
        component: () => import('@/pages/chats/index.vue'),
        meta: {
          title: 'Page Title',
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
      middleware: [guest],
      title: 'Login Auth Page',
    }
  },

  // Error Page
  {
    path:'/error-404',
    name:'Error404',
    component: () => import('@/pages/errors/error_404.vue'),
    meta: {
      title: 'Error404',
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

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});


export default router
