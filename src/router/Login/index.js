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
      path : '/login',
      redirect : '/login/logining'
    }
  ]
}