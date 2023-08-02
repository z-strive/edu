import { createRouter, createWebHistory } from 'vue-router'
// 页面加载条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
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
        ,
        {
          path: '/lookOrder',
          name: 'lookOrder',
          component: () => import('../views/lookOrder.vue'),
        }
        ,
        {
          path: '/addLecturer',
          name: 'addLecturer',
          component: () => import('../views/addLecturer.vue'),
        }
        ,
        {
          path: '/addBanner',
          name: 'addBanner',
          component: () => import('../views/addBanner.vue'),
        }
        ,
        {
          path: '/addArticle',
          name: 'addArticle',
          component: () => import('../views/addArticle.vue'),
        },
        {
          path: '/addActivity',
          name: 'addActivity',
          component: () => import('../views/addActivity.vue'),
        }
        ,
        {
          path: '/addDiscount',
          name: 'addDiscount',
          component: () => import('../views/addDiscount.vue'),
        },
        {
          path: '/design',
          name: 'design',
          component: () => import('../views/design.vue'),
        }
      ]
    }
  ]

})
const whiteList = ['/', '/register']
router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = localStorage.getItem('token');
  if (whiteList.includes(to.path)) {
    next()
  } else {
    if (!token) {
      next('/')
    } else {
      next()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router
