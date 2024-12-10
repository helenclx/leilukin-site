export const siteName = "Leilukin's Hub";
export const siteDomain = "leilukin.com";
export const siteUrl = "https://" + siteDomain || "http://localhost:8080";
export const siteAuthor = {
	name: "Leilukin",
	email: "contact@leilukin.com",
	emailEncoded: '<span class="email-encoded">contact@leilukin<b>.example</b>.com</span>',
	emailDecoyUrl: "/mail/",
	url: siteUrl + "/about/"
};
export const siteLanguage = "en";
export const siteLocale = "en_MY";
export const siteDescription = siteAuthor.name + "'s personal website.";
export const feedPath = "/feed.xml";
export const feedUrl = siteUrl + feedPath;
export const subsites = [
	{
		siteName: "Tumbleblog",
		subDomain: `tumbleblog.${siteDomain}`,
		siteUrl() { return "https://" + this.subDomain; }
	},
	{
		siteName: `Beehive - ${siteAuthor.name}'s Fanlisitng Collective`,
		subDomain: `fan.${siteDomain}`,
		siteUrl() { return "https://" + this.subDomain; }
	},
];