export default{
	path : '/movie',
	component : () => import('@/views/Movie'),
  children : [
	  {
			path : 'city',
		  component : ()=> import('@/components/City')
	  },
	  {
			path : 'search',
			component : ()=> import('@/components/Search')
	  },
	  {
			path : 'nowshow',
			component : ()=> import('@/components/Nowshow')
	  },
	  {
			path : 'willshow',
			component : ()=> import('@/components/Willshow')
		},
		{
			path : '/movie',
			redirect : '/movie/nowshow'
		}
  ],
}