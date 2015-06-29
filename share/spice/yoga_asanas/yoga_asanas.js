function ddg_spice_yoga_asanas(apiResult) {

    if (!apiResult || !apiResult.response.numFound) {
        return Spice.failed('yoga_asanas');
    }

	Spice.add({
		id: 'yoga_asanas',
		name: 'Yoga Asanas',

		data: apiResult.response.docs,
		normalize: function(a){
			var meta = eval("(" + a.meta + ")");
			delete a.meta;

			return {
				image: meta.img,
				title: a.title,
				subtitle: a.paragraph,
				meta: {
					srcName: meta.srcName,
					srcUrl: meta.srcUrl,
					srcIcon: meta.favicon
				}
			};
		},

		templates: {
			group: 'media',
		},

	});
}
