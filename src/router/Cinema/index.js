export default{
  path : '/cinema',
  component : () => import('@/views/Cinema'),
  children : [
	  {
			path : 'cinemas',
		  component : ()=> import('@/components/Cinemas')
	  },
		{
			path : '/cinema',
			redirect : '/cinema/cinemas'
		}
  ],
}