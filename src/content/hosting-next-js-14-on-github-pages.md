---
title: "Hosting Next.js 14 on Github Pages"
date: "2024-06-16"
slug: "hosting-next-js-14-on-github-pages"
tags: ["nextjs", "CI/CD"]
---

This article should help you host your Next.js 14 project on github pages. You'll learn github actions, github pages & static hosting in Next.js 14. Additionally, you'll also learn the generateStaticParams method and understand how Next.js 14 handles dynamic path.

## Step 1: Scaffold your Next.js 14 project

Relatively straight forward, do:npx create-next-app@latest Then create your folders and pages files.

## Step 2: Push to Github

You can auto initialize a github repo from VSCode, as shown on the tab below:Or, you can manually create a repo, then init your project via command line.

## Step 3: Configure pages & actions

Go to your project repo on Github, go to settings, then pages, and configure deploy from Github Actions. As shown below,Github will auto detects your repo and will suggests Next.js flow; click configure:It'll create a new file in your project, a yaml file under /.github/workflows/ directory. Commit the changes.Back to VSCode, run:git pullIt'll pull the latest changes made by Github on your repo.Now you can create changes locally, then do git push to see Github Actions running!

## Step 4 (Optional): generateStaticParams()

If you have a dynamic route (folder with [id] brackets in them). You'll have to use [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) method, to create all your dynamic pages on build.As you can see, hosting Next.js 14 on github pages is relatively straight forward. It'll be a bit more complex once you have an ever changing content, such as blog post, to dynamically display it on your static site. Personally, I use an awkward method to push new blog in my [site](https://rezha4.github.io/rezha/blog). I have a local git branch called "write", that I checkout in to when I want to write a new blog.

There, I have a route, /blog/create, that hooks with TinyMCE rich text editor, and saves to my sqlite database.
Once done, here comes the wonky part: I commit the change, git checkout main, then git checkout my last commit from branch "write" - taking only dev.db (sqlite database). Then I push to main! Not hard at all! (crying). I am heavily considering an external backend (API) for this process...

Thanks for reading, have a great weekend and Eid Al Adha!
