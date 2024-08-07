---
articleTitle: Leilukin's Hub Has Migrated to Hostinger
desc: Leilukin's Hub has moved hosts again — this time to Hostinger.
date: 2024-07-27
categories: ["site updates"]
toc: true
---

Starting with 25 July 2024, Leilukin's Hub and all its subsites, including its [tumbleblog](https://tumbleblog.leilukin.com/) and [fanlisting collective](https://fan.leilukin.com/), have been migrated to [Hostinger](https://www.hostinger.my/). In other words, I have moved hosts again almost two months after [moving Leilukin's Hub to Netlify](/blog/posts/2024-05-31-domain-name-hosting-change-leilukins-hub).

Before talking about why I chose Hostinger as my new website host, I want to talk about why I was considering to move hosts again.

## Why Decided to Move Hosts Again

### Owning Both Static and Dynamic Sites

The first major reason is that leilukin.com has evolved into more than a static site; since I have also begun to dip my toe into PHP to build dynamic sites, including a tumbleblog, fanlistings and a fanlisting.

[Netlify](https://www.netlify.com/), which previously hosted the main site of Leilukin's Hub, does not support PHP hosting, so I hosted my tumbleblog and fanlisting collective on [InfinityFree](https://www.infinityfree.com/), one of the very few platforms to provide PHP and MySQL website hosting for free. InfinityFree has been a decent platform for PHP and MySQL beginners to experiment with the languages, however as you might have expected, its free hosting plan comes with limitations.

### Limitations of InfinityFree's Free Hosting

InfinityFree places [their own security measures](https://forum.infinityfree.com/docs?topic=49356) on websites on their free hosting plan to ensure [only regular browsers can access these websites](https://forum.infinityfree.com/docs?topic=49353). While it is understandable to apply these security measures on free websites to prevent abuse, it can be a dealbreaker depending on your needs.

In my case, tht thing that frustrated me the most about InfinityFree's security system on their free websites is the fact that my tumbleblog was unable to provide RSS feed in usual way. [Chyrp Lite](https://chyrplite.net/), which powers my tumbleblog, includes the feature of providing blog RSS feeds, but InfinityFree's security system blocks feed readers from reading feeds from websites on their free hosting, so I had to use Feedburner to proxy my tumbleblog's feeds to get around it.

### Invested in Webmastery Enough to Spend Money

Lastly, I am invested in building my own websites enough to spend money on them, as already evident in my purchase and registration of a custom domain name leilukin.com for this website.

That said, I do need to consider carefully about how much money I am going to spend on my hobbies, which factors in why I eventually chose Hostinger to host my websites.

## Why Hostinger

### Affordable Price with Regional Pricing

The biggest draw about Hostinger is its pricing — it is not only cheap, but also offering regional pricing. This is a huge deal for people who live in countries with weaker currencies than US Dollars and Euro, as the pricing scales to the level we are more comfortable spending, without worrying about currency conversion rates.

For reference, as of this writing, 1 USD equals approximately 4.6 Malaysian Ringgit (MYR), while the minimum wage in Malaysia is 1,500 MYR, which approximately equals to 321.03 USD, per month. Therefore, if a Malaysian like me is going to spend money, every USD counts.

Compare the pricing of the 48-month Premium Shared Hosting plan, which was what I ended up spending to host my websites, of [Hostinger.my](https://www.hostinger.my/) to [Hostinger.com](https://www.hostinger.com/): The plan costs 7.99 per month in MYR (approximately 1.71 USD), while 2.99 per month in USD (approximately 13.97 MYR). This means I ended up saving almost 6 MYR per month by purchasing the plan on the Malaysian branch of Hostinger. This is just comparing Hostinger's own hosting plan with different currencies, let alone comparing Hostinger's hosting plan to its competitors.

As a bonus, being able to purchase Hostinger's hosting plans in Malaysian Ringgit means I can pay by directly transferring money from a Malaysian bank account.

Being cheap is not even the only reason I chose Hostinger; what is better than being cheap is to provide many, many features at the same time.

### Many, Many Features at a Cheap Price

The cheap price of the Premium Shared Hosting Plan of Hostinger is jam-packed with many features, including but not limited to:

- Ability to create up to 100 websites (Netlify allows you to deploy 500 sites, but 100 sites are still significantly more than enough for average users)
- 100 GB SSD storage
- Unlimited bandwidth (InfinityFree's free hosting also allows unlimited bandwidth, but Netlify has a limit of 100GB per month)
- Unlimited MySQL databases (while Infinity has a limit of 400 databases)
- Email accounts included for free
- Built-in Git support, which allows me to continue deploying my main site from its Git repository
- And more!

On the subject of email accounts, it is worth pointing out that Hostinger's Premium Shared Hosting plan allows you to create an email account for each website you made, and you can have up to 100 addresses and forwarders for each email account.

## A Birthday Present for Myself

Last but not least, another motivator for me to purchase a premium website hosting plan for my websites now is the fact that my birthday is coming soon on July 28, so I spent money on premium hosting for my websites as a birthday present for myself this year.

## Domain Names Remaining at Porkbun

While Hostinger provides domain registration and transfer service, I chose to have the leilukin.com domain name stay with [Porkbun](https://porkbun.com/), because I already spent money on the domain name, so Hostinger's hosting plan providing domain name registration for free for the first year does not benefit me.

In addition, Porkbun's renewal rate for domain names is cheaper than Hostinger. For example, Porkbun renews the `.com` domain extension at 10.37 USD per year, while Hostinger renews at 15.99 USD per year. Even the Malaysian Ringgit pricing of Hostinger's domain renewal rate for `.com`, 55.99 MYR per year, is still more expansive than Porkbun's approximately 48.3 MYR per year rate.

## Wrapping Up

Leilukin's Hub's migration to Hostinger has been smooth. There was no significant change on the front end of my websites after the switch, aside from changing the theme of my tumbleblog, so my websites will continue to operate as usual, as well as improved site performance for my tumbleblog and fanlisting collective by loading custom web fonts faster to the extent I intended by [preloading the fonts](https://web.dev/articles/codelab-preload-web-fonts).

Moving hosts for my website again reminds me of one of the benefits of owning a custom domain name of making the host migration more seamless, since it saves the trouble of having to change and update my website's address every time I move hosts.