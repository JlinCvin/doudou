export default{
  path : '/login',
  component : () => import('@/views/Login'),
  children : [
    {
      path : 'logining',
      component: () => import('@/components/Logining')
    },
    {
      path : 'registering',
      component: () => import('@/components/Registering')
    },
    {
      path : 'center',
      component: () => import('@/components/Center')
    },
    {
      path : 'findpassword',
      component: () => import('@/components/FindPassword')
    },
    {
      path : '/login',
      redirect : '/login/center'
    }
  ]
}