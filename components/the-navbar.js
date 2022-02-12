const TheNavbar = {
	template: /*html*/ `
        <header class="bg-indigo-500">
            <nav class="container mx-auto">
                <ul class="flex h-[50px] items-center gap-x-4">
                    <li>
                        <router-link class="text-white" :to="{ name: 'transitions' }">Transitions</router-link>
                    </li>
                    <li>
                        <router-link class="text-white" :to="{ name: 'page-transitions' }">Page Transitions</router-link>
                    </li>
                    <li>
                        <router-link class="text-white" :to="{ name: 'group-transitions' }">Group Transitions</router-link>
                    </li>
                    <li>
                        <router-link class="text-white" :to="{ name: 'javascript-hooks' }">Javascript Hooks</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    `,
};
