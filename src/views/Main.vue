<template>
    <div class="box">
        <div class="sidebar">
            <div class="icon">
                <span class="iconfont icon-shu1"></span>
                <p>教育管理系统</p>
            </div>
            <div class="menu">
                <el-menu :default-active="crumbs" class="el-menu-vertical-demo" background-color="#202741" text-color="#FFFFFF" @close="handleClose"
                @select="handleOpen"
                >
                    <el-menu-item :index="item.name + ''" v-for="item in noChildren" :key="item.name" @click="jump(item)">
                        <el-icon><span :class="item.icon + ' iconfont'"></span></el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                    <el-sub-menu :index="item.name + ''" v-for="item in hasChildren" :key="item.name">
                        <template #title>
                            <el-icon>
                                <span :class="item.icon + ' iconfont'"></span>
                            </el-icon>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item-group v-for="i in item.children" :key="i.name">
                            <el-menu-item :index="i.name + ''" @click="jump(i)">{{ i.name }}</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </div>
        </div>
        <div class="container">
            <div class="header">
                <div class="header-wrap">
                    <div class="header-left">
                        <span class="iconfont icon-mianbaoxie"></span>
                        <p>{{ crumbs }}</p>
                    </div>
                    <div class="header-right">
                        <span class="iconfont icon-wenhao"></span>
                        <div class="badge">
                            <span class="iconfont icon-lingdang"></span>
                            <p>1</p>
                        </div>
                        <img src="../image/avatar.jpg" alt="" class="avatar">
                        <div class="admin">
                            <p>管理员：00220</p>
                        </div>
                        <div class="out">
                            <span class="iconfont icon-tuichu"></span>
                            <p>退出</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <routerView></routerView>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const dataMenu = ref([
    {
        path: 'home',
        name: '首页',
        icon: 'icon-shouye',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/course',
        name: '课程管理',
        icon: 'icon-kechengguanli',
        component: () => import('../views/Course.vue')
    },
    {
        path: '/orderMon',
        name: '订单管理',
        icon: 'icon-dingdanguanli',
        children: [
            {
                path: 'order',
                name: '订单',
                component: () => import('../views/Order.vue')
            },
            {
                path: 'refund',
                name: '退款',
                component: () => import('../views/refund.vue')
            }
        ]
    },
    {
        path: '/user',
        name: '用户管理',
        icon: 'icon-yonghuguanli',
        children: [
            {
                path: 'student',
                name: '学员',
                component: () => import('../views/Student.vue')
            },
            {
                path: 'lecturer',
                name: '讲师',
                component: () => import('../views/Lecturer.vue')
            }
        ]
    },
    {
        path: '/consultive',
        name: '咨询管理',
        icon: 'icon-jiaoseguanli',
        children: [
            {
                path: "banner",
                name: '轮播图',
                component: () => import('../views/Banner.vue')
            },
            {
                path: 'article',
                name: '文章',
                component: () => import('../views/Article.vue')
            }
        ]
    },
    {
        path: '/promotion',
        name: '促销管理',
        icon: 'icon-dangkoukaidan',
        children: [
            {
                path: 'seckill',
                name: '秒杀',
                component: () => import('../views/Seckill.vue')
            }, {
                path: 'discount',
                name: '优惠券',
                component: () => import('../views/discount.vue')
            }
        ]
    },
    {
        path: '/setting',
        name: '系统设置',
        icon: 'icon-shezhi',
        component: () => import('../views/setting.vue'),
        children: []
    }
])
let crumbs = ref('首页')
// 有children
const hasChildren = computed(() => dataMenu.value.filter(item => item.children))
// 没有children
const noChildren = computed(() => dataMenu.value.filter(item => !item.children))
// 跳转对应的路由
const jump = (item) => {
    router.push(item.path)
}
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
    crumbs.value = key
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="less">
@import url(../ulits/icon.css);
.main{
    overflow:auto;
    
}
.box {
    display: flex;

    .sidebar {
        min-width: 208px;
        background-color: #202741;
        height: 100vh;

        .menu {
            .el-menu {
                border-right: none;
            }
        }

        .icon {
            margin: 20px 30px 10px;
            display: flex;
            align-items: center;
            color: aliceblue;

            p {
                font-size: 16px;
                margin-left: 10px;
            }
        }
    }

    .container {
        width: 100%;
        .header {
            width: 100%;
            background-color: #fff;
            height: 80px;
            line-height: 80px;
            margin-bottom: 24px;
            .header-wrap {
                margin: 0 24px;
                display: flex;
                justify-content: space-between;
                .header-left{
                    display: flex;
                    align-items: center;
                    p{
                        margin-left: 15px;
                        font-size: 16px;
                    }
                }
                .header-right{
                    display: flex;
                    align-items: center;
                    .badge{
                        position: relative;
                        margin: 0 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .icon-lingdang{
                            font-size: 25px;
                        }
                        p{
                            width: 16px;
                            height: 16px;
                            text-align: center;
                            line-height: 16px;
                            border-radius: 50%;
                            background-color: red;
                            position: absolute;
                            top: 25px;
                            right: -5px;
                            font-size: 12px;
                            color: #fff;
                        }
                    }
                    .icon-wenhao{
                        font-size: 25px;
                    }
                    .avatar{
                        width: 42px;
                        height: 42px;
                        border-radius: 50%;
                    }
                    .admin{
                        margin: 0 40px 0 15px;
                        font-size: 16px;
                        color: #ccc;
                    }
                    .out{
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        span{
                            font-size: 20px;
                            margin-right: 15px;
                        }
                        p{
                            font-size: 16px;
                            color: #ccc;
                        }
                    }
                    .out::after{
                        content: "";
                        width: 2px;
                        height: 16px;
                        display: block;
                        position:absolute;
                        background-color: #ccc;
                        z-index: 10;
                        top: 50%;
                        left: -30px;
                        margin-top: -8px; 
                    }
                }
            }


        }
    }
}</style>