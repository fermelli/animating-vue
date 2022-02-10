const FormSerie = {
	name: ' FormSerie',
	props: {
		genres: {
			type: Array,
			required: true,
		},
	},
	template: /*html*/ `
        <form class="flex flex-wrap -mx-4 bg-white drop-shadow p-4" @submit.prevent="addTvSerie">
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
                    <option v-for="genre in genres" :value="genre">{{ genre }}</option>
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
    `,
	created() {
		this.tvSerie = this.newTvSerie();
	},
	data() {
		return {
			tvSerie: {},
		};
	},
	methods: {
		newTvSerie() {
			return {
				name: '',
				year: '',
				season: '',
				genre: '',
				description: '',
			};
		},
		async addTvSerie() {
			try {
				const response = await fetch(
					'http://localhost:3000/tv-series',
					{
						method: 'POST',
						body: JSON.stringify(this.tvSerie),
						headers: {
							'Content-Type': 'application/json',
						},
					},
				);
				const responseJSON = await response.json();
				console.log(responseJSON);
				this.$emit('updateTvSeries', this.tvSerie);
				this.tvSerie = this.newTvSerie();
			} catch (error) {
				console.error(error);
			}
		},
	},
};
