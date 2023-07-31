import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Main',
      name: 'Main',
      redirect: '/home',
      component: () => import('../views/Main.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/course',
          name: 'course',
          component: () => import('../views/Course.vue'),
        },
        {
          path: "/addCourse",
          name: 'addCourse',
          component: () => import('../views/addCourse.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('../views/Order.vue')
        },
        {
          path: '/refund',
          name: 'refund',
          component: () => import('../views/refund.vue')
        }, {
          path: '/student',
          name: 'student',
          component: () => import('../views/Student.vue')
        },
        {
          path: '/lecturer',
          name: 'lecturer',
          component: () => import('../views/Lecturer.vue')
        }
        , {
          path: "/banner",
          name: 'banner',
          component: () => import('../views/Banner.vue')
        },
        {
          path: '/article',
          name: 'article',
          component: () => import('../views/Article.vue')
        }, {
          path: '/seckill',
          name: 'seckill',
          component: () => import('../views/Seckill.vue')
        }, {
          path: '/discount',
          name: 'discount',
          component: () => import('../views/discount.vue')
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('../views/setting.vue'),
        }
      ]
    }
  ]
})

export default router
