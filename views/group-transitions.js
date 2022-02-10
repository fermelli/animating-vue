const GroupTransitions = {
	name: 'GroupTransitions',
	template: /*html*/ `
        <div class="grid grid-cols-[300px_1fr] gap-x-4">
            <div class="h-full bg-white drop-shadow p-4">
                <form class="flex flex-wrap -mx-4">
                    <div class="w-full mb-2 px-4">
                        <label class="block mb-2">TV Serie</label>
                        <input class="w-full h-10 outline-0 px-3 border border-gray-400 rounded" v-model="tvSerie.name" placeholder="TV Serie" type="text" required/>
                    </div>
                    <div class="w-2/4 mb-2 px-4">
                        <label class="block mb-2">Year</label>
                        <input class="w-full h-10 outline-0 px-3 border border-gray-400 rounded" v-model="tvSerie.year" type="number" placeholder="Year" min="1975" :max="new Date().getFullYear()" required/>
                    </div>
                    <div class="w-2/4 mb-2 px-4">
                        <label class="block mb-2">Seasons</label>
                        <select class="w-full h-10 outline-0 px-3 border border-gray-400 rounded" v-model="tvSerie.season" required>
                            <option value="" selected disabled>Season</option>
                            <option v-for="n in 10" :value="n">{{ n }}</option>
                        </select>
                    </div>
                    <div class="w-full mb-2 px-4">
                        <label class="block mb-2">Genre</label>
                        <select class="w-full h-10 outline-0 px-3 border border-gray-400 rounded" v-model="tvSerie.genre" required>
                            <option value="" selected disabled>Select a genre</option>
                            <option v-for="genre in genres" value="genre">{{ genre }}</option>
                        </select>
                    </div>
                    <div class="w-full mb-2 px-4">
                        <label class="block mb-2">Description</label>
                        <textarea class="w-full outline-0 px-3 py-2 border border-gray-400 rounded" v-model="tvSerie.description" placeholder="Description" rows="5" required></textarea>
                    </div>
                    <div class="w-full px-4">
                        <button class="w-full px-4 py-2 bg-cyan-300">Add</button>
                    </div>
                </form>
            </div>
            <div class="grid grid-cols-4 gap-4 px-4">
                <div v-for="tvSerie in tvSeries" :key="tvSerie.id" >
                    <div class="border border-slate-300 rounded">
                        <div class="p-4 border-b border-b-slate-300">
                            <h2 class="text-xl font-bold mb-2">{{ tvSerie.name }}</h2>
                            <div class="flex justify-between">
                                <span class="text-sm">{{ tvSerie.year }}</span> |
                                <span class="text-sm">{{ tvSerie.season + ((tvSerie.season > 1) ? ' Seasons' : ' Season') }}</span> |
                                <span class="text-sm">{{ tvSerie.genre }}</span>
                            </div>
                        </div>
                        <div class="p-4">
                            <p>{{ tvSerie.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
	created() {
		this.tvSerie = this.newTvSerie();
	},
	data() {
		return {
			genres: [
				'Drama',
				'Documentary',
				'Comedy',
				'Animated',
				'Reality',
				'Fantasy',
				'Superhero',
				'Other Genres',
			],
			tvSeries: [
				{
					id: '9a48d746c5491',
					name: 'All of Us Are Dead',
					year: '2022',
					season: '1',
					genre: 'Drama',
					description:
						'After a zombie virus spreads through their school, a group of trapped teens must find a way out or end up infected.',
				},
			],
			tvSerie: {},
		};
	},
	methods: {
		newTvSerie() {
			return {
				id: Math.random().toString(16).slice(2),
				name: '',
				year: '',
				season: '',
				genre: '',
				description: '',
			};
		},
	},
};
