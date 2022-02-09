const App = {
	name: 'App',
	template: /*html*/ `<div>{{ message }}</div>`,
	data() {
		return {
			message: 'Hello world!',
		};
	},
};

const app = Vue.createApp(App);

app.mount('#app');
