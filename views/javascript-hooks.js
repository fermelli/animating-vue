const JavascriptHooks = {
	name: 'JavascriptHooks',
	template: /*html*/ `
        <div class="w-full h-full">
            <transition name="fade">
                <button v-if="!isOpen" @click="isOpen = !isOpen" class="px-4 py-2 rounded bg-indigo-700 text-white">Open</button>
            </transition>
            <transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" :css="false">
                <div v-if="isOpen" @click.self="isOpen = false" class="wrapper w-screen h-screen absolute top-0 left-0 z-30 bg-[#00000033]">
                    <div class="absolute top-0 right-0 h-screen bg-slate-500 drop-shadow-lg">
                        <div class="h-[50px] flex items-center px-4 border-b border-b-slate-300">
                            <button @click="isOpen = !isOpen" class="w-8 h-8 rounded-full bg-slate-300">&times;</button>
                        </div>
                        <nav class="py-4">
                            <ul>
                                <li class="px-4 py-2 text-xl">⚙ <span>Settings</span></li>
                                <li class="px-4 py-2 text-xl">🎮 <span>Jostyck</span></li>
                                <li class="px-4 py-2 text-xl">🎲 <span>Dice</span></li>
                                <li class="px-4 py-2 text-xl">🗡 <span>Sword</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </transition>
        </div>
    `,
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		onBeforeEnter(el) {
			el.style.opacity = 0;
			el.firstElementChild.style.opacity = 0;
			el.firstElementChild.style.width = '10rem';
		},
		onEnter(el, done) {
			el.style.opacity = 1;
			Velocity(
				el.firstElementChild,
				{ opacity: 1, width: '14rem' },
				{ duration: 1000, easing: [90, 10], complete: done },
			);
		},
		onLeave(el, done) {
			Velocity(
				el.firstElementChild,
				{ opacity: 0, width: '10rem' },
				{ duration: 500, easing: 'easeOutQuint', complete: done },
			);
		},
	},
};
