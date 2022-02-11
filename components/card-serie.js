const CardSerie = {
	name: 'CardSerie',
	props: {
		tvSerie: {
			type: Object,
			required: true,
		},
	},
	template: /*html*/ `
        <div class="border border-slate-300 rounded">
            <div class="p-4 border-b border-b-slate-300">
                <div class="flex justify-between">
                    <h2 class="text-xl font-bold mb-2">{{ tvSerie.name }}</h2>
                    <button @click="removeTvSerie" class="w-6 h-6 rounded-full hover:bg-slate-100 hover:text-rose-500">&times;</button>
                </div>
                <div class="flex justify-between items-center flex-wrap">
                    <span class="text-sm">{{ tvSerie.year }}</span> |
                    <span class="text-sm">{{ tvSerie.season + ((tvSerie.season > 1) ? ' Seasons' : ' Season') }}</span> |
                    <span class="text-sm">{{ tvSerie.genre }}</span>
                </div>
            </div>
            <div class="p-4">
                <p>{{ tvSerie.description }}</p>
            </div>
        </div>
    `,
	methods: {
		async removeTvSerie() {
			let tvSerieId = this.tvSerie.id;
			try {
				const response = await fetch(
					'http://localhost:3000/tv-series/' + tvSerieId,
					{
						method: 'DELETE',
					},
				);
				const responseJSON = await response.json();
				console.log(responseJSON);
				this.$emit('deleteTvSerie', tvSerieId);
			} catch (error) {
				console.error(error);
			}
		},
	},
};
