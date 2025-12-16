export default {
	tags: ["contents", "feed items", "kotor guides"],
	layout: "layouts/starwarskotor",
	isArticle: true,
	eleventyComputed: {
		title: (data) => `${data.articleTitle} | Guides`,
		eleventyNavigation: {
			key: (data) => data.articleTitle,
			parent: "KotOR Guides"
		}
	}
}
