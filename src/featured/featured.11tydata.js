export default {
	tags: "my features",
	layout: "layouts/main",
	hasBreadcrumbs: true,
	eleventyComputed: {
		title: (data) => `${data.articleTitle} | Featured`,
		eleventyNavigation: {
			key: (data) => data.articleTitle,
			parent: "Featured"
		}
	}
}
