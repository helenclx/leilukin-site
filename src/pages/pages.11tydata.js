export default {
	tags: "pages",
	layout: "layouts/main",
	permalink: "/{{ page.fileSlug }}/",
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.title
		}
	}
}
