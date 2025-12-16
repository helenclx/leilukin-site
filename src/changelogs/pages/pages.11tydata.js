export default {
	tags: "changelog pages",
	layout: "partials/changelogs",
	permalink: "/changelogs/{{ page.fileSlug }}/",
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.changelogNav,
			parent: "Changelogs"
		}
	}
}
