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
      path: '/main',
      name: 'main',
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
          component: () => import('../views/AddCourse.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('../views/Order.vue')
        },
        {
          path: '/refund',
          name: 'refund',
          component: () => import('../views/Refund.vue')
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
          component: () => import('../views/Discount.vue')
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('../views/Setting.vue'),
        }
        ,
        {
          path: '/lookOrder',
          name: 'lookOrder',
          component: () => import('../views/LookOrder.vue'),
        }
        ,
        {
          path: '/addLecturer',
          name: 'addLecturer',
          component: () => import('../views/AddLecturer.vue'),
        }
        ,
        {
          path: '/addBanner',
          name: 'addBanner',
          component: () => import('../views/AddBanner.vue'),
        }
        ,
        {
          path: '/addArticle',
          name: 'addArticle',
          component: () => import('../views/AddArticle.vue'),
        },
        {
          path: '/addActivity',
          name: 'addActivity',
          component: () => import('../views/AddActivity.vue'),
        }
        ,
        {
          path: '/addDiscount',
          name: 'addDiscount',
          component: () => import('../views/AddDiscount.vue'),
        },
        {
          path: '/design',
          name: 'design',
          component: () => import('../views/Design.vue'),
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
