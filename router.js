const routes = [
	{ path: '/', name: 'transitions', component: Transitions },
	{
		path: '/page-transitions',
		name: 'page-transitions',
		component: PageTransitions,
	},
	{
		path: '/group-transitions',
		name: 'group-transitions',
		component: GroupTransitions,
	},
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});
