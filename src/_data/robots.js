// by Robb Knight: https://rknight.me/blog/blocking-bots-with-nginx/

import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
	const url =
		"https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt";
	let txt = await EleventyFetch(url, {
		duration: "1w",
		type: "text",
	});

	txt = txt
		.split("\n")
		.filter((line) => line !== "User-agent: Applebot")
		.join("\n");

	const bots = txt
		.split("\n")
		.filter((line) => {
			return (
				line.startsWith("User-agent:") &&
				line !== "User-agent: Applebot"
			);
		})
		.map((line) => line.split(":")[1].trim().replace(/\s/gi, ".*"));

	return {
		txt: txt,
		htaccess: bots.join('|'),
	};
}