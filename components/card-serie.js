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
                <h2 class="text-xl font-bold mb-2">{{ tvSerie.name }}</h2>
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
};
