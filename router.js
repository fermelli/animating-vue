const routes = [
	{ path: '/', name: 'transitions', component: Transitions },
	{
		path: '/page-transitions',
		name: 'page-transitions',
		component: PageTransitions,
	},
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});
