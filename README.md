## Table of Contents

- [Introduction](#introduction)
- [What you'll need](#what-youll-need)
- [General change recommendations](#general-change-recommendations)
- [Translation](#translation)
- [housekeeping](#housekeeping)
- [How to make a blog post](#how-to-make-a-blog-post)
- [Updates on User Guides](#updates-on-user-guides)
- [How to make a blog post](#how-to-make-a-blog-post)
- [How to make a User Guide](#how-to-make-a-user-guide)
- [How to make a Moneropedia Entry](#how-to-make-a-moneropedia-entry)
- [How to update the Team page](#how-to-update-the-team-page)
- [How to update the Roadmap](#how-to-update-the-roadmap)
- [How to add a new Merchant](#how-to-add-a-new-merchant)
- [How to add a question to the FAQ](#how-to-add-a-question-to-the-faq)
- [How to add a publication to the Library](#how-to-add-a-publication-to-the-library)

## Introduction
This README here to walk you through everything you need to know to make changes, edits, or even completely new pages for the new [getmonero.org website](https://getmonero.org/). It'll definitely be a bit of a ride, so strap yourself in.
Feel free to skip down to a relevant section if you already know what you need.

If you need support about something related to the website, plese join `#monero-site` [Freenode/IRC](irc://chat.freenode.net/#monero-site), [Matrix](https://matrix.to/#/!txpwSzQzkuUaVbtsIx:matrix.org) and MatterMost. For general info about Monero join `#monero`. We'll do whatever we can to help you.

## What you'll need

* Jekyll: [getmonero.org](https://getmonero.org/) is made using a simple, static website generator called [Jekyll](https://jekyllrb.com/). You will need it installed on your system to test any changes that you made. Follow the instructions on the website to get up and going:
  * Install Ruby dependencies as suggested [in the Jekyll documentation](https://jekyllrb.com/docs/installation/)
  * Install Bundler: `gem install bundler`
  * Install Jekyll with all dependencies (run from the project directory): `bundle`

* GitHub/GitLab: Pretty much everything in Monero is hosted on [GitHub](https://github.com/monero-project) or [getmonero GitLab](https://repo.getmonero.org/users/monero-project/projects) and uses Git as the primary version control system. If you're not familiar with how to use Git, you can check out [this tutorial](https://guides.github.com/activities/hello-world/) for a good overview. It will take you through pretty much everything you'll need to know to edit the website. If you haven't already, register on GitLab and fork the [Monero Website repository](https://github.com/monero-project/monero-site). Please note that GitLab accounts logged in using the "Log in with GitHub" option require manual intervention in order to be able to fork repositories. Either register your account using email/password or contact the Website Workgroup via GitLab or `#monero-site` to have your GitHub OAuth profile unlocked.

*Note: If you're confused, feel free to click other files in the same directory (folder) that you are in for the step that you are on to see some working examples. Compare them to the instructions and you should understand better.*

Once you have the above list of things, it's typically a good idea to build the website from your local computer to make sure it works before you make any changes. To do this, complete the following steps:

1. Navigate to your local `monero-site` repository.
2. Serve the website: `bundle exec jekyll serve --baseurl ''`. If you want, you can speedup thi process by loading only the last blog post instead of all of them. Simply add `--limit_posts 1` to the command above. The resulting command will be `bundle exec jekyll serve --limit_posts 1 --baseurl ''`.
3. Open a browser and go to [http://127.0.0.1:4000](http://127.0.0.1:4000).
4. If all went well, you should see the Monero website and you're ready to make changes.

## General change recommendations
The average Monero user that will want to contribute to the website should probably start looking for issues labelled [⛑️ contributor needed](https://github.com/monero-project/monero-site/issues?q=is%3Aissue+is%3Aopen+label%3A%22%E2%9B%91%EF%B8%8F+contributor+needed%22) or making blog posts, user guides or Moneropedia entries; all of which are covered in this document. If this is all you want to do, don't worry, it's actually not a daunting task at all.

If you are a web developer and would like to make large macro-level changes, it would be best to open an issue first or to get in contact with the developers on `#monero-site` (IRC/Freenode, MatterMost, Matrix).

This website is completely open-source however and anything and everything is available for changing should the community deem it necessary.

Every section from here on out will talk about how to make a specific type of web page. It will start with a bullet point list of what to do for the advanced among you that just want a quick overview. For those who are still learning this list is followed by a detailed explanation, starting with example front matter. Any variable in the front matter written in all caps you are expected to change (make sure your changes are not all caps though). It will then lead you through the rest of the process until it's time to type your content.

A few random points of note:

- After [a discussion](https://repo.getmonero.org/monero-project/monero-site/issues/982), the community decided to include only open source wallets in the 'Downloads' section of the website. Requests to add closed source wallets to that page will be rejected.
- All external links must have `https://` in front of them or they will not redirect properly.
- If you want to add a new page to the navigation, you should go to ALL LANGUAGES in the `_data/lang` folder and add the page.
- It is strongly strongly STRONGLY encouraged that if you make a change, you - at the minimum - test it on your local machine before submitting a PR. Sometimes unexpected things may happen due to a change. If you change a page, check the whole page on multiple screen sizes and browsers to make sure there wasn't any collateral damage.

## Translation
In this section you'll find the info you need to translate a page and add a new translation, but keep in mind that Monero has a [Localization Workgroup](https://github.com/monero-ecosystem/monero-translations) who coordinate and give support to translators-volunteers. For live support/request of infos, come chat on `#monero-translations` (Freenode/IRC, riot/matrix, MatterMost).

The bulk of the website and the roadmap are translatable on Weblate, an easy to use localization platform that provide contributors with a user friendly interface: [translate.getmonero.org](https://translate.getmonero.org). Before translating, please read [the guide for translators](https://github.com/monero-ecosystem/monero-translations/blob/master/weblate.md), which contains all the info and workflows you need to know before starting.

We are trying to move most of the localization work on Weblate, but some parts of the website still need to be manually translated on the repository. The following instructions will tell you which files to translate and how to proceed.

### 1. Quickstart
* Navigate to the correct language in the /i18n folder and find the page you wish to translate
* Do not translate any of the `*.yml` files in the /_18n folder
* Click the file and translate the page, not touching any HTML or markdown
* Remove `{% include untranslated.html %}` from the page
* Test/Build
* Submit PR

### 2. Navigate to correct file
Go to the /i18n folder and find the two letter code for the language you wish to translate for. Enter that folder and find the file you wish to translate. The filenames are all in English and MUST NOT BE CHANGED.

### 3. Translate the file
Here you can do your translation. Depending on the page, you may have to maneuver around some HTML or markdown. In general, anything between two tags (such as `<p>TRANSLATE THIS</p>`) should be fine. Testing is VERY important, so do NOT skip it. If during testing, the page appears different from the original English page (besides the translated text, of course), you did something wrong and may have to start again.

#### 3.1. Notes for Moneropedia Entries
Moneropedia entries have two specificities:

* The Front Matter:  
Moneropedia Fron should be translated for both *entry:* and *summary:* elements. However, *terms:* should be extanded with their translation, leaving the English words **untouched**.
This is really important for compatibility purposes. With this, if a new guide is added to the site, an English term on the untranslated version of the guide in another language could be linked to the moneropedia article (of the same language).

* The old *untranslated* snippet must be removed, therefore the next section is irrelevant here.

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

### 4. set the 'translated' snippet to true
Somewhere on the page (usually the top) should be a snippet that says `{% include disclaimer.html translated="false" version=page.version %}`. Simply change this to `{% include disclaimer.html translated="true" version=page.version %}`. This will remove the orange bar from the bottom saying the page is untranslated.

## How to add a new language
Adding a new language can be complicated. If you feel unsure about the steps necessary, contact the Website workgroup and somebody will add the new language for you.

### 1. \_config.yml file
Navigate to the root folder of the whole website and find the file labeled `_config.yml`. Open it and find the line that says `languages:`. Add your two letter language code (Google it if you don't know it) in between the brackets after the others already present. You will need to put a comma after the previous last one.

Example:
```
languages: ["en", "es", "NEW LANG HERE"]
```
Save and exit the file.

### 2. \_data folder
Navigate to the `_data/lang` folder and copy the `en` folder. Paste it into the same folder and the copy renamed to the two letter language code of the language you will be translated to.
**The 'en' folder itself should still be there. It should not be renamed. There should be a new folder in addition to the ones that were already there.**

Translate the content of the files. Do not touch anything labeled `url`.

### 3. \_i18n folder
Navigate to the \_i18n folder and duplicate the en.yml file. Rename the duplicate to the two letter language code of your language with a `.yml`. Now duplicate the `en` folder and rename it with the correct language code.
**The original folder and yml file themselves should still be there. They should not be renamed. There should be a new folder and yml file in addition to the ones that were already there.**

### 4. Open an issue on the repo where the website is hosted
After you've done all the above, you'll need to [open an issue on the repository](https://github.com/monero-project/monero-site/issues) asking to add the language you are working on to Weblate, where the core of the website is translated.

## Housekeeping

### GitHub Issues
We ask that if you open an issue on the site that you remain available for clarifying questions or corrections. We do our best to close issues that are resolved when we make changes to the site, but If your issue is resolved by a contributor and the issue is not closed we ask that you close it in a timely manner. A contributor may ask you to close an issue after it's confirmed fixed. Please review the changes to the site and close your issue if you can verify that it's fixed.

## Updates on User Guides
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

## How to make a blog post

### 1. Make a file
Navigate to the \_posts folder of the website and make a new file. Be sure the file name has no spaces and the ending is .md. Take a look at the other posts to get an idea of how to name yours

### 2. Front Matter
```
---
layout: post
title: CHANGE TO YOUR TITLE
summary: A BRIEF ONE OR TWO SENTENCE SUMMARY
tags:  [CHOOSE, RELEVANT, TAGS, AND, SEPARATE, THEM, BY, COMMAS, KEEP, THE, BRACKETS]
author: YOUR NAME OR HANDLE HERE
---
```

### 3. Write
After the front matter is finished you are free to write the remainder of your blog post in markdown.

## How to make a User Guide

### 1. Quick Start

* Create file in /resources/user-guides with an .md ending and no spaces in filename.
* Create file in /\_i18n/en/resources/user-guides with the exact same filename as above ending in .md
* Write User Guide
* Add versioning snippet
* Copy User Guide file to ALL LANGUAGES in /\_i18n/[ALL LANGUAGES]/resources/user-guides
* set translation to false in the snippet the top of each language version of your User Guide, except the original language
* Add guide using markdown in the correct category, and in alphabetic order, in ALL LANGUAGES to /\_i18n/[ALL LANGUAGES]/resources/user-guides/index.md being careful not to mess with any indentation
* Test/Build
* Submit PR

### 2. Make a file
Navigate to the /resources/user-guides folder and make a new file. Be sure the file name has no spaces and the ending is .md

### 3. Content of file
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

### 4. Create file in localization folders
Navigate to the /i18n/ folder and choose the correct folder for your language. Navigate further into the `resources/user-guides` folders and make a .md file with the EXACT SAME filename as the you made before.

### 5. Write
Write your user guide. Be succinct but thorough. Remember, people will be using your guides when they need help. Make sure all the information is there. Feel free to use images or screenshots if necessary to help get your point across.

The title should be at the top of the User Guide using a single `#` for an H1 tag. Titles will not be automatically put on these pages as with other pages. There should be NO front matter on this file.

Add the version snippet at the top of your guide (before your title):
```
{% assign version = '1.1.0' | split: '.' %}
{% include disclaimer.html translated="true" version=page.version %}
```
Your version should start at `1.1.0` as it is the first Major, first Minor, and no cosmetic changes have occurred.

### 6. Copy User Guide file into all languages
Copy your file and navigate to each language file in the /i18n folder. In each language folder go to the resources/user-guides folder and paste your user guide (don't worry, you don't have to translate it) there. This is very important, and the site will not build if the file with the same name is not in each language folder.

As you paste into each folder, open up the file and edit the snippet at the top of the file (before your title) to mark it untranslated:
`{% include disclaimer.html translated="false" version=page.version %}`. This does not need to be done in the original language that the User Guide was written in.

### 7. Add Guide to the 'User Guide' landing page of EACH LANGUAGE
In the /\_i18n/[ORIGINAL LANGUAGE OF USER GUIDE]/resources/user-guides folder, find the file labeled index.md and open it.

DO NOT CHANGE ANYTHING IN THIS DOCUMENT BESIDES WHAT YOU ARE INSTRUCTED TO.

This file will look quite different because it's HTML. Don't panic. Simply Ctrl + F (i.e. the find feature) and search for the category that you want to put your User Guide in. You will see there are some sections that are not indented like the others. They are flush with the left side of the screen. **Do not change the indentation.** You can put markdown in these areas.

Once you've identified the non-indented area under the category you would like your User Guide to be under, you can use markdown to insert your link with the others in alphabetic order. `[TITLE OF USER GUIDE]({{site.baseurl}}/LINK-TO-USER-GUIDE.html)`. Please note that the file name in between the parentheses must be EXACTLY the same name as the permalink you made in step 5.3, but with a `.html` at the end instead of `.md` and the snippet `{{site.baseurl}}/` before the link.

In the event that you think your User Guide should be in a new Category that doesn't exist yet, contact the Website workgroup.

Repeat the above process for each language version of this index page.

## How to make a Moneropedia Entry

### 1. Make a Global file
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

### 2. Make the localized File
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

### 3. Write
Write your Moneropedia entry. Remember that you can link to other Moneropedia entries using `@term-used-in-entry` as described above. Just go to the .md file of the Moneropedia entry you want to link to and use any of the terms in the `terms:` field of the front matter. Be sure to write whichever one you choose EXACTLY as shown and preceded by an ampersand.

### 4. Copy to other languages
Copy the file from the /\_i18n/en/resources/moneropedia folder to the other /\_i18n/<language>/resources/moneropedia folders and add the untranslated snippet at the same time just after the front matter, so it looks like:
```
---
entry: "PUT THE NAME OF THE TERM HERE IN QUOTE, THIS IS HOW IT WILL SHOW UP ON THE LANDING PAGE"
terms: ["PUT", "TERMS", "HERE", "EXPLAINED", "BELOW"]
summary: "PUT SUMMARY OF YOUR ENTRY HERE IN QUOTES"
---

{% include untranslated.html %}
```

## How to update the Team page

If you are acting on behalf of another individual, please make sure you get their permission first before adding them onto the Team page.

### 1. Change the .yml file
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

## How to update the Roadmap

### 1. Edit the .yml file
Navigate to the `/_data/` folder and open `lang/en/roadmap.yml`. You will notice this structure:

```
year_2014:
- month:
  STATUS:
    - name:
```
Where STATUS can be either `completed`, `ongoing` or `upcoming`.

Look for the year and month related to the entry you want to add, if the month and status are already present, simply add `- name: NAME OF YOUR ENTRY` in the correct position.

For example, there was a new release on March 2020 and you would like to add it to the roadmap as "completed":

- Scroll the `roadmap.yml` file until you arrive to `year_2020`
- The milestone happened in March so you need to look for that month (`- month: March`)
- Since the milestione has been already achieved, look for the `completed:` status.
- Under it add `-name: NAME OF YOUR ACHIEVED MULESTONE`. Which in our case would be `-name: release wallet WHATEVER`

If a year, month or status is missing, simpluy adding by following the structure you see in the page.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

The translation of the roadmap happens [on Weblate](https://translate.getmonero.org/projects/getmonero/roadmap/).

## How to add a new Merchant

### 1. Edit the .yml file
Navigate to the `/_data/` folder and open `merchants.yml`. You will notice a list separated by hyphenated `-category` tags.

Find the category that best describes your business/service and copy the code below, making sure you are keeping the alphabetic order consistent:
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

## How to add a question to the FAQ
The structure of the FAQ is a bit more complex than it used to be and contains anchors, variables and a TOC. A step by step guide would be too complex to follow. A basic knowledge of HTML is necessary to edit the page. If you wish to add a new FAQ please open an issue in the repository or/and contact the Website workgroup.

## How to add a publication to the Library

### 1. Add your file
Navigate to the `/library/` folder and drop your publication file here.

Please remind to minimize the size of your publication. For PDF, you'll find a large amount of service to compress your file with a minimal loss in quality.

### 2. Edit the .yml files
Navigate to the `/_i18n/` folder and open `en.yml`.

Go down until you find the `library` section. You will notice a list separated by hyphenated `-category` tags in a `books:` section.

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