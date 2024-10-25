import VueRouter from 'vue-router'

const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'helloworld',
      component:  () => import('../components/HelloWorld.vue'),
    },
    {
      path: '/maptest',
      name: 'maptest',
      component:  () => import('../components/MapTest.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component:  () => import('../components/Teset.vue'),
    },
  ]
})

export default router