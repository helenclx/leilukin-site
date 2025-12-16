export default {
	tags: ["archive"],
	excludeFromSearch: true,
	eleventyComputed:{
		eleventyNavigation: {
			key: (data) => data.title
		}
	}
}
