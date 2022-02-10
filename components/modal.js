const Modal = {
	name: 'Modal',
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
	},
	template: /*html*/ `
        <transition name="fade">
            <div v-if="isOpen" class="absolute top-0 left-0 z-10 grid place-content-center w-full h-screen bg-[#00000033]">
                <div class="modal w-[500px] bg-white rounded">
                    <div class="p-4 border-b border-gray-600">
                        <h3 class="text-xl">Modal</h3>
                    </div>
                    <div class="p-4">
                        <p class="text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ab dolorum ex adipisci nulla iusto aut, temporibus amet itaque officiis, harum repudiandae optio molestiae mollitia error laudantium architecto fugiat rerum.
                        </p>
                    </div>
                    <div class="flex justify-end p-4 border-t border-gray-600">
                        <button @click="$emit('toggleModal')" class="px-4 py-2 rounded bg-rose-600 text-white">Close</button>
                    </div>
                </div>
            </div>
        </transition>
    `,
};
