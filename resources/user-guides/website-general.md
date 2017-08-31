---
layout: static_page
title: General Website Instructions
---

### 1.0 Introduction

Greetings everyone, this is rehrar. I'm here to walk you through everything you need to know to make changes, edits, or even completely new pages for the new getmonero.org website. It'll definitely be a bit of a ride, so strap yourself in. Please note that translations are not available yet, but when they are added, this document will be updated with instructions on how to translate the content of getmonero.org. In the meantime, any help translating this document into another language is greatly appreciated.

If for any reason you have questions or need to contact us, you can find us on the IRC channel #monero. We'll do whatever we can to help you.

### 2.0 What you'll need

* Jekyll: Getmonero.org is made using a simple, static website generator called [Jekyll](https://jekyllrb.com/). You will need it installed on your system to test any changes that you made. If you're using a Linux-based system you can just follow the instructions on the website to get up and going. If you're using Windows, you will want to check out [this site](http://jekyll-windows.juthilo.com/) for instructions on how to get Jekyll working on your system.

* GitHub: Pretty much everything in Monero is hosted on [GitHub](https://github.com) and uses Git as the primary version control system. If you're not familiar with how to use Git, you can check out [this tutorial](https://guides.github.com/activities/hello-world/) for a good overview. It will take you through pretty much everything you'll need to know to edit the website. If you haven't already, register for GitHub and fork the [Monero Website repository](https://github.com/monero-project/monero-site).

* Markdown experience: To write pages, you're going to need to know how to use Markdown. It's basically a in-between language that enables people who don't know HTML to just write, and it will be compiled into HTML for you. You can find a great Markdown cheat sheet with examples [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). IF you need more help, Google and YouTube are great resources.

*Note: If you're confused, feel free to click other files in the same directory (folder) that you are in for the step that you are on to see some working examples. Compare them to the instructions and you should understand better.*

* Jekyll Gems: The current iteration of the getmonero.org website uses the following plugins:
  * [jekyll-paginate](https://jekyllrb.com/docs/pagination/)
  * builder
  * rubysl-rexml
  * In the event that more gems are added, this documentation will be updated to reflect the changes needed to build the site.

*Note:* To install them all at once, use the command: `gem install builder rubysl-rexml jekyll-paginate`

Once you have the above list of things, it's typically a good idea to build the website from your local computer to make sure it works before you make any changes. To do this, complete the following steps:

1. Navigate to the your local `monero-site` repository.
2. Serve the website: `jekyll serve`
3. Open a browser and go to [http://127.0.0.1:4000](http://127.0.0.1:4000).
4. If all went well, you should see the Monero website and you're ready to make changes.

### 3.0 General change recommendations

The average Monero user that will want to contribute to the website should probably stick with making blog posts, user guides, Moneropedia entries, or a Forum Funding System proposal, all of which are covered in this document. If this is all you want to do, don't worry, it's actually not a daunting task at all. If you are not well versed in web development however, it is not recommended you try to do anything beyond that.

If you are a web developer and would like to make large macro-level changes, it would be best to get in contact with rehrar. The HTML/CSS framework is custom, though quite easy to use for a seasoned developer. Still, there are some pages that are more complicated than others and would require fair amounts of styling changes should the structure change significantly.

This website is completely open-source however, and anything and everything is available for changing should the community deem it necessary.

Every section from here on out will talk about how to make a specific type of web page. It will start with a bullet point list of what to do for the advanced among you that just want a quick overview. For those who are still learning this list is followed by a detailed explanation, starting with example front matter. Any variable in the front matter written in all caps you are expected to change (make sure your changes are not all caps though). It will then lead you through the rest of the process until it's time to type your content.

All external links must have http:// or https:// in front of them or they will not redirect properly.