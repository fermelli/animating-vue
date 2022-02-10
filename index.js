const App = {
	name: 'App',
	template: /*html*/ `
        <div class="container mx-auto h-screen p-4">
            <button @click="isOpenModal = !isOpenModal" class="px-4 py-2 rounded bg-emerald-500 text-white">Open</button>
            <modal :is-open="isOpenModal" @toggle-modal="isOpenModal = !isOpenModal"/>
        </div>
    `,
	data() {
		return {
			isOpenModal: false,
		};
	},
};

const app = Vue.createApp(App);

app.component('modal', Modal);

app.mount('#app');
