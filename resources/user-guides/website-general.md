---
layout: static_page
title: General Website Instructions
---

### Introduction

This README here to walk you through everything you need to know to make changes, edits, or even completely new pages for the new getmonero.org website. It'll definitely be a bit of a ride, so strap yourself in. Please note that translations are not available yet, but when they are added, this document will be updated with instructions on how to translate the content of getmonero.org. In the meantime, any help translating this document into another language is greatly appreciated.

Feel free to skip down to a relevant section if you already know what you need. So to go to the 'How to make a User Guide' section use your find function and type '5.0'. 

If for any reason you have questions or need to contact us, you can find us on the IRC channel #monero. We'll do whatever we can to help you.

### What you'll need

* Jekyll: Getmonero.org is made using a simple, static website generator called [Jekyll](https://jekyllrb.com/). You will need it installed on your system to test any changes that you made. If you're using Windows, you will want to check out [this site](http://jekyll-windows.juthilo.com/) for instructions on how to get Jekyll working on your system. If you're using a Linux-based system you can just follow the instructions on the website to get up and going:
  * Install Ruby
  * Install Bundler: `gem install bundler`
  * Install Jekyll with all dependencies (run from the project directory): `bundle`

* GitHub: Pretty much everything in Monero is hosted on [GitHub](https://github.com) and uses Git as the primary version control system. If you're not familiar with how to use Git, you can check out [this tutorial](https://guides.github.com/activities/hello-world/) for a good overview. It will take you through pretty much everything you'll need to know to edit the website. If you haven't already, register for GitHub and fork the [Monero Website repository](https://github.com/monero-project/monero-site).

* Markdown experience: To write pages, you're going to need to know how to use Markdown. It's basically an in-between language that enables people who don't know HTML to just write, and it will be compiled into HTML for you. You can find a great Markdown cheat sheet with examples [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). IF you need more help, Google and YouTube are great resources.

*Note: If you're confused, feel free to click other files in the same directory (folder) that you are in for the step that you are on to see some working examples. Compare them to the instructions and you should understand better.*

Once you have the above list of things, it's typically a good idea to build the website from your local computer to make sure it works before you make any changes. To do this, complete the following steps:

1. Navigate to your local `monero-site` repository.
2. Serve the website: `jekyll serve`
3. Open a browser and go to [http://127.0.0.1:4000](http://127.0.0.1:4000).
4. If all went well, you should see the Monero website and you're ready to make changes.

### General change recommendations

The average Monero user that will want to contribute to the website should probably stick with making blog posts, user guides, Moneropedia entries, or a Forum Funding System proposal, all of which are covered in this document. If this is all you want to do, don't worry, it's actually not a daunting task at all. If you are not well versed in web development however, it is not recommended you try to do anything beyond that.

If you are a web developer and would like to make large macro-level changes, it would be best to get in contact with rehrar. The HTML/CSS framework is custom, though quite easy to use for a seasoned developer. Still, there are some pages that are more complicated than others and would require fair amounts of styling changes should the structure change significantly.

This website is completely open-source however and anything and everything is available for changing should the community deem it necessary.

Every section from here on out will talk about how to make a specific type of web page. It will start with a bullet point list of what to do for the advanced among you that just want a quick overview. For those who are still learning this list is followed by a detailed explanation, starting with example front matter. Any variable in the front matter written in all caps you are expected to change (make sure your changes are not all caps though). It will then lead you through the rest of the process until it's time to type your content.

A few random points of note:

- All external links must have http:// or https:// in front of them or they will not redirect properly.
- If you want to add a new page to the navigation, you should note that there are two menus in `header.html`. One for mobile and one for desktop. Your page must be added in the appropriate place in BOTH navigations.
- It is strongly strongly STRONGLY encouraged that you if you make a change, you - at the minimum - test it on your local machine before submitting a PR. Sometimes unexpected things may happen due to a change. If you change a page, check the whole page on multiple screen sizes and browsers to make sure there wasn't any collateral damage.

### Housekeeping

#### GitHub Issues
We ask that if you open an issue on the site that you remain available for clarifying questions or corrections. We do our best to close issues that are resolved when we make changes to the site, but If your issue is resolved by a contributer and the issue is not closed we ask that you close it in a timely manner. A contributer (rehrar, SamsungGalaxyPlayer, or other community members, etc) may ask you to close an issue after it's confirmed fixed. Please review the changes to the site and close your issue if you can verify that it's fixed.

#### Pull Requests
Contributers should use [issue keywords](https://help.github.com/articles/closing-issues-using-keywords/) to make it easier for maintainers to close issues when they merge. Include close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved, etc in the commit message or pull request description, so that the correct issue can be closed if your PR is merged. (Example: 'fixes #1234' could close Issue 1234 when merged.)

Pull requests allow others to make comments or review your changes to the site. We ask that you remain available to comment or make changes to your PR. Pull requests with pending changes for more than 30 days will be closed and need to be resubmitted in the future. Sometimes someone else's changes might make your changes conflict with the current site. If that happens you may need to rebase your PR. (If you're unsure about how to do so, you can reach out to other contributers on IRC (freenode #monero) and someone should be able to walk you through it.