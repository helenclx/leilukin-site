export default {
	tags: "project pages",
	layout: "layouts/main",
	hasBreadcrumbs: true,
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.title,
			parent: "Projects"
		}
	}
}
