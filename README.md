![gh-actions/site](https://github.com/monero-project/monero-site/workflows/gh-actions/site/badge.svg?branch=master)

## Introduction

This README will walk you through everything you need to know to make changes, edits, or even completely new pages for the [getmonero.org website](https://getmonero.org/). It'll definitely be a bit of a ride, so strap yourself in. Feel free to skip down to a relevant section if you already know what you need.

If you need support about something related to the website, please join `#monero-site` [Libera/IRC](irc://irc.libera.chat/#monero-site) or [Matrix](https://matrix.to/#/!txpwSzQzkuUaVbtsIx:matrix.org). For general info about Monero join `#monero`. We'll do whatever we can to help you.

## What you'll need

* Jekyll: [getmonero.org](https://getmonero.org/) is made using a simple, static website generator called [Jekyll](https://jekyllrb.com/). You will need it installed on your system to test any changes that you made. Follow the instructions on the website to get up and going:
  * Install Ruby dependencies as suggested [in the Jekyll documentation](https://jekyllrb.com/docs/installation/)
  * Install Bundler: `gem install bundler`
  * Install Jekyll with all dependencies (run from the project directory): `bundle`

* GitHub/GitLab: Pretty much everything in Monero is hosted on [GitHub](https://github.com/monero-project) or [getmonero GitLab](https://repo.getmonero.org/users/monero-project/projects) and uses Git as the primary version control system. If you're not familiar with how to use Git, you can check out [this tutorial](https://guides.github.com/activities/hello-world/) for a good overview. It will take you through pretty much everything you'll need to know to edit the website. If you haven't already, register on GitHub and fork the [Monero Website repository](https://github.com/monero-project/monero-site).

*Note: If you're confused, feel free to click other files in the same directory (folder) that you are in for the step that you are on to see some working examples. Compare them to the instructions and you should understand better.*

Once you have the above list of things, it's encouraged to build the website from your local computer to make sure it works before you make any changes. To do this, complete the following steps:

1. Navigate to your local `monero-site` repository.
2. Serve the website: `bundle exec jekyll serve`. If you want, you can speedup this process by loading only the last blog post instead of all of them. Simply add `--limit_posts 1` to the command above. The resulting command will be `bundle exec jekyll serve --limit_posts 1`.
3. Open a browser and go to [http://127.0.0.1:4000](http://127.0.0.1:4000).
4. If all went well, you should see the Monero website and you're ready to make changes.

## General change recommendations

If you are a web developer and would like to make large macro-level changes, it would be best to open an issue first or to get in contact with the developers.

This website is completely open-source however and anything and everything is available for changing should the community deem it necessary.

A few random points of note:

- After [a discussion](https://repo.getmonero.org/monero-project/monero-site/issues/982), the community decided to include only open source wallets in the 'Downloads' section of the website. Requests to add closed source wallets to that page will be rejected.
- Adding and removing exchanges from the 'Merchants & Exchanges' page is at our discretion.
- All external links must have `https://` in front of them or they will not redirect properly.
- If you want to add a new page to the navigation, you should go to ALL LANGUAGES in the `_data/lang` folder and add the page.

### Tor

This website is available natively on Tor. The onion address is in `_includes/onion.html` and a signed document containing the same address is in `/onion.txt`. The address in these 2 files must *always* match. The `onion.txt` files also includes the onion address of the 'downloads' subdomain.

If you want to post getmonero's onion address somewhere on the website, don't simply write it, instead include it using `{% include onion.html %}`. This avoids problems with typos and allow us top change the address only in one file if necessary.

## PR workflow

To simplify the process of drafting, reviewing and merging pull requests, we use a GitHub Project board. This Kanban board makes easier for people to see and participate to the pull request workflow: [monero-site: PR workflow](https://github.com/orgs/monero-project/projects/1).

## Translation

In this section you'll find the info you need to translate a page and add a new translation, but keep in mind that Monero has a [Localization Workgroup](https://github.com/monero-ecosystem/monero-translations) who coordinate and give support to translators-volunteers. For live support/request of information, come chat on `#monero-translations` on Matrix or IRC (Libera.chat)
The entire website is translatable on Weblate, an easy to use localization platform that provide contributors with a user friendly interface: [translate.getmonero.org](https://translate.getmonero.org). Before translating, please read [the guide for translators](https://github.com/monero-ecosystem/monero-translations/blob/master/weblate.md), which contains all the info and workflows you need to know before starting.

Translators are required to have:

- A basic understanding of Monero technologies and wallets
- A basic knowledge of markdown syntax
- A basic knowledge of HTML syntax

#### Notes for Moneropedia Entries

The Moneropedia is translatable on Weblate. You'll find instructions on the platform and in some cases specific instructions if the string requires it, but in general Moneropedia entries have two specificities:

* The Front Matter:  
Moneropedia should be translated for both *entry:* and *summary:* elements. However, *terms:* should be extended with their translation, leaving the English words **untouched**.
This is really important for compatibility purposes. With this, if a new guide is added to the site, an English term on the untranslated version of the guide in another language could be linked to the moneropedia article (of the same language).

* The snippet keeping track of the status of the translation must be updated (`{% include disclaimer.html translated="no" translationOutdated="no" %}`). If the document is translated, change `translated="no"` to `translated="yes"`. If the document is translated, but the original file (in English) was updated, change `translationOutdated="no"` to `translationOutdated="yes`.

#### Notes for user guides screenshots

User guides can contain screenshots. By default they are all displayed in English, but a complete localized user guide should have translated screenshots as well.  
Screenshots cannot be translated as text obviously, so the only viable solution is to take the same screenshot as the one in the English version, but using the language of the guide you want to update.

For example, if the user guide `How to solo mine with the GUI` is translated into French and you want to have the screenshot translated, follow these steps:

1. Go to `/img/resources/user-guides`
2. If this is the first localized screenshot for that language, you'll need to create a dedicate folder with the code of that language. In this example we'll use `fr`.
3. Copy the folder containing the screenshots of the guide you are working on from inside the `en` folder. In this example you have to copy `solo_mine_GUI` into `fr`
4. Now take a look at the screenshots inside `solo_mine_GUI` and replace them with screenshots of the GUI in French.
5. Edit the path of the images in the markdown file which contains the guide. Remember that by default all guides point to the English version, so everything you'll have to do is to change the path of the screenshot and replace `en` with your language code. In our example, we need to navigate to `/_i18n/fr/resources/user-guides/solo_mine_GUI.md` and change the path of all screenshots from `/img/resources/user-guides/en/remote_node/SCREENSHOT.png` to `/img/resources/user-guides/fr/remote_node/SCREENSHOT.png`.

## How to add a new language

Adding a new language can be complicated. If you feel unsure about the steps necessary, contact the Website workgroup and somebody will add the new language for you.

### 1. \_config.yml file
Navigate to the root folder of the whole website and find the file labeled `_config.yml`. Open it and find the line that says `languages:`. Add your two letter language code (Google it if you don't know it) in between the brackets after the others already present. You will need to put a comma after the previous last one.

Example:
```
languages: ["en", "es", "NEW LANG HERE"]
```
Save and exit the file.

### 3. \_i18n folder

Navigate to the \_i18n folder and duplicate the en.yml file. Rename the duplicate to the two letter language code of your language with a `.yml`. Now duplicate the `en` folder and rename it with the correct language code.
**The original folder and yml file themselves should still be there. They should not be renamed. There should be a new folder and yml file in addition to the ones that were already there.**

### 4. Open an issue on the repo where the website is hosted

After you've done all the above, you'll need to [open an issue on the repository](https://github.com/monero-project/monero-site/issues) asking to add the language you are working on to Weblate, where the core of the website is translated.

## Housekeeping

### GitHub Issues

We ask that if you open an issue on the site that you remain available for clarifying questions or corrections. We do our best to close issues that are resolved when we make changes to the site, but If your issue is resolved by a contributor and the issue is not closed we ask that you close it in a timely manner. A contributor may ask you to close an issue after it's confirmed fixed. Please review the changes to the site and close your issue if you can verify that it's fixed.

### Reviewing Process

When a pull request suggesting changes is opened, it will be merged only once it will be reviewed (with some exceptions, like binaries and hashes updates). The process to review a PR is simple:

1. Go through the suggested changes and check that everything is fine and nothing is broken. We have multiple tools that make this process easier: Netlify's previews, which will show a preview of how the website will look like once the PR is merged; GitHub's checks, which will try to build the PR and will say if there were errors during the process.
2. if you think something should be changed, comment on the interested lines, stating clearly what changes you suggest and why. GitHub gives [a set of useful tools](https://github.com/features/code-review/) to make code review easier for both authors and reviewers.
3. When you think the PR is ready to be merged, use GitHub's native "Approve" option, or write a comment explicitly stating your approval. Some common ways to approve a PR is by writing: *ACK/uTACK*, *Reviewed* and *LGTM (Let's Get This Merged)*. Doesn't matter what wording you use, just make your approval clear.
4. In the case you wish a PR doesn't get merged for some reason, make it known by using clear wording. A common way to show disapproval is by writing *NACK (Not Acknowledged)*. NACKing a PR should be accompanied by a detailed explanation of why that PR should be refused.

## Updates on User Guides

User guides and developer guides may need regular updates, either to fix typos, to add explanations regarding new features, to update screenshots, and so on.
As those guides are translated in several languages, it could be hard to keep all languages version up to date with the English version.
To keep track of those changes, the user guides (but not the developer guides) are versioned using a snippet at the top of each localized (\_i18n/en/resources/\*-guides) file:

```
{% include disclaimer.html translated="no" translationOutdated="no" %}
```

This snippet is responsible for keeping track of the language version. If the guide is translated, change `translated="no"` to `translated="yes"`. if the page is translated, but something changed in the original guide in English, change `translationOutdated="no"` to `translationOutdated="yes"`.

The based version (English version) is however also tracked in the `Front Matter` from the /resources/user-guides/ directory file:

```
outdated: False
```

If the guide is outdated, simply change `False` into `True`.

When you update a guide, you are responsible for updating this version tracking in every file involved in your update. Don't be afraid to ask for help if the process is not clear to you.

The screenshots of all user guides are in `/img/user-guides/LANG`. Where `LANG` can be any of the languages supported by Getmonero. By default, all localized versions of the website will use the English version of the screenshots, see the [translations](#translation) section for info about translating screenshots.

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

{% t global.lang_tag %}
```

If you want to add a personalized picture to a blog post that will show as logo on social networks, add `image: /blog/assets/$FOLDER/$IMAGE` to the front matter. Where `$FOLDER` is the name of the folder you created to contain the image related to your blog post and `$IMAGE` is the name of the image.

### 3. Write

After the front matter is finished you are free to write the remainder of your blog post in markdown.

## How to make a User Guide

### 1. Quick Start

* Create file in /resources/user-guides with an .md ending and no spaces in filename.
* Create file in /\_i18n/en/resources/user-guides with the exact same filename as above ending in .md
* Write User Guide
* Add versioning snippet
* Add guide using markdown in the correct category, and in alphabetic order, in ALL LANGUAGES to /\_i18n/[ALL LANGUAGES]/resources/user-guides/index.md being careful not to mess with any indentation
* Test/Build
* Submit PR

### 2. Make a file

Navigate to the /resources/user-guides folder and make a new file. Be sure the file name has no spaces and the ending is `.md`

### 3. Content of file

```
---
layout: user-guide
title: TITLE OF YOUR USER GUIDE
permalink: /resources/user-guides/NAME-OF-FILE-GOES-HERE.html
outdated: False
---

{% tf resources/user-guides/NAME-OF-FILE-GOES-HERE.md %}
```

Copy this exactly and merely change the files names where indicated.

### 4. Write

Write your user guide. Be succinct but thorough. Remember, people will be using your guides when they need help. Make sure all the information is there. Feel free to use images or screenshots if necessary to help get your point across. There should be NO front matter on this file.

Add the snippet monitoring the status of the translations at the top of your guide:

```
{% include disclaimer.html translated="no" translationOutdated="no" %}
```

If you are copying the structure of another guide, the snippet will be already there with the default value (`no` and `no`. Meaning the guide is not translated)

### 5. Add Guide to the 'User Guide' landing page of EACH LANGUAGE

In the /\_i18n/[ORIGINAL LANGUAGE OF USER GUIDE]/resources/user-guides folder, find the file labeled index.md and open it.

DO NOT CHANGE ANYTHING IN THIS DOCUMENT BESIDES WHAT YOU ARE INSTRUCTED TO.

This file will look quite different because it's HTML. Don't panic. Simply Ctrl + F (i.e. the find feature) and search for the category that you want to put your User Guide in. You will see there are some sections that are not indented like the others. They are flush with the left side of the screen. **Do not change the indentation.** You can put markdown in these areas.

Once you've identified the non-indented area under the category you would like your User Guide to be under, you can use markdown to insert your link with the others in alphabetic order. `[TITLE OF USER GUIDE]({{site.baseurl}}/LINK-TO-USER-GUIDE.html)`. Please note that the file name in between the parentheses must be EXACTLY the same name as the permalink you made in step 5.3, but with a `.html` at the end instead of `.md` and the snippet `{{site.baseurl}}/` before the link.

In the event that you think your User Guide should be in a new Category that doesn't exist yet, contact the Website workgroup.

## How to make a Moneropedia Entry

### 1. Make a Global file

Navigate to the /resources/moneropedia folder and make a new file. Be sure the file name has no spaces and the ending is .md
Fill this file with this exact content:

```
---
layout: moneropedia
title: titles.moneropedia
entry: moneropedia.entries.ENTRY
---

@moneropedia_article

{% t global.lang_tag %}
{% tf resources/moneropedia/account.md %}

```

Where `ENTRY` is a one word identifier for the title/name of your Moneropedia entry. For example, if you are adding a new Moneropedia entry called "Daemon", it can be `moneropedia.entries.daemon`.

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

### 4. Add the title to _i18n/en.yml

Now you need to add the title of the page to the `_18n/en.yml` file. It *must* be in the `moneropedia` section and must be the same as the `ENTRY` you added early in the `/resources/moneropedia` folder (moneropedia.entries.ENTRY). Keeping as example a Moneropedia called "Daemon", you have to add in the `moneropedia` block `daemon: Daemon`.

## How to update the Workgroups page

The page is composed by boxes, each containing a workgroup. Just make sure to copy the structure from the preceding box and paste it right after it.

Note that the class of the `div` which forms the box is `right/left half col-lg-6 col-md-6 col-sm-12 col-xs-12`. Make sure to choose `left` or `right` according to the position you want the box to appear in.

## How to update the Roadmap

The file containing the structure of the roadmap is in `/resources/roadmap/index.md`.

If you want to update the roadmap, you'll probably want to add a new entry (under an existing year+month) or a new entry under a new month.

A new entry can be added using HTML lists:

```
<li class="STATUS">{% t roadmap.KEY %}</li>
```

Where `STATUS` can be:

- `completed` for completed milestones
- `ongoing` for milestones currently being worked on
- `upcoming` for milestones not yet completed or in progress

If an entry is `completed`, a green tick simble will be displayed on its left. if it's `ongoing` a roadwork sign and `upcoming` a compass.

`KEY` is the key used in the `_i18n/LANG.yml` file, in the `roadmap` section. If you are adding a new entry, you only need to add the key and its contained text in the `_i18n/en.yml` file. Weblate, the localization platform, will deal with making the string available for translators and then add it to all languages.

If you need to add a month, add `<h3 id="months">{% t roadmap.MONTH %}</h3>` above your roadmap entry. `MONTH` is one of the 12 months, you'll find the list in the `_18n/en.yml` file. In the `roadmap` section.

The roadmap can be translated on Weblate [on Weblate](https://translate.getmonero.org/projects/getmonero/monero-site/).

## How to add a question to the FAQ

The structure of the FAQ is a bit more complex than it used to be and contains anchors, variables and a TOC. A step by step guide would be too complex to follow. A basic knowledge of HTML is necessary to edit the page. If you wish to add a new FAQ please open an issue in the repository or/and contact the Website workgroup.

## How to add a publication to the Library

### 1. Add your file

Navigate to the `/library/` folder and drop your publication file here.

Please remind to minimize the size of your publication. For PDF, you'll find a large amount of service to compress your file with a minimal loss in quality.

### 2. Edit the library/index.md file

Navigate to the `library` folder and open the `index.md` file. Look for the appropriate section for your publication (`books` or `magazines`) and under the last entry add yours, using the same structure as the other entries:

```
<h3><a href="LINK-TO-PUBLICATION">NAME</a></h3>
    <p>{% t library.PLACEHOLDER-NAME %}</p>
```

Where `LINK-TO-PUBLICATION` is the URL of the actual publication. If it's a resource external to Getmonero, simply add the URL (for example `https://masteringmonero.com/free-download.html`). If you uploaded the file in the `/library` folder as explained in step 1, use this structure: `{{ site.baseurl_root }}/library/NAME-FILE`.

`PLACEHOLDER-NAME` needs to be a placeholder that will be added in the `_18n/en.yml` file, under the `library` category, as explained in the next step.

### 3. Add placeholder in en.yml

After you found the `library` category, add your placeholder and value after the last entry of the list. For example: `mypublication: "This is the description of my publication"`. In this example `mypublication` is the placeholder and needs to be also added to the entry in `index.md`, the result will be `<p>{% t library.mypublication %}</p>` and the value contained in the placeholder will be correctly displayed.

Save the changes.

## License

This repository is licensed under the [BSD 3-Clause "New" or "Revised" License](LICENSE).

All emojis designed by [OpenMoji](https://openmoji.org/) – the open-source emoji and icon project. License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/#)
