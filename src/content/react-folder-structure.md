---
title: "Voice Chat Bot"
date: "2025-12-07"
slug: "voice-chat-bot"
tags: ["ai"]
unreleased: true
---

React Folder Structure
The lack of opinion in JavaScript frameworks (and ecosystem in general) is both freeing and confusing. I prefer having a strict ruling vs write your own rule. I prefer opinionated vs unopinianted frameworks. Yet here I am, 1 full year in React professionaly and need to rumage through layers of other people's opinion until I am satisfied with it. Today's topic is React folder structure.

React Project Size
Your folder structure will vary depending on how large your codebase are. Here's my categorization:
Small: not even needing a router library because its just a few pages (or even only 1)
Medium: several routes but with basic features
Large: several routes and sub-routes with several features and sub-features

Small to Medium Folder Structure
You may be working alone in this codebase, and this is the freedom of unopinoated framework: you can do whatever you want! But if you plan to share your code publicly, consider using this folder structure:
src
components
routes
hooks
utils
libs
This will make your codebase follows the "industry" standard (didn't I say React is unopionated?)

Large Folder Structure
These codebase you may be working with several people, so I highly suggest using feature based approach. It's similar to small/medium codebase with 1 more folder: /feature

The Feature Folder
Inside it, you can have the same structure as your src. You can have components, hooks, utils even store.
src
components
routes
features
awesome-feature
components
utils
hooks

Why Tho
This will make code separation clear without making them too scattered around the codebase, so it will be easy to read thus easy to maintain.
You also benefit from smaller bundle size, as long as you keep files around 300-600 lines only.
Testing it will also be a breeze, each test unit lives inside its own feature specific folder.
It also adheres to clean code standard, each feature can stand alone and not depend on others. You can even force a strict rule of not allowing cross feature folder import. So all shared componet should graduate to the src/components folder.
Above all, your code will be easy to read and navigate to.

How I Write Feature Folder
I start from routes, let's say it
