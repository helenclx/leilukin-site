export default {
	tags: ["my articles", "contents", "feed items"],
	layout: "layouts/main",
	isArticle: true,
	eleventyComputed: {
		title: (data) => `${data.articleTitle} | Articles`,
		eleventyNavigation: {
			key: (data) => data.articleTitle,
			parent: "Articles"
		}
	}
}
