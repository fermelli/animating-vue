const GroupTransitions = {
	name: 'GroupTransitions',
	template: /*html*/ `
        <div class="grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-x-4">
            <div class="h-full bg-white drop-shadow p-4">
                <form-serie :genres="genres" @update-tv-series="getTvSeries"/>
            </div>
            <div v-if="loading" class="p-4 flex place-content-center">
                <div class="w-8 h-8 border-4 border-l-indigo-300 rounded-full animate-spin"></div>
            </div>
            <div v-else class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
                <div v-for="tvSerie in tvSeries" :key="tvSerie.id" >
                    <card-serie :tv-serie="tvSerie"/>
                </div>
            </div>
        </div>
    `,
	created() {
		this.getTvSeries();
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
			tvSeries: [],
			loading: false,
		};
	},
	methods: {
		async getTvSeries() {
			try {
				this.loading = true;
				const response = await fetch('http://localhost:3000/tv-series');
				this.tvSeries = await response.json();
			} catch (error) {
				console.error(error);
			} finally {
				this.loading = false;
			}
		},
	},
};
