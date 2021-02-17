// link with Index, demoMap Vue file//
const routes = [
  {
    path: '/',
    component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Index.vue') },
      // { path: 'demoMap', component: () => import('pages/demoMap.vue') },
      // { path: 'drillDown', component: () => import('pages/drillDown.vue') },
      { path: 'interactiveHabitat', component: () => import('pages/interactiveHabitat.vue') },

    ]
  },
  {
    path: '/l', component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: '/l/demo1', component: () => import('pages/leafletDemo/demo1.vue') },
      { path: '/l/demo2', component: () => import('pages/leafletDemo/demo2.vue') },
      { path: '/l/demo3', component: () => import('pages/leafletDemo/demo3.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes


