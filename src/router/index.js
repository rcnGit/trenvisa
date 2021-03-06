import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '../pages/home/home.vue'
import contact from '../pages/home/contact.vue'
import error from '../pages/home/error.vue'
import yimin from '../pages/yimin/yimin.vue'//移民
import liuxue from '../pages/yimin/liuxue.vue'//留学
import haiW from '../pages/yimin/haiW.vue'//海外房产
import news from '../pages/yimin/news.vue'//新闻
import suc from '../pages/yimin/suc.vue'//成功案例
import active from '../pages/yimin/active.vue'//尊享活动
import about from '../pages/yimin/about.vue'//关于唐仁国际

import liuxuedet from '../pages/yimin/liuxuedet.vue'//留学
import activedet from '../pages/yimin/activedet.vue'//留学
import newsdet from '../pages/yimin/newsdet.vue'//新闻详情
import sucdet from '../pages/yimin/sucdet.vue'//成功案例详情
import yimindet from '../pages/yimin/yimindet.vue'//移民详情
import haiWdet from '../pages/yimin/haiWdet.vue'//移民详情haiWdet

import t from '../pages/yimin/test.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '唐仁国际-大唐财富旗下投资移民与家庭规划服务平台',
        keepAlive: false // 不需要缓存
      },
      component: home
    },
    {
      path: '/error',
      name: 'error',
      meta: {
        title: '唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: error
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: '唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: contact
    },
    {
      path: '/yimin',
      name: 'yimin',
      meta: {
        title: '移民项目，申请流程，申请条件，费用价格_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: yimin
    },
    {
      path: '/yimindet',
      name: 'yimindet',
      meta: {
        title: '移民项目，申请流程，申请条件，费用价格_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: yimindet
    },
    {
      path: '/t',
      name: 't',
      meta: {
        title: '唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: t
    },
    {
      path: '/haiW',
      name: 'haiW',
      meta: {
        title: '海外房产，海外房产公司，海外置业，国外购房_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: haiW
    },
    {
      path: '/suc',
      name: 'suc',
      meta: {
        title: '移民案例，移民成功案例_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: suc
    },
    {
      path: '/active',
      name: 'active',
      meta: {
        title: '尊享活动，移民活动，移民讲座，移民沙龙_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: active
    },
    {
      path: '/liuxue',
      name: 'liuxue',
      meta: {
        title: '海外教育，专业出国留学中介_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: liuxue
    },
    {
      path: '/liuxuedet',
      name: 'liuxuedet',
      meta: {
        title: '海外教育，专业出国留学中介_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: liuxuedet
    },
    {
      path: '/activedet',
      name: 'activedet',
      meta: {
        title: '尊享活动，移民活动，移民讲座，移民沙龙_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: activedet
    },
    {
      path: '/sucdet',
      name: 'sucdet',
      meta: {
        title: '移民案例，移民成功案例_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: sucdet
    },
    {
      path: '/newsdet',
      name: 'newsdet',
      meta: {
        title: '新闻资讯，移民政策，移民资讯，留学教育，移民攻略_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: newsdet
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: '新闻资讯，移民政策，移民资讯，留学教育，移民攻略_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: news
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于我们_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: about
    },
    {
      path: '/haiWdet',
      name: 'haiWdet',
      meta: {
        title: '海外房产，海外房产公司，海外置业，国外购房_唐仁国际',
        keepAlive: false // 不需要缓存
      },
      component: haiWdet
    }

    
  ]
})

