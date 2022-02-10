const Transitions = {
	name: 'Transitions',
	template: /*html*/ `
        <div>
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
