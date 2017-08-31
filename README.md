# Monero Website Instructions

Copyright (c) 2014-2017, The Monero Project

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

13.0 License

## 1.0 Introduction

Greetings everyone, this is rehrar. I'm here to walk you through everything you need to know to make changes, edits, or even completely new pages for the new getmonero.org website. It'll definitely be a bit of a ride, so strap yourself in. Please note that translations are not available yet, but when they are added, this document will be updated with instructions on how to translate the content of getmonero.org. In the meantime, any help translating this document into another language is greatly appreciated.

Feel free to skip down to a relevant section if you already know what you need. So to go to the (ADD SECTION HERE) use your find function and type (THING TO TYPE HERE). 

If for any reason you have questions or need to contact us, you can find us on the IRC channel #monero. We'll do whatever we can to help you.

## 2.0 What you'll need

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

## 3.0 General change recommendations

The average Monero user that will want to contribute to the website should probably stick with making blog posts, user guides, Moneropedia entries, or a Forum Funding System proposal, all of which are covered in this document. If this is all you want to do, don't worry, it's actually not a daunting task at all. If you are not well versed in web development however, it is not recommended you try to do anything beyond that.

If you are a web developer and would like to make large macro-level changes, it would be best to get in contact with rehrar. The HTML/CSS framework is custom, though quite easy to use for a seasoned developer. Still, there are some pages that are more complicated than others and would require fair amounts of styling changes should the structure change significantly.

This website is completely open-source however and anything and everything is available for changing should the community deem it necessary.

Every section from here on out will talk about how to make a specific type of web page. It will start with a bullet point list of what to do for the advanced among you that just want a quick overview. For those who are still learning this list is followed by a detailed explanation, starting with example front matter. Any variable in the front matter written in all caps you are expected to change (make sure your changes are not all caps though). It will then lead you through the rest of the process until it's time to type your content.

All external links must have http:// or https:// in front of them or they will not redirect properly.

### 3.1 Housekeeping
#### GitHub Issues
We ask that if you open an issue on the site that you remain available for clarifying questions or corrections. We do our best to close issues that are resolved when we make changes to the site, but If your issue is resolved by a contributer and the issue is not closed we ask that you close it in a timely manner. A contributer (rerhar, SamsungGalaxyPlayer, or other community members, etc) may ask you to close an issue after it's confirmed fixed. Please review the changes to the site and close your issue if you can verify that it's fixed.

#### Pull Requests
Contributers should use [issue keywords](https://help.github.com/articles/closing-issues-using-keywords/) to make it easier for maintainers to close issues when they merge. Include close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved, etc in the commit message or pull request description, so that the correct issue can be closed if your PR is merged. (Example: 'fixes #1234' could close Issue 1234 when merged.)

Pull requests allow others to make comments or review your changes to the site. We ask that you remain available to comment or make changes to your PR. Pull requests with pending changes for more than 30 days will be closed and need to be resubmitted in the future. Sometimes someone else's changes might make your changes conflict with the current site. If that happens you may need to rebase your PR. (If you're unsure about how to do so, you can reach out to other contributers on IRC (freenode #monero) and someone should be able to walk you through it.

## 4.0 How to make a blog post

### 4.1 Quick Start
* Make new .md file in _posts (named whatever, no spaces)
* Front Matter (below)
* Write Blog Post
* Test/Build
* Submit PR

### 4.2 Make a file
Navigate to the _posts folder of the website and make a new file. Be sure the file name has no spaces and the ending is .md

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

* Make file in /resources/user-guides with an .md ending and no spaces in filename.
* Front Matter as in 5.3
* Write User Guide
* Add guide using markdown in the correct category in /resources/user-guides/index.md being careful not to mess with any indentation
* Test/Build
* Submit PR

### 5.2 Make a file
Navigate to the /resources/user-guides folder and make a new file. Be sure the file name has no spaces and the ending is .md

### 5.3 Front Matter
```
---
layout: static_page
title: TITLE OF YOUR USER GUIDE
---
```

### 5.4 Write
Write your user guide. Be succinct but thorough. Remember, people will be using your guides when they need help. Make sure all the information is there. Feel free to use images or screenshots if necessary to help get your point across.

### 5.5 Add Guide to the 'User Guide' landing page
In the /resources/user-guides folder, find the file labeled index.md and open it. 

DO NOT CHANGE ANYTHING IN THIS DOCUMENT BESIDES WHAT YOU ARE INSTRUCTED TO.

This file will look quite different because it's HTML. Don't panic. Simply Ctrl + F (i.e. the find feature) and search for the category that you want to put your User Guide in. You will see there are some sections that are not indented like the others. They are flush with the left side of the screen. **Do not change the indentation.** You can put markdown in these areas.

Once you've identified the non-indented area under the category you would like your User Guide to be under, you can use markdown to insert your link underneath the others. `[TITLE OF USER GUIDE](LINK-TO-USER-GUIDE.html)`. Please note that the file name in between the parentheses must be EXACTLY the same name as the file name you made in step 5.2, but with a `.html` at the end instead of `.md`.

In the event that you think your User Guide should be in a new Category that doesn't exist yet, contact rehrar to make one for you.

### 5.6 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically and test that your link appears in the correct category and that it leads to your User Guide when clicked. Test your User Guide in the browser and contact rehrar if there are any bugs.

### 5.7 Submit Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 6.0 How to make a Moneropedia Entry

### 6.1 Quick Start

### 6.2 Make a file
Navigate to the /resources/moneropedia folder and make a new file. Be sure the file name has no spaces and the ending is .md

### 6.3 Front Matter
```
---
layout: moneropedia
entry: "PUT THE NAME OF THE TERM HERE IN QUOTE, THIS IS HOW IT WILL SHOW UP ON THE LANDING PAGE"
terms: ["PUT", "TERMS", "HERE", "EXPLAINED", "BELOW"]
summary: "PUT SUMMARY OF YOUR ENTRY HERE IN QUOTES"
---
```

There is one thing to highlight. The `terms:` section of the front matter can be filled with as many terms as you would like. This is how other Moneropedia entries will link to this page. You can link to other Moneropedia entries as well in your page by putting an ampersand before the term used, i.e. `@THE-TERM-USED`. This will make an automatic link in the Moneropedia entry to the referred term, replace the @term with the word used in that terms `entry:` area of the front matter, and on hover it will show the summary. How cool is that?

### 6.4 Write
Write your Moneropedia entry. Remember that you can link to other Moneropedia entries using `@term-used-in-entry` as described above. Just go to the .md file of the Moneropedia entry you want to link to and use any of the terms in the `terms:` field of the front matter. Be sure to write whichever one you choose EXACTLY as shown and preceded by an ampersand.

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

Navigate to the /_data folder and open the file titled `ffs.yml`. In this file you will find a long list of FFS proposals. 

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
Put the name or handle of the person in the `name` section and in the  `url:` section put the link to their GitHub URL (it must have https:// at the beginning). If they have no GitHub, then you may leave it blank, it won't mess anything up.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### 8.2 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `team.yml` file back in 8.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Team page `/community/team/` and check to see that the contributor is showing up in the correct place. Click their GitHub link (if applicable) and make sure it redirects correctly. Test the page and let rehrar know if there are any bugs.

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

**DO NOT MESS WITH THE INDENTATION HERE. The div that has `markdown=1` MUST be flush with the left side, the answer to the question must start flush with the left side, and the `</div>` MUST be flush with the left side. **

### 12.2 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build is successful, go to the FAQ page `/get-started/faq/` and check to see that your question is showing up and, when clicked, the answer drops down. If not, check to make sure that the `id="tab-CHANGETHIS"` in the input and the `for="CHANGETHIS"` in the label are identical to each other. Test the page and let rehrar know if there are any bugs.

### 12.3 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.

## 13.0 Website License

Copyright (c) 2014-2017, The Monero Project

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
