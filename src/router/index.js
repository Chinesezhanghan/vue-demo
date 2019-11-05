import Vue from 'vue'
import Router from 'vue-router'


//路由懒加载
const Home = () => import('@/components/Home')
const List = () => import('@/components/List')
const Comand = () => import('@/components/Comand')
const Shop = () => import('@/components/Shop')
const Single = () => import('@/components/Single')
const Login = () => import('@/components/Login')
const Not = () => import('@/components/Not')
const Index1 = () => import('@/components/comand-child/Index1')
const Index2 = () => import('@/components/comand-child/Index2')
const Index3 = () => import('@/components/comand-child/Index3')
const Index4 = () => import('@/components/comand-child/Index4')
const Index5 = () => import('@/components/comand-child/Index5')
Vue.use(Router)

const router=new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/list',
      name: 'List',
      component:  List
    },
    {
      path: '/comand',
      name: 'Comand',
      redirect:'/comand/a',
      component:Comand,
      children:[
        {path:"a",component:Index1},
        {path:"b",component:Index2},
        {path:"c",component:Index3},
        {path:"d",component:Index4},
        {path:"e",component:Index5},
      ]
    },
    {
      path: '/shop',
      name: ' Shop',
      component:Shop
    },
    {
      path: '/single/:id',
      name: 'Single',
      component:Single
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '*',
      name: 'Not',
      component:Not
    },
  ],


});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.user? "123" : false;
  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/login');
  }
});


export default router;
