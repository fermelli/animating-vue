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
	{
		path: '/javascript-hooks',
		name: 'javascript-hooks',
		component: JavascriptHooks,
	},
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});
