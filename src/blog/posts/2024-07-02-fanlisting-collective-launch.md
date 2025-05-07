---
articleTitle: Cassette Beasts Fanlisting and My Fanlisting Collective Launched
desc: Announcing the launch of my fanlisting collective, Cassette Beasts fanlisting and the release of my BellaBuffs fork.
date: 2024-07-02T00:37:00+0800
topics: ["cassette beasts", "site updates", "code projects"]
---

I am incredibly excited to announce the official launch of [Land of Confusion](https://fan.leilukin.com/cassettebeasts), [The Fanlistings Network](https://thefanlistings.org/)-approved fanlisting for {{ cite "Cassette Beasts" }}, and [Beehive](https://fan.leilukin.com), my fanlisting collective! 🥳

If you are a fan of {{ cite "Cassette Beasts" }}, feel free to join my fanlisting! If you like fanlistings as well, feel free to check out my fanlisting collective!

In addition, in light of the launch of my first fanlisting, I am also releasing [my fork of BellaBuffs](/projects/code/bellabuffs-phpmailer), the fanlisting script written in PHP, with integration of [PHPMailer](https://github.com/PHPMailer/PHPMailer), the email sending library!

My fanlisting collective and {{ cite "Cassette Beasts" }} fanlisting are hosted on [InfinityFree](https://www.infinityfree.com/), since [Netlify](https://www.netlify.com/), which currently hosts the main site of Leilukin's Hub, does not support PHP.

## A Milestone

In [my previous post](/blog/posts/2024-06-24-cassette-beasts-fanlisting-approved), I announced that The Fanlistings Network (also known as TFL.org) had approved my application for building and running a fanlisting for {{ cite "Cassette Beasts" }}.

After completing the {{ cite "Cassette Beasts" }} fanlisting on 30 June 2024, I submitted a [finished form](https://thefanlistings.org/finished.php) to TFL.org to let them know that I have finished my fanlisting. The Fanlistings Network responded by emailing me and informing me thatthey have added the URL of my {{ cite "Cassette Beasts" }} fanlisting to the list of approved fanlistings under the Games category and the [Computer, Console, & Video Games subcategory](https://www.thefanlistings.org/browse.php?show=games&start=8) ([view the web archive version](https://web.archive.org/web/20240702062715/https://www.thefanlistings.org/browse.php?show=games&start=8)).


The launch of my  {{ cite "Cassette Beasts" }}  fanlisting is a major moment for me as both a webmaster and a {{ cite "Cassette Beasts" }} fan, as I am enthusiastic about the fact that the very first fanlisting I create would be for my absolute favourite video game.

## First Foray in PHP

My {{ cite "Cassette Beasts" }} fanlisting is powered by [BellaBuffs](https://www.jemjabella.co.uk/scripts/bellabuffs/). I was new to PHP when I started considering building fanlistings myself, as my main site Leilukin's Hub is a static site, so building the {{ cite "Cassette Beasts" }} fanlisting was my first foray in learning to code in PHP.

Before starting to actually work on building the {{ cite "Cassette Beasts" }} fanlisting, I tried out [Enthusiast](https://scripts.indisguise.org/enthusiast/), the other commonly used fanlisting script also written in PHP. I tried [Erin's fork of Enthusiast](https://github.com/DudeThatsErin/enth) specifically, since InfinityFree uses version 8.2 of PHP Enthusiast also has extra features that BellaBuffs does not have, including allowing fanlisting members to set passwords and even managing the entire fanlisting collective.

Unfortunately, I encountered a critical issue with Enthusiast when I tried it: whenever I added a fanlisting to my joined fanlisting list in the admin panel, the home page of the fanlisting collective would go completely blank. I do not know the cause of the issue, and I was not familiar enough with PHP to be confident in attempting to investigate the entire fanlisting collective code just to find the culprit, especially when it uses MySQL database to store data, adding another complexity in troubleshooting it.

Therefore, I later tried BellaBuffs, and chose BellaBuffs as the script to power my fanlistings, then code my own fanlisting collective myself.

There were a few setbacks I encountered when I was building the [{{ cite "Cassette Beasts" }} fanlisting](https://fan.leilukin.com/cassettebeasts) with BellaBuffs and hosting the fanlisting on InfinityFree — I learned that InfinityFree's free hosting plan [does not support PHP `mail()` function](https://forum.infinityfree.com/t/sending-email-from-your-website-php-mail/49242), which is used by BellaBuffs.

## Integrating PHPMailer into BellaBuffs

BellaBuffs includes the optional features to email new members after submitting the join form, email the fanlisting admin when a new member joins or email new members when their applications were approved. The original BellaBuffs script achieved this by using PHP's built-in `mail()` feature, which unfortunately the free hosting of InfinityFree does not support, so I had to figure out an alternative way for my fanlisting on InfinityFree to send emails.

Thankfully, InfinityFree suggested using PHPMailer, and even providing a [contact form powered by PHPMailer](https://github.com/InfinityFreeHosting/contactform) as a sample. As a result, I spent time in trying to incorporate PHPMailer into BellaBuffs based on the InfinityFree's PHPMailer contact form code, and voilà, I did it!

I am glad that despite my inexperience in PHP, I was able to apply the programming knowledge I learned from building my main site and taking online coding courses to build my fanlisting.

After successfully setting up the {{ cite "Cassette Beasts" }} fanlisting, I decided to fork BellaBuffs and release my version of the fanlisting script with PHPMailer integration, in case there are others who want to use BellaBuffs to build fanlistings, but cannot or do not want to use the PHP `mail()` function.

You can download my BellaBuffs fork and learn about how to use it from [its GitHub repository](https://github.com/helenclx/BellaBuffs-PHPMailer).

## Building Beehive

To give myself more practice in PHP as I built my first fanlisting, I decided to code my fanlisting collective in PHP as well.

I decided to name my fanlisting collective Beehive, since I have been using my drawing of a bee with a pair of glasses as my main avatar on the Internet, I figured it would be a good idea to name a subsite of mine something related to bees.

Furthermore, Beehive is a fitting name for a fanlisting collective, as beehives house honey bees, while this website houses all the fanlistings I created, maintain, joined and have applied to join.

Welcome to Beehive! 🐝
