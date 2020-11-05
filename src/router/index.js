import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'View-Error',
    },
    {
      path: '/',
      name: 'View-Home',
      component: () => import('../views/home/View-Home.vue')
    },

    // Parte da autenticacao do usuario dentro do sistema
    {
      path: '/reset_password',
      name: 'View-ResetPassword',
      component: () => import('../views/auth/View-ResetPassword'),
    },
    {
      path: '/forgot_password',
      name: 'View-FrorgotPassword',
      component: () => import('../views/auth/View-ForgotPassword')
    },
    {
      path: '/resetPassword',
      name: 'View-resetPassword',
      component: () => import('../views/auth/View-ResetPassword')
    },
    {
      path: '/login',
      name: 'View-Login',
      component: () => import('../views/auth/View-Login.vue'),
    },
    {
      path: '/register',
      name: 'View-Register',
      component: () => import('../views/auth/View-Register.vue'),
    },

    // Parte do sistema das tutorias
    {
      path: '/dashboard/pagina/:page',
      name: 'View-Dashboard',
      component: () => import('../views/dashboard/View-Dashboard'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/tutores/pagina/:page',
      name: 'View-DashTutores',
      component: () => import('../views/dashboard/View-Tutores'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/perfil/:id',
      name: 'View-Perfil',
      component: () => import('../views/dashboard/View-Perfil'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/tutorias/pagina/:page',
      name: 'View-Tutoria',
      component: () => import('../views/dashboard/View-Tutoria'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/tutorias/search/:id',
      name: 'View-Search',
      component: () => import('../views/dashboard/View-Search'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard/sugestao',
      name: 'View-Sugestao',
      component: () => import('../views/dashboard/View-Sugestao'),
      meta: {
        requiresAuth: true
      }
    },
    
    // Rotas de administrador
    {
      path: '/admin/dashboard/user',
      name: 'View-Administrador',
      component: () => import('../views/admin/View-User'),
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    },
  ]
})



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = JSON.parse(localStorage.getItem('user-tutoria'))
    if (user) {
      if (to.matched.some(record => record.meta.requiresAdmin)) {
        if (user.user.admin) {
          next()
        } else {
          next({
            path: '/'
          })
        }
      } else {
        next()
      }
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})




export default router