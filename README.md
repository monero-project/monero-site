# Repository moved to https://repo.getmonero.org/monero-project/monero-site

This repository has recently been moved to https://repo.getmonero.org/monero-project/monero-site  
Please submit your changes on the new repository.

To contribute on https://repo.getmonero.org/ please proceed this way:

 * Create an account or login using OAuth2 with your GitHub account
 * Create a password
 * Fork the repository https://repo.getmonero.org/monero-project/monero-site
 * Push your branches to your newly forked repo, or contribute just like you did on GitHub.

Thanks for your comprehension.

# Monero Website Instructions

Copyright (c) 2014-2018, The Monero Project

## IMPORTANT MULTILANGUAGE UPDATE NOTICE
The multilingual update has recently been rolled out. The website now requires more steps to update so everyone can have a smooth experience. Please read all instructions carefully and follow them all! If they are not all followed, this leads to a ton of work for the website maintainers. A warning will be issued to repeat offenders. If you need help/support, you can find it on `#monero-translations` and [Taiga](https://taiga.getmonero.org/project/erciccione-monero-localization/wiki/home)

## Table of Contents

1.0 Introduction

2.0 What you'll need

3.0 General change recommendations

4.0 How to make a blog post

5.0 How to make a User Guide

6.0 How to make a Moneropedia entry

7.0 How to make a FFS Proposal

8.0 How to update the Team page

9.0 How to make an Event

10.0 How to update the Roadmap

11.0 How to add a new Merchant

12.0 How to add a question to the FAQ

13.0 How to add a publication to the Library

14.0 How to translate a page

15.0 How to add a new language

16.0 License

## 1.0 Introduction

This README here to walk you through everything you need to know to make changes, edits, or even completely new pages for the new [getmonero.org website](https://getmonero.org/). It'll definitely be a bit of a ride, so strap yourself in.

Feel free to skip down to a relevant section if you already know what you need. So to go to the 'How to make a User Guide' section use your find function and type '5.0'.

If for any reason you have questions or need to contact us, you can find us on the IRC channel #monero. We'll do whatever we can to help you.

## 2.0 What you'll need

* Jekyll: [getmonero.org](https://getmonero.org/) is made using a simple, static website generator called [Jekyll](https://jekyllrb.com/). You will need it installed on your system to test any changes that you made. If you're using Windows, you will want to check out [this site](http://jekyll-windows.juthilo.com/) for instructions on how to get Jekyll working on your system. If you're using a Linux-based system you can just follow the instructions on the website to get up and going:
  * Install Ruby
  * Install Bundler: `gem install bundler`
  * Install Jekyll with all dependencies (run from the project directory): `bundle`

* GitHub/GitLab: Pretty much everything in Monero is hosted on [GitHub](https://github.com), [getmonero GitLab](https://repo.getmonero.org/users/monero-project/projects) or [GitLab](https://gitlab.com/users/kovri-project/projects) and uses Git as the primary version control system. If you're not familiar with how to use Git, you can check out [this tutorial](https://guides.github.com/activities/hello-world/) for a good overview. It will take you through pretty much everything you'll need to know to edit the website. If you haven't already, register for GitHub and fork the [Monero Website repository](https://repo.getmonero.org/monero-project/monero-site).

* Markdown experience: To write pages, you're going to need to know how to use Markdown. It's basically an in-between language that enables people who don't know HTML to just write, and it will be compiled into HTML for you. You can find a great Markdown cheat sheet with examples [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). IF you need more help, Google and YouTube are great resources.

*Note: If you're confused, feel free to click other files in the same directory (folder) that you are in for the step that you are on to see some working examples. Compare them to the instructions and you should understand better.*

Once you have the above list of things, it's typically a good idea to build the website from your local computer to make sure it works before you make any changes. To do this, complete the following steps:

1. Navigate to your local `monero-site` repository.
2. Serve the website: `bundle exec jekyll serve --baseurl ''`
3. Open a browser and go to [http://127.0.0.1:4000](http://127.0.0.1:4000).
4. If all went well, you should see the Monero website and you're ready to make changes.

## 3.0 General change recommendations

The average Monero user that will want to contribute to the website should probably stick with making blog posts, user guides, Moneropedia entries, or a Forum Funding System proposal, all of which are covered in this document. If this is all you want to do, don't worry, it's actually not a daunting task at all. If you are not well versed in web development however, it is not recommended you try to do anything beyond that.

If you are a web developer and would like to make large macro-level changes, it would be best to get in contact with rehrar. The HTML/CSS framework is custom, though quite easy to use for a seasoned developer. Still, there are some pages that are more complicated than others and would require fair amounts of styling changes should the structure change significantly.

This website is completely open-source however and anything and everything is available for changing should the community deem it necessary.

Every section from here on out will talk about how to make a specific type of web page. It will start with a bullet point list of what to do for the advanced among you that just want a quick overview. For those who are still learning this list is followed by a detailed explanation, starting with example front matter. Any variable in the front matter written in all caps you are expected to change (make sure your changes are not all caps though). It will then lead you through the rest of the process until it's time to type your content.

A few random points of note:

- All external links must have http:// or https:// in front of them or they will not redirect properly.
- If you want to add a new page to the navigation, you should go to ALL LANGUAGES in the `_data/lang` folder including `template` and add the page.
- It is strongly strongly STRONGLY encouraged that if you make a change, you - at the minimum - test it on your local machine before submitting a PR. Sometimes unexpected things may happen due to a change. If you change a page, check the whole page on multiple screen sizes and browsers to make sure there wasn't any collateral damage.

### 3.1 Housekeeping

#### Editing the Site
When you make an edit to ANY page on the English language of this website, PLEASE copy your changes into the corresponding `/_i18n/template/` file as well.

The Monero Translation workgroup will do their best to keep tabs on all changes of the site, but it'd be nice to notify them that you've changed a page so they can make sure the equivalent pages are changed accordingly in the other languages.

#### GitLab Issues
We ask that if you open an issue on the site that you remain available for clarifying questions or corrections. We do our best to close issues that are resolved when we make changes to the site, but If your issue is resolved by a contributor and the issue is not closed we ask that you close it in a timely manner. A contributor (rehrar, SamsungGalaxyPlayer, or other community members, etc) may ask you to close an issue after it's confirmed fixed. Please review the changes to the site and close your issue if you can verify that it's fixed.

#### Pull Requests
Contributors should use [issue keywords](https://docs.gitlab.com/ee/user/project/issues/automatic_issue_closing.html) to make it easier for maintainers to close issues when they merge. Include close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved, etc in the commit message or pull request description, so that the correct issue can be closed if your PR is merged. (Example: 'fixes #1234' could close Issue 1234 when merged.)

Pull requests allow others to make comments or review your changes to the site. We ask that you remain available to comment or make changes to your PR. Pull requests with pending changes for more than 30 days will be closed and need to be resubmitted in the future. Sometimes someone else's changes might make your changes conflict with the current site. If that happens you may need to rebase your PR. (If you're unsure about how to do so, you can reach out to other contributors on IRC (freenode #monero) and someone should be able to walk you through it.

### 3.2 Updates on User Guides

User guides and developer guides may need regular updates, either to fix typos, to add explanations regarding new features, to update screenshots, and so on.
As those guides are translated in several languages, it could be hard to keep all languages version up to date with the English version.
To keep track of those changes, guides are versioned using a snippet at the top of each localized (\_i18n/en/resources/\*-guides) file:
```
{% assign version = '1.1.0' | split: '.' %}
```
This snippet is responsible for keeping track of the language version.

The based version (English version) is however also tracked in the `Front Matter` from the /resources/user-guides/ or /resources/developer-guides/ directory file:
```
mainVersion:
  - "1"
  - "1"
  - "0"
```

- First number is the Major version number
- Second number is the Minor version number
- Third number is the build number.

When you update a guide, you are responsible for updating this version tracking in every file involved in your update:

- For an update on English files, you will update the version tracking number in the `Front Matter` of /resources/\*-guides/ and in \_i18n/en/resources/\*-guides
- For an update on localized files, you will update the version tracking number in the \_i18n/<local>/resources/\*-guides only, and
  - You will not update to a higher Major or Minor version number than the reference English guide
  - If you want to update to a higher Major or Minor version number, you should update the English version accordingly so that English is always the highest Major.Minor version.

And you will increment the version number in the following way:

- Cosmetic change only (typo, rephrasing, screenshot update with exact same field names and positions): Increment the third number (build number). We do not want to even warn the user about this update in another language.
- Changes that add instructions or explanations (or screenshot updates with different field names and positions), without making the old version misleading for users: Increment the second number (Minor version number) and reset the third to 0. We want to let the user know the English version could be more accurate and helpful to read.
- Changes that makes the old version false, or misleading to users: Increment the first number (Major version number) and reset the second and third to 1.0. We want to discourage users from reading this too outdated version that could lead them to do wrong things (for instance, buy the wrong algo of mining power on nicehash, after a pow change).

## 4.0 How to make a blog post

### 4.1 Quick Start
* Make new .md file in \_posts (named whatever, no spaces)
* Front Matter (below)
* Write Blog Post
* Test/Build
* Submit PR

### 4.2 Make a file
Navigate to the \_posts folder of the website and make a new file. Be sure the file name has no spaces and the ending is .md

### 4.3 Front Matter
```
---
layout: post
title: CHANGE TO YOUR TITLE
summary: A BRIEF ONE OR TWO SENTENCE SUMMARY
tags:  [CHOOSE, RELEVANT, TAGS, AND, SEPARATE, THEM, BY, COMMAS, KEEP, THE, BRACKETS]
author: YOUR NAME OR HANDLE HERE
---
```

### 4.4 Write
After the front matter is finished you are free to write the remainder of your blog post in markdown.

### 4.5 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically and test that your page appears in the 'News' section of the website, as well as the sidebars.

### 4.6 Submit Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 5.0 How to make a User Guide

### 5.1 Quick Start

* Create file in /resources/user-guides with an .md ending and no spaces in filename.
* File content as in 5.3
* Create file in /\_i18n/en/resources/user-guides with the exact same filename as above ending in .md
* Write User Guide
* Add versioning snippet
* Copy User Guide file to ALL LANGUAGES in /\_i18n/[ALL LANGUAGES]/resources/user-guides
* set translation to false in the snippet the top of each language version of your User Guide, except the original language
* Add guide using markdown in the correct category, and in alphabetic order, in ALL LANGUAGES to /\_i18n/[ALL LANGUAGES]/resources/user-guides/index.md being careful not to mess with any indentation
* Test/Build
* Submit PR

### 5.2 Make a file
Navigate to the /resources/user-guides folder and make a new file. Be sure the file name has no spaces and the ending is .md

### 5.3 Content of file
```
---
layout: user-guide
title: TITLE OF YOUR USER GUIDE
permalink: /resources/user-guides/NAME-OF-FILE-GOES-HERE.html
mainVersion:
  - "1"
  - "1"
  - "0"
---

{% tf resources/user-guides/NAME-OF-FILE-GOES-HERE.md %}
```

Copy this exactly and merely change the files names where indicated.

### 5.4 Create file in localization folders
Navigate to the /i18n/ folder and choose the correct folder for your language. Navigate further into the `resources/user-guides` folders and make a .md file with the EXACT SAME filename as the you made before.

### 5.5 Write
Write your user guide. Be succinct but thorough. Remember, people will be using your guides when they need help. Make sure all the information is there. Feel free to use images or screenshots if necessary to help get your point across.

The title should be at the top of the User Guide using a single `#` for an H1 tag. Titles will not be automatically put on these pages as with other pages. There should be NO front matter on this file.

Add the version snippet at the top of your guide (before your title):
```
{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
```
Your version should start at `1.1.0` as it is the first Major, first Minor, and no cosmetic changes have occurred.

### 5.6 Copy User Guide file into all languages
Copy your file and navigate to each language file in the /i18n folder. In each language folder (INCLUDING template) go to the resources/user-guides folder and paste your user guide (don't worry, you don't have to translate it) there. This is very important, and the site will not build if the file with the same name is not in each language folder.

As you paste into each folder, open up the file and edit the snippet at the top of the file (before your title) to mark it untranslated:
`{% include disclaimer.html translated="false" version=page.version %}`. This does not need to be done in the original language that the User Guide was written in.

### 5.7 Add Guide to the 'User Guide' landing page of EACH LANGUAGE
In the /\_i18n/[ORIGINAL LANGUAGE OF USER GUIDE]/resources/user-guides folder, find the file labeled index.md and open it.

DO NOT CHANGE ANYTHING IN THIS DOCUMENT BESIDES WHAT YOU ARE INSTRUCTED TO.

This file will look quite different because it's HTML. Don't panic. Simply Ctrl + F (i.e. the find feature) and search for the category that you want to put your User Guide in. You will see there are some sections that are not indented like the others. They are flush with the left side of the screen. **Do not change the indentation.** You can put markdown in these areas.

Once you've identified the non-indented area under the category you would like your User Guide to be under, you can use markdown to insert your link with the others in alphabetic order. `[TITLE OF USER GUIDE]({{site.baseurl}}/LINK-TO-USER-GUIDE.html)`. Please note that the file name in between the parentheses must be EXACTLY the same name as the permalink you made in step 5.3, but with a `.html` at the end instead of `.md` and the snippet `{{site.baseurl}}/` before the link.

In the event that you think your User Guide should be in a new Category that doesn't exist yet, contact rehrar to make one for you.

Repeat the above process for each language version of this index page INCLUDING THE template.

### 5.8 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically and test that your link appears in the correct category and that it leads to your User Guide when clicked. Test your User Guide in the browser and contact rehrar if there are any bugs.

### 5.9 Submit Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 6.0 How to make a Moneropedia Entry

### 6.1 Make a Global file
Navigate to the /resources/moneropedia folder and make a new file. Be sure the file name has no spaces and the ending is .md
Fil this file with this exact content:
```
---
layout: moneropedia
---

@moneropedia_article

{% t global.lang_tag %}
{% tf resources/moneropedia/account.md %}

```

### 6.2 Make the localized File
Navigate to the /\_i18n/en/resources/moneropedia folder and make a new file. give it the same <name>.md than in previous step.
Start the file with the front Matter:
```
---
entry: "PUT THE NAME OF THE TERM HERE IN QUOTE, THIS IS HOW IT WILL SHOW UP ON THE LANDING PAGE"
terms: ["PUT", "TERMS", "HERE", "EXPLAINED", "BELOW"]
summary: "PUT SUMMARY OF YOUR ENTRY HERE IN QUOTES"
---
```

There are two things to highlight:  
The `terms:` section of the front matter can be filled with as many terms as you would like. This is how other Moneropedia entries will link to this page. You can link to other Moneropedia entries as well in your page by putting an ampersand before the term used, i.e. `@THE-TERM-USED`. This will make an automatic link in the Moneropedia entry to the referred term, replace the @term with the word used in that terms `entry:` area of the front matter, and on hover it will show the summary. How cool is that?  
The lines must not contain trailing whitespace, and it must be no blank lines added, otherwise the site with not build correctly.

### 6.3 Write
Write your Moneropedia entry. Remember that you can link to other Moneropedia entries using `@term-used-in-entry` as described above. Just go to the .md file of the Moneropedia entry you want to link to and use any of the terms in the `terms:` field of the front matter. Be sure to write whichever one you choose EXACTLY as shown and preceded by an ampersand.

### 6.4 Copy to other languages
Copy the file from the /\_i18n/en/resources/moneropedia folder to the other /\_i18n/<language>/resources/moneropedia folders and add the untranslated snippet at the same time just after the front matter, so it looks like:
```
---
entry: "PUT THE NAME OF THE TERM HERE IN QUOTE, THIS IS HOW IT WILL SHOW UP ON THE LANDING PAGE"
terms: ["PUT", "TERMS", "HERE", "EXPLAINED", "BELOW"]
summary: "PUT SUMMARY OF YOUR ENTRY HERE IN QUOTES"
---

{% include untranslated.html %}
```

If you want to translate in your native language, go to the 14.3.2 section below to read about specificities.

### 6.5 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically and test check the link to your entry is appearing on the alphabetical list of Moneropedia entries and that it leads to your entry when clicked. Test your Moneropedia entry in the browser and contact rehrar if there are any bugs.

### 6.6 Submit Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 7.0 How to make a FFS Proposal

Before starting this section, it is recommended that you read the User Guide for [How the Forum Funding System works](#) as well as the [Forum Funding System Terms and Guidelines](#). If you do not read these expect your FFS proposal to be laughed at, not to mention not funded.

### 7.1 Quick Start

* Read [How the Forum Funding System works](#) and the [Forum Funding System Terms and Guidelines](#).
* Make the .md file in the /forum-funding-system/proposals folder. Remember the name.
* Choose your front matter layout based on whether your proposal is an Idea (`ffs-ideas`) or Open Task (`ffs-ot`) as specified in the above reading
* Fill out the rest of the Front Matter below, leaving the `address` and `paymentid` sections empty
* Edit the ffs.yml file. I strongly recommend you read this section.
* Write the proposal
* Test/Build
* Submit PR

### 7.2 Make the proposal

Navigate to the /forum-funding-system/proposals folder and make a new file. Be sure the file name has no spaces and the ending is .md. It is very important that you remember the EXACT name of this file.

### 7.3 Front Matter

```
---
layout: ffs-ideas OR ffs-ot
title: NAME OF YOUR PROPOSAL
summary: A BRIEF SUMMARY OF YOUR PROPOSAL
author: YOUR NAME OR HANDLE
address:
paymentid:
---
```

The layout will depend on if you are simply presenting an idea that you do not plan to do yourself or if you are presenting an idea that you are capable and willing to do, the chosen layout will be `ffs-ideas` or `ffs-ot` respectively. You can get more information in the [How the Forum Funding System works](#) User Guide. Fill out the next three sections as normal (title, summary, author), but leave the last two (address, paymentid) blank. Again, DO NOT PUT ANYTHING HERE.

### 7.4 Editing the .yml file

Navigate to the /\_data folder and open the file titled `ffs.yml`. In this file you will find a long list of FFS proposals.

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Identify the section you will be placing your proposal in. If you used `ffs-ideas` in the layout variable in the front matter then you will be putting your proposal in `stage: ideas`, and if you used `ffs-ot` in the layout, then you will be putting your proposal in the `stage: Open Tasks`. Copy the following code:

```
- name:
  url: /forum-funding-system/proposals/
  summary:
  author:
```

and paste it as the very top underneath the `proposals:`.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail. If in doubt, put the line with the hyphen (-name) all the way to the left and press space four time, and then put the remainder of the variables all the way to the left and press space six times.**

Fill in the information.
* `name:` should be the same as the title chosen in 7.3  
* for `url:` you should append the EXACT name of the file as chosen in 7.2 to the current string but with `.html` at the end instead of `.md`. So it should look like `/forum-funding-system/proposals/YOUR-FILE-NAME.html`
* `summary:` should be the same summary copy and pasted from the front matter in 7.3
* `author:` should be your name or handle, again the same as the front matter in 7.3

Sorry for the repetition here, but it's how Jekyll is working to put things correctly.

### 7.5 Write the proposal
Go ahead and write your proposal now. Go back to your .md file in `/forum-funding-system/proposals`. Be sure to follow the [Forum Funding System Terms and Guidelines](#). Let me be the first to thank you for wanting to contribute your time and energy to better Monero.

### 7.6 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `ffs.yml` file back in 7.4. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Forum Funding System section of the website and make sure that your proposal is showing up in the correct areas, and that when the linked is clicked it takes you to the correct page with your proposal. Use this time to read everything for accuracy and make any changes. If not, you will have to do multiple PRs to make edits and updates. It is this way by design so we can keep track of edits made by authors.

### 7.7 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 8.0 How to update the Team page

If you are acting on behalf of another individual, please make sure you get their permission first before adding them onto the Team page.

### 8.1 Change the .yml file
Navigate to the `/_data/` folder and open `team.yml`. You will notice a long list separated by main `-area:` tags.

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the area that you want to update and copy the code below:
```
- name:
  url:
```
Put the name or handle of the person in the `name` section and in the  `url:` section put the link to their GitHub or GitLab URL (it must have https:// at the beginning). If they have no GitHub, then you may leave it blank, it won't mess anything up.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### 8.2 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `team.yml` file back in 8.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Team page `/community/team/` and check to see that the contributor is showing up in the correct place. Click their GitHub or GitLab link (if applicable) and make sure it redirects correctly. Test the page and let rehrar know if there are any bugs.

### 8.3 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 9.0 How to make an Event

### 9.1 Edit the .yml file
Navigate to the `/_data/` folder and open `events.yml`. You will notice a  list separated by hyphenated `-event` tags.

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the area that you want to update and copy the code below:
```
- event:
  where:
  when:
  description:
  link:
```
and paste it IN THE CHRONOLOGICAL ORDER that it will be in. So if there is an event happening before yours, make sure it is higher up than yours. If there is an event happening AFTER yours, make sure it is after your event.

Fill in the data as follows:
* `event:` The name of the event goes here as well as the date. The recommended format is: `Event Name - January 1st, 2000`
* `where:` Where the event will take place. Venue name and address are recommended.
* `when:` Date and time
* `description:` Description of the happenings of your event
* `link:` The website of your event (if applicable, this can be left blank and everything will be ok). This link must have http:// at the beginning if it is an external link.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### 9.2 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `events.yml` file back in 9.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Events page `/community/events/` and check to see that the event is showing up in the correct place. Click their Event url link (if applicable) and make sure it redirects correctly. Test the page and let rehrar know if there are any bugs.

### 9.3 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 10.0 How to update the Roadmap

### 10.1 Edit the .yml file
Navigate to the `/_data/` folder and open `roadmap.yml`. You will notice a list separated by hyphenated `-year` tags.

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the year that you want to update and copy the code below:
```
- name:
  date:
  status:
```
and paste it in the correct year's `accomplishments:` section IN THE CHRONOLOGICAL ORDER that it will be in. So if there is a accomplishment that happened/is happening before the one you are inputting, make sure it is higher up than yours. If there is an accomplishment that happened/is happening AFTER yours, make sure it is after yours. If you don't have exact dates, just do your best to estimate.

Fill in the data as follows:
* `name:` The name of the accomplishment. Try to keep it short, a sentence or two at most.
* `date:` When the accomplishment happened (past) or when it is expected to happen (future)
* `status:` If the task is done, put `completed`, if the task is currently in the works put `ongoing`, and if work on the task has not yet started to your knowledge, but is expected to, put `upcoming`.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### 10.2 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `roadmap.yml` file back in 10.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Events page `/resources/roadmap/` and check to see that the newly added accomplishment is showing up in the correct place in the correct year. Test the page and let rehrar know if there are any bugs.

### 10.3 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 11.0 How to add a new Merchant

### 11.1 Edit the .yml file
Navigate to the `/_data/` folder and open `merchants.yml`. You will notice a list separated by hyphenated `-category` tags.

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the category that best describes your business/service and copy the code below:
```
- name:
  url:
```
and paste it in the correct category under the `merchants:` section.

Fill in the data as follows:
* `name:` The name of the business/service.
* `url:` The external url of the business/service. This link must have http:// (or https://) at the beginning if it is an external link.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### 11.2 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `merchants.yml` file back in 10.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Merchants page `/community/merchants/` and check to see that the business is showing up in the correct category and that the link is redirecting correctly. Test the page and let rehrar know if there are any bugs.

### 11.3 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 12.0 How to add a question to the FAQ

### 12.1 Copy/Paste Code
Navigate to the `/get-started/faq` folder and open the `index.md` file. Inside you will see HTML code, but you will see it is very repetitive.

Copy the code below:
```
<div class="tab">
    <input id="tab-CHANGETHIS" type="checkbox" name="tabs" class="accordian">
    <label for="tab-CHANGETHIS" class="accordian">CHANGE QUESTION</label>

<div class="tab-content" markdown="1">

CHANGE ANSWER

</div>

</div>
```
And paste it at the very bottom of the file (literally underneath everything else).

Now we're going to change just a couple of things. Find the section with:
```
<input id="tab-CHANGETHIS" type="checkbox" name="tabs" class="accordian">
<label for="tab-CHANGETHIS" class="accordian">CHANGE QUESTION</label>
```

and change the sections in between the quotes that say 'CHANGETHIS'. Leave the first part `tab-` alone. You can change it to anything really, as long as they are identical in the input and label, but it's good to see what number is on the last FAQ question (i.e. `tab-nine`) and make it the next number.

Now inside the label tag you're going to find where it says 'CHANGE QUESTION' and change it to the Question you want answered.

Lastly, find the words 'CHANGE ANSWER' and change it to the answer of your question.

**DO NOT MESS WITH THE INDENTATION HERE. The div that has `markdown=1` MUST be flush with the left side, the answer to the question must start flush with the left side, and the `</div>` MUST be flush with the left side.**

### 12.2 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build is successful, go to the FAQ page `/get-started/faq/` and check to see that your question is showing up and, when clicked, the answer drops down. If not, check to make sure that the `id="tab-CHANGETHIS"` in the input and the `for="CHANGETHIS"` in the label are identical to each other. Test the page and let rehrar know if there are any bugs.

### 12.3 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 13.0 How to add a publication to the Library

### 13.1 Add your file
Navigate to the `/library/` folder and drop your publication file here.

Please remind to minimize the size of your publication. For PDF, you'll find a large amount of service to compress your file with a minimal loss in quality.

### 13.2 Edit the .yml files
Navigate to the `/_i18n/` folder and open `en.yml`.

Go down until you find the `library` section. You will notice a list separated by hyphenated `-category` tags in a `books:` section.

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the category that best corresponds your publication and copy the code below:
```
- name: "<name>"
  file: "<filename>"
  abstract: >
    <abstract><br>
    <on multiple lines>
```
and paste it in the correct category under the `publications:` section.

For books, paste it in alphabetical order. For magazines, past it at the top.

Fill in the placeholders as follows:
* `<name>` The name of the publication, as it should be displayed.
* `<file>` The filename you have dropped in `/library/` folder, including extension.
* `<abstract>`,`<on multiple lines>` An abstract for your publication, formatted with html newlines `<br>`

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

open other `*.yml` files and copy the same code to it, in the exact same place.

### 13.3 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in a `*.yml` file back in 13.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Library page `/library/` and check to see that the publication is showing up in the correct category and that the link is downloading correctly. Test the page and let rehrar know if there are any bugs.

### 13.4 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 14.0 How to translate a page
In this section you'll find the info you need to translate a page and add a new translation, but keep in mind that Monero has a [Localization Workgroup](https://taiga.getmonero.org/project/erciccione-monero-localization/) who coordinate and give support to translators-volunteers. You can find an updated guide and an example of the workflow we use on our [Guide on Taiga](https://taiga.getmonero.org/project/erciccione-monero-localization/wiki/translating-monero-website) (frequently updated), also, for live support/request of infos, come chat on `#monero-translations` (Freenode/IRC, riot/matrix, MatterMost).

### 14.1 Quickstart
* Navigate to the correct language in the /i18n folder and find the page you wish to translate
* Click the file and translate the page, not touching any HTML or markdown.
* Remove `{% include untranslated.html %}` from the page
* Test/Build
* Submit PR

### 14.2 Naviate to correct file
Go to the /i18n folder and find the two letter code for the language you wish to translate for. Enter that folder and find the file you wish to translate. The filenames are all in English and MUST NOT BE CHANGED.

### 14.3 Translate the file
Here you can do your translation. Depending on the page, you may have to maneuver around some HTML or markdown. In general, anything between two tags (such as `<p>TRANSLATE THIS</p>`) should be fine. Testing is VERY important, so do NOT skip step 13.4. If during testing, the page appears different from the original English page (besides the translated text of course), you did something wrong and may have to start again.

#### 14.3.2 Notes for Moneropedia Entries
Moneropedia entries have two specificities:

* The Front Matter:  
Moneropedia Fron should be translated for both *entry:* and *summary:* elements. However, *terms:* should be extanded with their translation, leaving the English words **untouched**.
This is really important for compatibility purposes. With this, if a new guide is added to the site, an English term on the untranslated version of the guide in another language could be linked to the moneropedia article (of the same language).

* The old *untranslated* snippet must be removed, therefore the next section 14.4 is irrelevant here.

Finally, your entry should go from:
```
---
entry: "Entry name in English"
terms: ["English", "terms"]
summary: "English summary."
---

{% include untranslated.html %}
```
To:
```
---
entry: "Translated entry name"
terms: ["English", "terms", "translated", "terms"]
summary: "Translated summary."
---
```

### 14.4 set the 'translated' snippet to true
Somewhere on the page (usually the top) should be a snippet that says `{% include disclaimer.html translated="false" version=page.version %}`. Simply change this to `{% include disclaimer.html translated="true" version=page.version %}`. This will remove the orange bar from the bottom saying the page is untranslated.

### 14.5 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically.

If the build is successful, go to the correct page in the correct language and check to see that everything is translated, and that the page looks identical to the original English page (besides the translated text). Test the page and let rehrar know if there are any bugs.

### 14.6 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 15.0 How to add a new language
Whoo boy, this is the big one. Please follow all directions exactly.

### 15.1 \_config.yml file
Navigate to the root folder of the whole website and find the file labeled `_config.yml`. Open it and find the line that says `languages:`. Add your two letter language code (Google it if you don't know it) in between the brackets after the others already present. You will need to put a comma after the previous last one.

Example:
```
languages: ["en", "es", "NEW LANG HERE"]
```
Save and exit the file.

### 15.2 \_data folder
Navigate to the `_data/lang` folder and copy the `template` folder. Paste it into the same folder and the copy renamed to the two letter language code of the language you will be translated to.
**The template folder itself should still be there. It should not be renamed. There should be a new folder in addition to the ones that were already there.**

Translate the content of the files. Do not touch anything labeled `url`, and in the roadmap.yml ONLY translate the `name:` content.

### 15.3 \_i18n folder
Navigate to the \_i18n folder and duplicate the en.yml file. Rename the duplicate to the two letter language code of your language with a `.yml` at the end and change all sections marked 'translated: "yes"' to 'translated: "no"'. Change back to 'yes' once you have translated that section. Now duplicate the `en` folder and rename it with the correct language code.
**The original folder and yml file themselves should still be there. They should not be renamed. There should be a new folder and yml file in addition to the ones that were already there.**

Enter the .yml file and translate everything there.

### 15.3 Translate
If you will be translating the content, please refer to section 13.0 in this README for instructions on translating pages.

### 15.4 Build/Test
Build your website using `jekyll serve`. If the build is successful, navigate to any page on the site and check to make sure that your language is appearing in the dropdown for languages on both mobile and desktop.

### 15.5 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 16.0 Website License

Copyright (c) 2014-2017, The Monero Project

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
