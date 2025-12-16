export default {
	layout: "layouts/slashpage",
	tags: "statements",
	articleElement: true,
	eleventyComputed: {
		desc: (data) => `${data.sitemeta.siteName}'s ${data.keyword}`,
		eleventyNavigation:{
			key: (data) => data.title
		}
	}
}
