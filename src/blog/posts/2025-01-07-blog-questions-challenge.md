---
articleTitle: Blog Questions Challenge
desc: My answers to a blog questions challenge I was tagged for.
date: 2025-01-07T16:24:26+0800
categories: ["site meta"]
toc: true
---

I was tagged by [~hedy](https://home.hedy.dev/) for a [blog questions challenge](https://home.hedy.dev/posts/blog-questions-challenge/). I put a lot of thoughts into how I build and set up my website, so I am happy to have been invited to talk about the meta aspects of my website, including my blog. Thank you, ~hedy!

## Why did you start blogging in the first place?

I learned about the concept of blogs for the first time when I was a secondary school student in the later half of the 2000s. I was introduced to blogs by a Malaysian Chinese secondary school magazine named {{ cite "Xuehai Weekly" }} ([《学海周刊》]{lang=zh}).

As an undiagnosed autistic kid who was more comfortable communicating and expressing themself through writing, and had been keeping a journal, I was fascinated by the concept of a personal journal on the internet. Therefore, after trying it out, blogging immediately became one of my main hobbies, and I enjoyed browsing and reading other people's blogs as well. I loved blogs for allowing ordinary people to write and publish their writing to express themselves outside traditional publishing channels.

## What platform are you using to manage your blog and why did you choose it?

This blog and my website where this blog is part of, Leilukin's Hub, is built with the static site generator [Eleventy](https://www.11ty.dev/).

After coding Leilukin's Hub from scratch for the first time in 2022, and working on the website for a while, I started to get frustrated with having to duplicate the HTML of my layout by hand over and over across all my HTML files to maintain a consistent layout, especially when you wanted to change parts of your layout. Therefore, I began to search for solutions, and discovered static site generators (SSGs).

I chose Eleventy over other SSGs, mainly because of its flexibility, including by allowing users to customise their file directory structure and supporting multiple templating languages. The fact that Eleventy is written in JavaScript means it has the advantage of being built in a familiar language for someone who was already learning front-end web development like me.

Using an SSG like Eleventy to build my blog means once I set up my website layout and page directory structure, when I draft and write a blog post, I can focus on my words by writing on a Markdown file, and let the SSG handle the HTML output.

Leilukin's Hub also has a [tumbleblog]([Leilukin's Hub Tumbleblog](https://tumbleblog.leilukin.com/)) hosted on a subdomain and powered by a blogging engine written in PHP named [Chyrp Lite](https://chyrplite.net/). I use Chyrp Lite like a self-hosted alternative to a Tumblr blog, in that Chyrp Lite also allows you to create different type of posts such as text, photo, video, link, quote, etc. The fact that Chyrp Lite is written in PHP also makes it a good lightweight alternative to WordPress.

## Have you blogged on other platforms before?

During my teenage blogging years in the 2000s, I tried out many different blogging platforms, including primarily English ones such as Blogger and WordPress.com, as well as Taiwanese ones such as Wretch ([無名小站]{lang=zh}), Roodo ([樂多日誌]{lang=zh}) and Yam Blog ([天空部落]{lang=zh}), which were all eventually shut down. Later, I settled for a now-defunct Malaysian Chinese blogging community that powers members' blogs with a Korean blogging engine named Tattertools.

Since 2011 to late 2024, I continued blogging by doing it on Tumblr, before deciding to retire from Tumblr to put more focus on my own websites, including Leilukin's Hub.

## How do you write your posts?

I use [Obsidian](https://obsidian.md/) to draft and write my posts. Obsidian had become my main note-taking app since I started using it myself, so it is a natural choice to plan and do my writings on Obsidian. It helps that Obsidian note files are in Markdown format, and Eleventy supports generating HTML with Markdown files. Writing my posts in Obsidian also allows me to focus on my words, and letting the [LanguageTool Integration](https://github.com/Clemens-E/obsidian-languagetool-plugin) community plugin spellcheck my writing, without worrying about the technical aspects of publishing my post to the web first.

After I finish writing a post in Obsidian, I copy the Markdown file content, paste into a new Markdown file in my blog post folder in Visual Studio Code, my main code editor. Then, I add frontmatter to the blog post's Markdown file to configure data of the post such as title, description and categories, use Visual Studio Code's built-in terminal to enter Eleventy commands to generate the new post, then use Git and GitHub Actions to publish the new post to my website.

## When do you feel most inspired to write?

I can get inspired to write by just about anything: books, articles, essays and blog posts I read, interesting things I discovered when browsing the web, video games I play, conversations with other people, etc.

When inspiration strikes, I jot down my ideas in Obsidian, so when I have time, I can go through my Obsidian notes and plan how to write a post about those ideas, beginning by outlining what I want to include in my posts.

## Do you publish immediately after writing, or do you let it simmer a bit as a draft?

I publish my posts immediately after completing a draft, so the question is how long does it take for me to complete a draft. I plan ahead before drafting my posts because I want to be considerate for how I express my thoughts, so I only complete and publish my draft after such considerations, which often takes time.

## What's your favourite post on your blog?

My favourite post on this particular blog would be [my submission to the November 2024 IndieWeb Carnival](2024-12-01-indieweb-carnival-november-2024-impact.md), where I talked about impact by reflecting on other people's impact on me and my life, and my beliefs about everyone being capable of making an impact on others.

## Any future plans for your blog?

I do not have any concrete future plans for this blog specifically, but I do have more ideas for what to do to other parts of Leilukin's Hub, including writing more articles and creating more [shrines](/shrines) and [fanlistings](https://fan.leilukin.com/).

## Why do you write? Other than your blog, do you write long-form content elsewhere?

As an autistic person, verbal communication is not my strongest skill, so I prefer to communicate my ideas and express myself through writing. I have found writing a great way to relax and organise my thoughts. Furthermore, I write because I like to read, and reading other people's writings have inspired my own writing.

Aside from blog, I have also written and published articles about various topics on my website. These articles are distinct from blog posts in that while my blog posts are usually written about events or subjects that happened recently, my articles are meant to be more static pages containing useful information or my thoughts on certain topics, not just what is happening right now.

## Your Turn

I cannot decide who else to tag for this blog questions challenge, because not all my acquaintances in the personal web are bloggers and some bloggers are not huge fans of meta type posts.

Therefore, consider this an open invitation: If you find this post and are interested in answering these questions yourself, feel free to write your own post!
