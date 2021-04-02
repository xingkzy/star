import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import User from '../views/User.vue'

Vue.use(VueRouter) //安装插件

const News = () => import('../views/HomeNew.vue')
const aa = () => import('../views/Homeaa.vue')
const Profile = () => import('../views/profile.vue')

const routes = [{
        path: '/',
        // name: 'Home',
        component: Home,
        meta: {
            title: 'home'
        }
    },
    {
        path: '/about',
        // name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: about,
        children: [{
                path: '',
                redirect: 'news',
            },
            {
                path: 'news',
                component: News,
                meta: {
                    title: 'news'
                }
            },
            {
                path: 'aa',
                component: aa
            }
        ],
        meta: {
            title: 'about'
        }
    },
    {
        path: '/user/:UserId',
        component: () => import('../views/User.vue'),
        meta: {
            title: 'user'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: 'profile'
        }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})

export default router